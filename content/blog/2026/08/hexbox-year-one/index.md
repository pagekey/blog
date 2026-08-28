---
title: "Lessons Learned from Building HexBox, Year One"
date: 2026-08-27
author: Steve Grice
tags:
  - hexbox
---

{% youtube "_OL-Xa9Xo4g" %}

I've been trying to build HexBox, a local-first hardware server designed to help people own their personal computing needs, for over a year now. I started last July, roughly, but had been thinking about it for even longer. Given all the ups and downs over the last year, I thought it would make sense to pause and reflect on all that I've learned so far.

## Quality vs. Quantity
I've noticed that quality and quantity aren't checkboxes; each is a continuum, two independent axes that you have to manage carefully.

I recently stopped making weekly posts. Before that, I managed to upload something to YouTube every week of 2026 except for Week 5 - and did so during the latter part of 2025, too. This totaled to over 30 pieces of content. Forcing myself to post every week kept momentum high - I had to find something useful to say and keep the streak going! However, it often came at the cost of quality. Instead of fully focusing on delivering interesting content or on building, I was splitting my attention between both so I could check a box and keep the YouTube algorithm happy.

I don't regret the weekly posts at all - they got my shipping muscle strong and killed my proclivity for perfection. However, as I continue, I think a season focused on quality over quantity will yield the best results for PageKey and the people we're trying to serve.

Therefore, I'll be posting less, but when I do, I'd like to make sure it's valuable. I still may post every week or two, but the focus will be on progress rather than keeping a streak.

On an unrelated note, I transitioned to educational content over the last month or so,  shifting away from devlogs. Though I ultimately want PageKey to be an educational organization, I think this transition was premature. Devlogs are a fantastic format to capture things as they happen, providing raw material for later lessons without needing to be explicitly educational in the moment.

## Planning vs. Action
When I started, I was 100% biased toward action. I was inspired by entrepreneurial content pointing out that most people think and plan, but never start. So, I started, and in a frenzy, I tried all sorts of things.

I dug into running Ollama on a Pi 3B, and how to control WiFi and build a captive portal to enable a seamless login flow.

When I realized LLMs wouldn't run on a Pi (well, one ran, but not more than 0.1 token-per-second), I pivoted to using a Mini PC as the hardware platform. Sensing a need to spread out and tinker, I rented office space from a friend during the winter months and again spent many hours building onboarding, controlling WiFi, and implementing an early version of Hex, first in Python, then in Golang. I'd make progress, get stuck, and start over. I rewrote the engine at least five times, probably several more.

At the suggestion of a friend, I also pursued and submitted a provisional patent for the Contract-Provider-View embodiment of the Hex engine. First, I talked to lawyers. Then, when I saw the price tag for their services, I submitted it myself (with lots of help from LLMs). This was a wonderful crash course in Intellectual Property and patents: how they work, how to get them, and, theoretically, how to defend them.

Ultimately, I realized, as I should have known from the start, that Hex was far more valuable to everyone as an open source product. Attempting to patent the core enabling tech contradicted my mission to help people "Take Back Tech."

All this to say, being action-biased has helped me learn a ton. But my many excursions, though useful, were also expensive in terms of diverted time and focus. My goal is to still take lots of action; the only tweak will be to inject a bit of planning before I start. If I sit down, do some writing, and come up with a whitepaper or roadmap, I'm hopeful that it can turn a two-week manic research session into a five-second conversation with myself. "Do we really need to do that to Take Back Tech? No? Okay, we'll skip it."

## The User Bias

I have a tendency to overengineer. Admitting you have a problem is the first step to fixing it, right?

One story says it all: after months of toying with the internals of the HexBox, I finally had an MVP capable of a daily backup of your Google Drive files.

I gave it to a friend with a Getting Started Guide, and the setup worked!

But then came the fatal question: "So what do I even do with this thing?"

It was then that I realized I had built something without ever talking to the person I envisioned using it.

My solution? Build for myself, and then find others who share my problems. Hex should automate and standardize local self-hosting, so I don't have to SSH into my home server at 11 pm to fix broken cron jobs.

I currently self-host GitLab, Ollama, ComfyUI, Docmost, Mattermost, and a handful of other services for business or personal use. I do it all with `podman-compose` and cron jobs, which is refreshingly simple when compared to the world of Kubernetes (no offense!). However, things inevitably break, and when they do, I have to remember how it all works, login to the server, and dive into the details. This is a problem that I think Hex can solve!

## Next Steps

I need to write two more documents like this one:

- Why Take Back Tech: a bit of a mission statement, a north star to keep things on track.
- Hex: The Whitepaper. The problem, solution, design, and architecture I intend to implement, all thought through before writing any code.

I'm proud of how much I've done in the past year. In the spirit of Edison, I've learned a lot of things that won't work! But, moving forward, I'd like to move from exploration to targeted execution. To do that, I'll have to leverage all these experiences to produce better plans - to make sure that when I go off on an action rampage, I do what moves things forward. There are infinite rabbit holes - I just have to pick a direction that sends me down the right ones.
