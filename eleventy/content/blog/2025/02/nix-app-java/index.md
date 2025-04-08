---
title: "Nix: Build and Distribute a Java App on GitHub (How-To)"
date: 2025-02-14
author: Steve Grice
tags:
  - nix
  - java
---

This video shows you how to build a Java application locally, and then package it up so that others can simply copy-and-paste a Nix config snippet to install it from GitHub onto their computers. You don't have to "know a guy" to get it onto Nixpkgs - you can do everything completely from source, dynamically downloaded from GitHub!

{% youtube "3vz_N9kHv9g" %}

Article/code for this video: <https://github.com/pagekey/education/tree/main/181-Nix-Package-Java>

Timestamps:
- 0:00 Intro
- 0:04 DEMO - What We're Building
- 1:05 Overview
- 1:30 PageKey: Take Back Tech
- 2:30 1. Creating the Java Application (Directory Tree)
- 2:40 1. Creating the Java Application (main.java)
- 2:45 1. Creating the Java Application (default.nix)
- 3:02 1. Creating the Java Application (default.nix Jar Build)
- 3:35 1. Creating the Java Application (default.nix Bundling)
- 4:29 1. Creating the Java Application (DEMO)
- 5:11 2. Running in NixOS Locally (configuration.nix)
- 5:50 2. Running in NixOS Locally (DEMO)
- 6:28 3. Testing Using default.nix
- 6:43 3. Testing Using default.nix (DEMO)
- 7:26 4. Building from GitHub
- 7:43 That's it!
