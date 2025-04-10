---
title: "How to Install NixOS on PinePhone (Ultimate Linux Cell Phone Setup)"
date: 2024-10-25
author: Steve Grice
tags:
  - nixos
  - nix
  - self-hosting
  - pinephone
  - linux
  - mobile-linux
---

Installing NixOS on the PinePhone had some tricky steps. This video is here to help you figure them out so that you can have your long-awaited Linux phone with NixOS!

{% youtube "i4o0neZZLg0" %}

Parts / Materials (affiliate links):
- PinePhone: <https://pine64.com/product/pinephone-beta-edition-with-convergence-package/>
- USB SD Converter (cheap): <https://amzn.to/3A9sZg2>
- USB SD Converter (more expensive): <https://amzn.to/4eX4hhS>
- Micro SD Card (32 GB, 1-pack): <https://amzn.to/3BRfwd6>
- Micro SD Card (32 GB, 2-pack): <https://amzn.to/3UpIerZ>
- SIM Card Popper (200-pack): <https://amzn.to/3UpIerZ>
- SIM Card Popper (10-pack): <https://amzn.to/3YlQTNe>

Somehow the 10-pack and 200-pack are only about 10 cents different in price.

Links
1) Tow-Boot Installer Download: <https://github.com/Tow-Boot/Tow-Boot/releases>
2) Tow-Boot on PinePhone Instructions: <https://tow-boot.org/devices/pine64-pinephoneA64.html>
3) NixOS PinePhone Docs: <https://mobile.nixos.org/devices/pine64-pinephone.html>
4) The exact NixOS Mobile build I used: <https://hydra.nixos.org/build/251353335#tabs-constituents>

Timestamps
- 0:00 Intro
- 0:46 Parts / Materials
- 1:55 What NOT to do with your SIM Card
- 2:29 How to Insert SD Card
- 2:43 Download Tow-Boot
- 3:03 Extract Tow-Boot
- 3:36 Detect SD Card
- 4:46 Burn Tow-Boot to SD
- 5:20 Run Tow-Boot Installer
- 6:38 Download NixOS Installer
- 7:25 Burn NixOS Installer
- 8:24 Run NixOS Installer
- 10:21 Boot into NixOS!
- 10:48 How to Login
- 11:00 Enable SSH Service
- 12:11 Login to phone from laptop
- 12:45 Install vim
- 13:27 Install git, tailscale
- 14:14 Set up tailscale
- 15:10 Outro
