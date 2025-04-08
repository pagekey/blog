---
title: "Nix: Build and Distribute a Go App on GitHub (How-To)"
date: 2025-01-31
author: Steve Grice
tags:
  - nix
  - golang
---

This video shows you how to build a Go application locally, and then package it up so that others can simply copy-and-paste a Nix config snippet to install it from GitHub onto their computers. You don't have to "know a guy" to get it onto Nixpkgs - you can do everything completely from source, dynamically downloaded from GitHub!

{% youtube "PYI2EmH2v0U" %}

Article/code for this video: <https://github.com/pagekey/education/tree/main/179-Nix-Package-Go>

Timestamps:
- 0:00 Intro
- 0:04 DEMO - What We're Building
- 0:38 Overview
- 0:54 PageKey: Take Back Tech
- 1:34 1. Creating the Go Application (Directory Tree)
- 1:47 1. Creating the Go Application (main.go)
- 2:08 1. Creating the Go Application (greetings.go)
- 2:12 1. Creating the Go Application (default.nix)
- 2:35 1. Creating the Go Application (DEMO)
- 2:46 2. Running in NixOS Locally (configuration.nix)
- 3:27 2. Running in NixOS Locally (DEMO)
- 3:49 3. Testing Using default.nix
- 4:19 3. Testing Using default.nix (DEMO)
- 4:36 3. Testing Using default.nix (multiple apps)
- 5:01 4. Building from GitHub
- 5:49 4. Building from GitHub (DEMO)
- 6:23 4. Building from GitHub (Testing on NixOS)
- 6:55 That's it!
