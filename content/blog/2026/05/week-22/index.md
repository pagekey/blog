---
title: "Building HexBox, 2026 Week 22 (Onboarding, User 2 & The Big Question)"
date: 2026-05-29
author: Steve Grice
tags:
  - onboarding
  - hardware
  - hexbox
  - self-hosting
  - software
  - ui
---

{% youtube "5rx1Y2lRYuE" %}

## 1. Something Useful: Onboarding & Dev Mode

- Built a streamlined, first-time onboarding flow (time zones, passwords, module cloning) so new users can set up HexBox without a manual.
- Separated the complex graph engine into a dedicated "Studio" dev mode, keeping the consumer dashboard super clean.
- Added conditional UI rendering (`visible_when` and `containers`) so complex app flows can hide and show elements dynamically.

## 2. What I Worked On This Week

- Tested the hardware with our second real user, who successfully walked through the setup, pulled down modules, and mounted a network drive to free up space for games.
- Fixed a persistent UI caching issue by disabling cache on `index.html`, ensuring system updates apply instantly without requiring a hard refresh.
- Refactored the backup scheduling screen using the new visibility flags—now it automatically hides the auth prompts if you're already logged in.

## 3. What's Next

- Pausing feature development to step out of the code and talk to real people.
- Finding the exact use case. Small businesses? Tech consumers? Who has the biggest bleeding-neck problem that HexBox solves?

## 4. Freeform / Ramble

I just built the strongest foundation in the world. But for what?

The tech works. The onboarding is smooth. The config-driven UI is feeling like a real application. But building in a cave eventually hits a wall. I'm at the point where I don't feel right iterating in isolation anymore. 

I need to figure out exactly who the user is and what their specific, urgent use case is. The mission hasn't changed. We are taking back tech. Stop renting your data. But to actually make that happen, I have to ensure HexBox is solving a real problem for real people, not just serving as a cool engineering exercise for me.

## Thank you.

- Thanks for following along.
- Sign up for updates if you want to follow progress as HexBox gets closer to release.
	- YouTube: [youtube.com/@PageKey](https://youtube.com/@PageKey)
	- Email list: [https://pagekey.io/hexbox](https://pagekey.io/hexbox)
- Remember: Transparency + control = better systems for everyone.
