---
title: "Nix: Build and Distribute a Rust App on GitHub (How-To)"
date: 2025-01-17
author: Steve Grice
tags:
  - nix
  - rust
---

This video shows you how to build a Rust application locally, and then package it up so that others can simply copy-and-paste a Nix config snippet to install it from GitHub onto their computers. You don't have to "know a guy" to get it onto Nixpkgs - you can do everything completely from source, dynamically downloaded from GitHub!

{% youtube "VIDEO_ID" %}

Article/code for this video: <https://github.com/pagekey/education/tree/main/177-Nix-Package-Rust>

Timestamps:
- 0:00 Intro
- 0:08 DEMO - What We're Building
- 0:59 Overview
- 1:22 PageKey: Take Back Tech
- 2:23 1. Creating the Rust Application (Directory Tree)
- 2:43 1. Creating the Rust Application (main.c)
- 2:48 1. Creating the Rust Application (default.nix)
- 3:22 1. Creating the Rust Application (DEMO)
- 3:40 2. Running in NixOS Locally (configuration.nix)
- 4:28 2. Running in NixOS Locally (DEMO)
- 4:52 3. Testing Using default.nix
- 5:33 3. Testing Using default.nix (DEMO)
- 6:03 4. Building from GitHub
- 6:24 4. Building from GitHub (default.nix - app)
- 6:54 4. Building from GitHub (default.nix - testbed)
- 7:48 4. Building from GitHub (DEMO)
- 8:10 4. Building from GitHub (Testing on NixOS)
- 8:49 That's it!
