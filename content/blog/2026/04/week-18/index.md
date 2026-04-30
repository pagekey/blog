---
title: "Building HexBox, 2026 Week 18 (Dynamic Graph Engine)"
date: 2026-04-29
author: Steve Grice
tags:
  - cli
  - hardware
  - hex
  - hexbox
  - mvp
  - self-hosting
  - software
  - systems
---

{% youtube "zhs9NCesaR8" %}

## 1. Something Useful: From Hardcoded to Dynamic

- Replaced the hardcoded DAG with a YAML-driven graph
- Added dynamic provider execution (nodes run real Python functions)
- Introduced namespaced inputs/outputs per node
- Enabled subgraphs (graphs calling other graphs)

## 2. What I Worked On This Week

- Loaded graph definitions from YAML instead of hardcoding
- Built a provider system to dynamically load and execute Python functions
- Added dependency injection for graph and provider loading
- Introduced protocols to formalize interfaces and improve testability
- Split core logic into separate modules (DAG, loaders, models)
- Added unit tests for graph execution and results
- Implemented namespaced outputs and execution tracking
- Added graph-level inputs and outputs
- Built subgraph execution via a provider (`core.call`)

## 3. What's Next

- Port this graph engine back onto the HexBox hardware
- Run the MVP backup system using the new orchestrator
- Expand input/output handling between nodes
- Continue improving test coverage as complexity grows

## 4. Freeform / Ramble

None this week.

## Thank you.

- Excited to keep pushing this forward.
- Stay updated via YouTube or mailing list.
	- YouTube: [youtube.com/@PageKey](https://youtube.com/@PageKey)
	- Email list: [https://tryhexbox.com/#Order](https://tryhexbox.com/#Order)
- Remember: Transparency + control = better systems for everyone
