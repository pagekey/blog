---
title: "Xylo DevLog: Markdown-Based Backend, Build/Export"
date: 2024-09-27
author: Steve Grice
tags:
  - python
  - rust
  - markdown
  - xylo
---

We've added two new cool things to Xylo. The first is the ability to export the app for eventual easy self-hosting. The second is changing from a SQLite backend for PageKey Tasks to a Markdown-file based backend. It loads directly from the files, so you can use the UI, or just edit the files yourself. This type of freedom is the future of software!

{% youtube "_2VaGbSZGfg" %}

Build/Export PR: <https://github.com/pagekey/xylo/pull/5>

Markdown Backend: <https://github.com/pagekey/tasks/pull/1>
