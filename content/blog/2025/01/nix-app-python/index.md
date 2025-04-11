---
title: "Nix: Build and Distribute a Python App on GitHub (How-To)"
date: 2025-01-24
author: Steve Grice
tags:
  - nix
  - python
---

This video shows you how to build a Python application locally, and then package it up so that others can simply copy-and-paste a Nix config snippet to install it from GitHub onto their computers. You don't have to "know a guy" to get it onto Nixpkgs - you can do everything completely from source, dynamically downloaded from GitHub!

{% youtube "vvMI9wQlplI" %}

Article/code for this video: <https://github.com/pagekey/education/tree/main/178-Nix-Package-Python>

Timestamps:
- 0:00 Intro
- 0:04 DEMO - What We're Building
- 0:45 Overview
- 1:00 PageKey: Take Back Tech
- 1:36 1. Creating the Python Application (Directory Tree)
- 1:56 1. Creating the Python Application (main.py)
- 2:09 1. Creating the Python Application (default.nix)
- 2:57 1. Creating the Python Application (default.nix - PACKAGE)
- 3:25 1. Creating the Python Application (default.nix - ENVIRONMENT)
- 3:43 1. Creating the Python Application (default.nix - APP)
- 4:33 1. Creating the Python Application (DEMO)
- 4:47 2. Running in NixOS Locally (configuration.nix)
- 5:46 2. Running in NixOS Locally (DEMO)
- 6:10 3. Testing Using default.nix
- 6:33 3. Testing Using default.nix (DEMO)
- 7:03 4. Building from GitHub
- 7:13 4. Building from GitHub (DEMO)
- 7:45 4. Building from GitHub (Testing on NixOS)
- 8:16 That's it!
