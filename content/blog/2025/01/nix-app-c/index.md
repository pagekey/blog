---
title: "Nix: Build and Distribute a C App on GitHub (How-To)"
date: 2025-01-10
author: Steve Grice
tags:
  - nix
  - clang
---

This video shows you how to build a C application locally, and then package it up so that others can simply copy-and-paste a Nix config snippet to install it from GitHub onto their computers. You don't have to "know a guy" to get it onto Nixpkgs - you can do everything completely from source, dynamically downloaded from GitHub!

{% youtube "Q6jZaCmA134" %}


Article/code for this video: <https://github.com/pagekey/education/tree/main/176-Nix-Package-C>

Timestamps:
- 0:00 Intro
- 0:06 DEMO - What We're Building
- 0:53 Overview
- 1:16 PageKey: Take Back Tech
- 1:59 1. Creating the C Application (Directory Tree)
- 2:08 1. Creating the C Application (main.c)
- 2:15 1. Creating the C Application (default.nix)
- 3:33 1. Creating the C Application (DEMO)
- 3:46 2. Running in NixOS Locally (configuration.nix)
- 4:39 2. Running in NixOS Locally (DEMO)
- 4:56 3. Testing Using default.nix
- 6:28 3. Testing Using default.nix (DEMO)
- 6:41 4. Building from GitHub
- 7:16 4. Building from GitHub (default.nix - app)
- 7:37 4. Building from GitHub (default.nix - testbed)
- 9:04 4. Building from GitHub (DEMO)
- 9:40 4. Building from GitHub (Testing on NixOS)
- 10:04 That's it!
