---
title: "Building HexBox, 2026 Week 29 (Samba)"
date: 2026-07-17
author: Steve Grice
tags:
  - self-hosting
  - hardware
  - dns
  - build-in-public
---

{% youtube "bLxOFl4GcMU" %}


## Intro

Everyone wants to own the infrastructure that makes your digital life work. We want to stop renting and start thinking in terms of assets. 

Previously, we set up a physical Debian server in your house and secured it with a virtual private server acting as a VPN tunnel. Now it's finally time to put it to work. Today, we're building your own personal cloud using Samba, giving you access to your files from anywhere.

## Step 1: Install Samba

First, log into your server and install the necessary packages.

```bash
ssh hex@10.0.0.127
sudo apt update
sudo apt install samba smbclient
```

## Step 2: Set up folders

Create a directory for your network drive and set the correct ownership and permissions.

```bash
sudo mkdir -p /srv/media/mydrive
sudo chown -R $USER:$USER /srv/media
sudo chmod -R 755 /srv/media
```

## Step 3: Configure Samba

Open the Samba configuration file for editing.

```bash
sudo vi /etc/samba/smb.conf
```

Scroll to the bottom of the file and add your drive configuration:

```bash
[mydrive]
path = /srv/media/mydrive
browseable = yes
read only = no
guest ok = no
```

## Step 4: Create Samba Password

Create a Samba password for your user, enable the service to start on boot, and verify it's running.

```bash
sudo smbpasswd -a $USER

sudo systemctl enable smbd
sudo systemctl restart smbd
sudo systemctl status smbd
```

## Step 5: Test Locally

Test the configuration directly on the server to ensure your shares are visible.

```bash
smbclient -L localhost -U $USER
```

## Step 6: Connect from Windows

On your Windows machine, open File Explorer and choose **Map Network Drive**.

Enter the path to your server and drive:
`\\10.0.0.127\mydrive`

## Step 7: Connect from Mac

If you're on a Mac, open Finder.

Press `⌘ + K` (or choose **Go** → **Connect to Server...**).

Enter the Samba address for your server:
`smb://10.0.0.127/mydrive`

Click Connect.

## Outro

And just like that, we have our first real service running on our home server. You're now running your own personal cloud. Instead of paying someone else to store your files, they're sitting on an asset that you own. 

If you'd rather skip building all this stuff yourself, [check out HexBox](https://pagekey.io/hexbox). If you'd like help building your own setup, I also offer [one-on-one consulting](https://pagekey.io/help). If you don't want to maintain your own VPN, [check out PageKey VPN](https://pagekey.io/vpn).
