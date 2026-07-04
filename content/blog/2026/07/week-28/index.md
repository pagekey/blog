---
title: "Building HexBox, 2026 Week 28 (Private DNS)"
date: 2026-07-10
author: Steve Grice
tags:
  - self-hosting
  - hardware
  - dns
  - build-in-public
---

{% youtube "FW_LIjLXk0Y" %}

## Intro

Right now, I can SSH into my home server from anywhere, but I still have to type its exact IP address (`10.10.10.2`). 

Last time we built a private VPN so all our devices can securely reach our home server. Today, we're building our own private DNS server so we can use memorable names instead of IP addresses. 

By the end of this guide, your laptop, phone, and home server will all use your own private DNS server to find each other, letting you simply type `home.example.com`.

## Step 1: Install dig

First, SSH into your home server and install `dnsutils` to give us access to the `dig` command.

```bash
sudo apt update
sudo apt install dnsutils
```

We can use `dig` to test DNS queries:

```bash
dig google.com
dig google.com @8.8.8.8
dig google.com @1.1.1.1
```

## Step 2: Install podman

Run `apt update` again and install `podman` and `podman-compose`.

```bash
sudo apt update
sudo apt install podman podman-compose
```

## Step 3: Create Config Files

Create a directory for your DNS service and change into it. Then create the `etc/zones` folder.

```bash
mkdir -p ~/services/dns
cd ~/services/dns
mkdir -p etc/zones
```

Edit the `etc/named.conf` file:

```bash
vi etc/named.conf
```

Paste the following configuration, replacing `example.com` with your desired internal DNS name:

```conf
options {
    directory "/etc/bind";
    listen-on port 53 { any; };
    allow-query { any; };
    recursion yes;
    allow-recursion { any; };
};

zone "example.com" IN {
    type master;
    file "/etc/bind/zones/example.com.db";
};
```

Next, edit the zone file:

```bash
vi etc/zones/example.com.db
```

Replace `example.com` with your domain and ensure the VPN IP address (`10.10.10.2`) matches your setup:

```conf
$TTL 86400
@   IN  SOA ns1.example.com. hello.example.com. (
            2025121301 ; Serial YYYYMMDDNN
            3600       ; Refresh
            1800       ; Retry
            604800     ; Expire
            86400      ; Minimum TTL
)
@        IN  NS      ns1.example.com.
ns1      IN  A       10.10.10.2

home    IN  A       10.10.10.2
```

## Step 4: Run the DNS container

Create a start script:

```bash
vi run.sh
```

Paste the following script. This starts the DNS container as root so it can bind to port 53:

```bash
#!/bin/bash

# 1. Ensure we're running as root.
[ "$(id -u)" -eq 0 ] || { echo "Must run as root"; exit 1; }

# 2. Remove any old hanging DNS containers.
podman stop dns 
podman rm dns

# 3. Prepare filesystem permissions for container.
chown -R 53:53 etc

# 4. Run the DNS container.
podman run -d \
  --name dns \
  -p 53:53/tcp -p 53:53/udp \
  -v $(pwd)/etc:/etc/bind:Z,rw \
  docker.io/internetsystemsconsortium/bind9:9.18
```

Make the script executable and run it with `sudo`:

```bash
chmod +x run.sh
sudo ./run.sh
```

Test it out:

```bash
dig @localhost home.example.com
```

## Step 5: Run a web server

Install `nginx` as a simple example service to test with.

```bash
sudo apt update
sudo apt install curl nginx
curl localhost:80
```

## Step 6: Update VPN Settings

Edit the VPN settings on your home server to use our new DNS server:

```bash
sudo vi /etc/wireguard/wg0.conf
```

Add the following line:

```conf
DNS = 10.10.10.2
```

Do the same on your phone and laptop by editing your WireGuard tunnel configuration and adding the DNS line.

Now when you visit `http://home.example.com/` on your laptop, you will see our test website!

## Outro

Today we replaced IP addresses with names. Instead of remembering `10.10.10.2`, we can simply use `home.example.com`. And because our DNS server lives inside our VPN, those names stay completely private.

In the next video, we'll use this foundation to start hosting real services on our home server. 

The mission hasn't changed. This is how we take back tech.
