---
title: "Building HexBox, 2026 Week 4 (Maintain Two, Iterate Faster)"
date: 2026-01-25
author: Steve Grice
tags:
  - self-hosting
  - software
  - systems
  - unit
---

{% youtube "Q2xv9NAvWgw" %}

Welcome back! This is PageKey, where we Take Back Tech. Here's something useful:

## 1. Something Useful: Maintain Two, Iterate Faster

**TL;DR: Prototype in a flexible language, then port to compiled. Expect to go back and tweak the original codebase, and maintain both in parallel for fast iteration.**

Hexagonal Architecture is incredibly useful for keeping separation of concerns clean, but translating Python to Go quickly exposes design mistakes. This week, I ported my entire Python codebase to Go using LLMs. It was fast and efficient, but I quickly ran into issues where YAML parsing details had leaked into the domain layer. This is something that's mostly harmless in Python, but causes endless problems in Go.

When you port from Python to Go (or any interpreted-to-compiled language pair), using Hexagonal Architecture gives you a big leg-up in keeping things clean. However, mixing adapter details with the core domain becomes painfully obvious. What was "just a little messy" in Python can grind Go work to a halt, forcing you to refactor heavily or even start from scratch.  

My solution is to keep the original Python codebase editable and maintain it alongside the Go version. You can iterate quickly in Python, fix design flaws, and then bring those lessons into Go. This approach lets you prototype freely, catch mistakes early, and harden your code without losing velocity.  

In short: prototype fast, harden slow, maintain both in parallel, and you’ll save yourself a lot of frustration.


## 2. What I worked on this week

- Started translating the Python Hex repo into Go.
- Added Go testing, realized design mistakes.
- Fixed YAML parsing and primitive type handling issues.

## 3. What's Next

- Fix Python codebase.
- Port the changes to Go.
- Get Hex working enough to implement Website app using it.


## 4. Freeform / Ramble: None

No time for rambling - need to get back to coding!

I can't wait to get the first iteration of this product working so I can show you exactly what I mean! Thanks for reading, and see you next week.

If you want to stay in the loop, you can subscribe on [YouTube](https://youtube.com/@PageKey) or sign up for the mailing list at [pagekey.io/unit](https://pagekey.io/unit) to follow along.
