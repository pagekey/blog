---
title: "Building HexBox, 2026 Week 27 (Accessing Your Server From Anywhere)"
date: 2026-07-03
author: Steve Grice
tags:
  - self-hosting
  - hardware
  - wireguard
  - vpn
  - build-in-public
---

{% youtube "EeR1D0CFRDE" %}

## Intro

Last time, we built a headless home server and stuck it on a shelf. But it created a new problem: it was only accessible when connected to the local home Wi-Fi network. 

I wanted to be able to reach my server from anywhere in the world, but I absolutely did not want to open firewall ports on my home router and expose my network directly to the public internet. 

The solution? Creating a custom Virtual Private Network (VPN) using WireGuard and a cheap $5 VPS.

## 1. Create a VPS

Instead of opening the front door of my house to the internet, I rented a tiny piece of the cloud—an AWS Lightsail VPS running Debian. 

I opened exactly one UDP port (51820) in the Lightsail firewall. This VPS acts as the front door. 

## 2. Install WireGuard

First, SSH into the VPS and install WireGuard:
```bash
ssh -i path/to/key admin@PUBLIC_IP
sudo apt update
sudo apt install wireguard
```

Generate the keys:
```bash
mkdir wg; cd wg
wg genkey | tee private.key | wg pubkey > public.key
cat private.key  # Save this for the config
```

Configure the VPS (`sudo vi /etc/wireguard/wg0.conf`):
```conf
[Interface]
Address = 10.10.10.1/24
ListenPort = 51820
PrivateKey = PASTE_VPS_PRIVATE_KEY
```

Start WireGuard:
```bash
sudo systemctl enable wg-quick@wg0
sudo systemctl start wg-quick@wg0
sudo wg
```

## 3. Connect the Home Server

Next, I installed WireGuard on the home server. The critical decision here was configuring the home server to never accept incoming connections. Instead, it makes an *outbound*, encrypted connection to the VPS. Because it's an outbound connection, we completely bypass the need for any complex port forwarding on the home router. The server stays entirely hidden from the public internet, safely behind the router, while maintaining an active encrypted tunnel to the VPS.

SSH into the home server, set up `sudo` if needed, and install WireGuard:
```bash
ssh username@your-ip-address

# Set up sudo (if needed)
su
apt update
apt install sudo
visudo # Add: yourusername ALL=(ALL:ALL) ALL
exit
sudo echo hi

sudo apt update
sudo apt install wireguard
```

Generate the home server's keys:
```bash
mkdir wg; cd wg
wg genkey | tee private.key | wg pubkey > public.key
cat private.key
```

Configure the home server (`sudo vi /etc/wireguard/wg0.conf`):
```conf
[Interface]
Address = 10.10.10.2/24
# no listen address on this one!
PrivateKey = PASTE_HOME_PRIVATE_KEY

[Peer]
PublicKey = PASTE_VPS_PUBLIC_KEY
Endpoint = PUBLIC_IP:51820
AllowedIPs = 10.10.10.0/24
PersistentKeepalive = 25
```

Start the interface on the home server:
```bash
sudo systemctl enable wg-quick@wg0
sudo systemctl start wg-quick@wg0
```

## 4. Add the Home Server to the VPS

Add the home server as a peer on the VPS (`sudo vi /etc/wireguard/wg0.conf`):
```conf
[Peer]
# My HexBox
PublicKey = PASTE_HOME_PUBLIC_KEY
AllowedIPs = 10.10.10.2/32
```

Restart WireGuard on both the VPS and home server to apply changes:
```bash
sudo systemctl restart wg-quick@wg0
sudo wg
```

## 5. Add Your Laptop

After getting the home server talking to the VPS, I added my laptop to the mix, giving it its own distinct key pair and IP address on the new virtual network. 

To set up the laptop, install the official WireGuard app, create an empty tunnel, and configure it:
```conf
[Interface]
PrivateKey = ... # DO NOT ERASE THIS PRE-GENERATED LINE!
Address = 10.10.10.3/24

[Peer]
PublicKey = PASTE_VPS_PUBLIC_KEY
Endpoint = PUBLIC_IP:51820
AllowedIPs = 10.10.10.0/24
PersistentKeepalive = 25
```

Add the laptop as another peer on the VPS (`sudo vi /etc/wireguard/wg0.conf`):
```conf
[Peer]
# My Laptop
PublicKey = PASTE_LAPTOP_PUBLIC_KEY
AllowedIPs = 10.10.10.3/32
```

Restart WireGuard on the VPS one last time:
```bash
sudo systemctl restart wg-quick@wg0
```

## 6. Add Your Phone

The mobile app works almost exactly the same way. Install the WireGuard app on Android or iOS, create a new tunnel, and assign it another fresh IP address (like `10.10.10.4/32`). Copy the public key into your VPS configuration just like we did for the laptop, and your phone is securely connected too!

## 7. The Field Test

I took my laptop to a parking lot, completely disconnected from my home Wi-Fi, and connected to my phone's cellular hotspot. 

First, I tried connecting to my server using its local IP address. Nothing. Exactly as expected.

Then, I used the new VPN IP address. Instant connection. I was SSH'd into the server sitting on a shelf back in my house, all routed through an encrypted WireGuard tunnel via the VPS. 

```bash
ssh hex@10.0.0.127  # Fails (local IP)
ssh hex@10.10.10.2  # Connects! (VPN IP)
```

Once inside, I verified I could host a simple web server over the VPN:
```bash
python3 -m http.server
# Accessible at http://10.10.10.2:8000 in the browser
```

## Wrap Up

We now have a secure, private network connecting every device we own.

Right now, accessing the server requires remembering a bunch of crazy VPN IP addresses. Next week, we'll fix that by setting up DNS and custom hostnames, so we can just type something like `files.mysite.com`.

The mission hasn't changed. We're taking back tech, and we're building the infrastructure to do it securely.

## Thank you.

- Thanks for following along.
- Sign up for updates if you want to follow progress as HexBox gets closer to release.
	- YouTube: [youtube.com/@PageKey](https://youtube.com/@PageKey)
	- Email list: [https://tryhexbox.com/#Order](https://tryhexbox.com/#Order)
- Remember: Transparency + control = better systems for everyone.
