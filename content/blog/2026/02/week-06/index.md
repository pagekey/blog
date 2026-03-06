---
title: "Building HexBox, 2026 Week 6 (Contracts, Providers, Items)"
date: 2026-02-06
author: Steve Grice
tags:
  - cli
  - hex
  - mvp
  - self-hosting
  - software
  - systems
  - unit
---

{% youtube "y_1Ci3toBV4" %}


## 1. Something Useful: Echo Assistant

- Takes what you said, and repeats it back to you.
- Steps:

```
1. Register Assistant contract.
2. Register EchoAssistant provider.
3. Create Bob, an EchoAssistant item (instance).
4. Chat with Bob!
```

## 2. What I Worked On This Week

- Started from scratch again.
- Vibe coded this whole demo in Python.
- Reached 100% coverage at one point (slipped to 86% while adding enhancements)

## 3. What's Next

- Figure out services, create Ollama service for real local LLMs.
- Building the gateway for non-technical users.
- Rewrite in Python (again, but more carefully). (MAYBE)
	- Get back to 100% coverage
- Begin porting to Go or Rust.
- Add in-app testing.

## 4. Freeform / Ramble

- Architecture vs. Momentum: Why I threw it all away to start again
	- High-level docs first
	- Highest leverage: Chat with LLM to battle-test your mental models
	- This is how "Contracts, Providers, Items" clicked for me

## Thank you.

- Excited to show more soon!
- Stay updated via YouTube or mailing list.
	- YouTube: [youtube.com/@PageKey](https://youtube.com/@PageKey)
	- Email list: [pagekey.io/unit](https://pagekey.io/unit)
- Remember: Transparency + control = better systems for everyone
