---
title: "Building HexBox, 2026 Week 21 (Dynamic UI & Navigation)"
date: 2026-05-21
author: Steve Grice
tags:
  - backup
  - cli
  - hardware
  - hex
  - hexbox
  - self-hosting
  - software
  - ui
---

{% youtube "6G5WcFIoJZg" %}

## 1. Something Useful: A Real UI

- Introduced dynamic on-load hydration to populate UI dropdowns (e.g., fetching Google Drive folders).
- Built multi-screen navigation, allowing the UI to route between infinite different views.
- Simplified auth state by persisting credentials and refresh tokens to local JSON files.

## 2. What I Worked On This Week

- Added text fields and dropdown selects to the config-driven UI.
- Wired up an on-load effect so the UI can fetch network data before you even hit run.
- Split the backup app into distinct "Run" and "Schedule" screens with working back buttons.
- Refactored the OAuth flow to write tokens to disk, allowing decoupled graph runs without passing environments everywhere.
- Put the UI in front of a real user to test the Google Drive folder selection and backup scheduling.
- Debugged a silent failure during the user test—cron was running on GMT while the user scheduled in local time.

## 3. What's Next

- Subgraph calling. The auth logic is being repeated in too many places; graphs need to call other graphs.
- Support for multiple methods within a single Python provider file.
- Improve secrets management so tokens aren't just sitting in plain JSON files.

## 4. Freeform / Ramble

Have you ever noticed that something just breaks randomly? We have no control over how our things work. Someone can randomly update an app and completely change it, mostly because it executes in a faraway data center. 

We need ownership of our hardware and an understanding of how the software works. HexBox is about taking back tech. The goal is simple: open up self-hosting so anyone can enjoy sovereignty over their tech choices. We're starting with file backups to Google Drive, but the ultimate goal is a server in every home and a fab in every basement. This is your tiny foothold into that world.

## Thank you.

- Thanks for following along.
- Sign up for updates if you want to follow progress as HexBox gets closer to release.
	- YouTube: [youtube.com/@PageKey](https://youtube.com/@PageKey)
	- Email list: [https://tryhexbox.com/#Order](https://tryhexbox.com/#Order)
- Remember: Transparency + control = better systems for everyone.
