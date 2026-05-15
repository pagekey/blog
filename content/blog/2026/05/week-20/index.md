---
title: "Building HexBox, 2026 Week 20 (Samba, Scheduling & Apps)"
date: 2026-05-14
author: Steve Grice
tags:
  - backup
  - cli
  - hardware
  - hex
  - hexbox
  - self-hosting
  - samba
  - software
  - ui
---

{% youtube "Mr82uOzMWts" %}

## 1. Something Useful: Apps & Network Drives

- Introduced `hexmod-*` modules to act as installable "apps" (System, Backup, Samba).
- Shipped Samba support to mount HexBox backups as a local network drive on Windows.
- Successfully implemented automated, scheduled daily backups directly to the hardware.

## 2. What I Worked On This Week

- Fixed Google Drive authentication by implementing long-lived refresh tokens in cron jobs.
- Cleaned up dependency injection to pass `workspace` via a `params` object without dirtying the DAG engine.
- Shipped a working config-driven UI where YAML updates the dashboard in real-time.
- Conducted real-world user testing to validate the module pull, Samba setup, and backup flows.
- Discovered and addressed bugs around timezone offsets (UTC vs local) and file permissions during the user test.

## 3. What's Next

- Timezone onboarding step so cron jobs run at the local time.
- Implement a secure secrets management system so refresh tokens aren't stored in plain text.
- Connect UI buttons to actually trigger graph runs.
- Keep improving the UI based on user testing feedback.

## 4. Freeform / Ramble

Are you tired of everything in your life being a subscription? Tired of feeling spied on by ads the moment you talk about something? It's weird that we just accept this as the way things are.

HexBox is about taking back tech. The goal is simple: open up self-hosting to the world so anyone can enjoy sovereignty over their tech choices. We're starting with file backups, but it's heading toward email servers, messaging, and whatever else you want to run locally. A server in every home, and a fab in every basement.

## Thank you.

- Thanks for following along.
- Sign up for updates if you want to follow progress as HexBox gets closer to release.
	- YouTube: [youtube.com/@PageKey](https://youtube.com/@PageKey)
	- Email list: [https://tryhexbox.com/#Order](https://tryhexbox.com/#Order)
- Remember: Transparency + control = better systems for everyone.
