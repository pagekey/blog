---
title: "Nix: Build and Distribute a C++ App on GitHub (How-To)"
date: 2025-02-07
author: Steve Grice
tags:
  - nix
  - cpp
---

In this video, we walk through building and distributing the simplest possible C++ app using Nix. By the end, you should know how to use Nix to download source code and build it into an executable without cloning any repos to specific paths on your computer.

{% youtube "j_9GH6ZuSTE" %}

Article/code for this video: <https://github.com/pagekey/education/tree/main/180-Nix-Package-Cpp>

Timestamps:
- 0:00 Intro
- 0:03 DEMO - What We're Building
- 0:49 Overview
- 1:09 PageKey: Take Back Tech
- 2:02 1. Creating the C++ Application (Directory Tree)
- 2:12 1. Creating the C++ Application (main.cpp)
- 2:18 1. Creating the C++ Application (default.nix)
- 2:41 1. Creating the C++ Application (DEMO)
- 2:55 2. Running in NixOS Locally (configuration.nix)
- 3:43 2. Running in NixOS Locally (DEMO)
- 4:00 3. Testing Using default.nix
- 4:31 3. Testing Using default.nix (DEMO)
- 5:06 3. Testing Using default.nix (multiple apps)
- 5:45 4. Building from GitHub
- 6:28 4. Building from GitHub (DEMO)
- 6:42 4. Building from GitHub (Testing on NixOS)
- 8:28 That's it!
