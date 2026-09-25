---
title: "The Hex Whitepaper"
date: 2026-09-18
author: Steve
tags:
  - hexbox
---

{% youtube "doA51LYBUtQ" %}

The goal here is to build as much of Hex in my head as I can before writing any actual code. While I love to fail forward and get started fast, a bit more thinking has proven necessary in this case; this is at least my 7th attempt at writing this codebase, after all.

As I envision it, Hex is an execution engine that translates user intent into an explainable graph of operations, and then executes that graph transparently and repeatably.

## The Problem: Too Much, and Not Enough

This is my big complaint with the software I use today. It either does too much, or not enough. It either hides complexity from you or dumps complexity on you. Hex wants to let you choose the level of abstraction.

By too much, I mean a bare bash terminal. Infinite flexibility - run any command you want - but if you need to start over from scratch, good luck figuring out what you did to get there. The history file is all you've got, and that's just a list of commands.

At the other extreme, imagine trying to use a Chromecast to do anything other than watch YouTube videos. It's a purpose-built device that deliberately locks you out of anything else the processor could be doing.

The goal with Hex is to capture what you're trying to do cleanly, along with the things you try along the way, so that you can roll things back as needed, tinker and experiment, and when you're happy with something, lock it in. It's not vendor lock-in - it's knowledge lock-in.

## Design Principles

These lofty ideals will guide how Hex gets made.


### Transparency Over Magic

When something "just works," it can feel magical. This is great, until something doesn't quite work. When that happens, you need transparency so that you can quickly identify what went wrong. Magic is for boardrooms; transparency is for doers.

### Zoom In on Anything

You shouldn't have to understand _everything_, but you should be able to understand _anything_.

We want to stay decidedly human-first, starting with what you want to accomplish (the intent) and exposing all of the steps to get there. The steps should be high-level, but any step should be something you can click to zoom-in on, revealing the substeps within. This should be possible all the way down to the bottom where something really happens. At the end of the day, there must be a command running somewhere, a function executing - reading a file, writing some data, reaching out to the internet. Let's make sure that if you want to see it, you can.

### One Intent, Many Workflows

Usually, the best way to figure out how to do something is to figure out the simplest solution possible and build from there. If you can accomplish the same intent in more than one way, this allows you to iterate and figure out what works best for you in various situations. Allowing many workflows for a single intent makes this possible.

### Portable & Inspectable

We want the engine itself to be portable and inspectable. Ideally, this will mean one executable file that you install on a server to enable the Hex API. You can see exactly what's configured in a variety of ways, letting you pin down exactly why it's behaving as it is.

Also, it'll be developed in the open, so you know how it was made.

### User Ownership Over Convenience

If you own something, it's yours to use when you want, without asking for permission. Use it at 2 am, give it to a friend, break it with a hammer - nobody's stopping you.

When things break, it's not always convenient or easy to fix. However, when you treat unexpected failures as learning opportunities, you invest in yourself, and everyone comes out ahead in the long term.

We'll also need to make sure it's easy to roll back to a previous state, so that when you break things, recovering is as painless as possible.

## The Hex Model

At its heart, Hex is really just 5 things:

1. **Intent:** what the user wants
2. **Workflow:** one way of accomplishing the intent
3. **Operation:** an individual step of the workflow
4. **Execution:** a particular attempt to run an operation
5. **Asset:** where the workflow actually runs

To begin, we have to trigger a workflow for anything to happen. There are two ways that workflows can be triggered:

>  Intent → Workflow

An intent is what the user wants. In this case, they choose a workflow to satisfy their intent in real time.

>  Events → Hooks → Workflows

If you set up a hook to respond to a particular event, that hook can trigger a workflow just as a user would. This is helpful when you want a backup to start in the middle of the night when you're trying to sleep.

Once the workflow has been triggered, the hierarchy always remains the same:

>  Workflow → Operations → Executions → Asset

The workflow is a graph of operations. Each operation says what to do. Then, the graph runs, and each operation produces an execution, which is like a little receipt saying what ran and how it went. Finally, all of this has to run somewhere, on an asset.

An asset is the system on which the workflow actually runs. This is a server, computer, or other piece of infrastructure with a CPU that's actually making these operations happen. It can be a local server, a VPS in the cloud, or anything else - maybe eventually a phone, laptop, or even robot!

## How You'll Use Hex

1. **Define** what you're trying to get done.

2. **Plan** how you'll accomplish it by creating a workflow.

3. **Execute** the workflow.

4. **Observe** how it went - what failed? what needs to change?

5. **Modify** the workflow in the smallest way possible to get it closer to the state you want.

6. **Repeat** until you've accomplished your initial goal.

## Example: Install Immich

Let's say you want to Install Immich, which is a self-hosted version of Google Photos.

Your intent is "Install Immich" - you open the Hex client, choose an asset, such as your [HexBox](https://pagekey.io/hexbox), and create a new intent with this title.

Then, you create a workflow tied to this intent. This particular workflow will install Immich using Podman Compose. You create operations for each of the steps, from checking whether Podman is installed to creating the compose file and making sure the containers come up healthy.

You run the workflow, and each operation turns green as it succeeds. You monitor whether Immich comes up successfully.

When it does, you decide that you'd rather use Kubernetes instead of Podman - you're upping your game. You go to the same "Install Immich" intent and add a new workflow. This one checks to make sure that a local Kubernetes cluster is available, creates a rough Helm chart, and installs it.

Eventually, workflows should be composable and swappable, simplifying the switch.

## Minimum Viable Product

The MVP that I'll build to get things started will have 6 requirements:

1. **Define workflows:** A workflow must consist of one or more operations that can be executed and recorded.

2. **Run commands**: You must be able to run arbitrary shell commands in bash as part of a workflow.

3. **Track state**: It should keep track of what commands you ran.

4. **Capture logs**: Each command's stdout and stderr should be captured as part of an execution.

5. **Expose everything through an API**: All user interactions with an asset should be through the API.

6. **Simple web UI as frontend**: The client can be a website that hits the API on the asset.

## Architecture

- **API**: Exposes HTTP endpoints for anything the user could do to read or write state.

- **Execution Engine**: Responsible for running a workflow and the operations inside of it, producing a well-structured execution record.

- **State Store**: Keeps track of executions and other metadata using a configurable storage backend.

- **Clients**: Provides a user-friendly way to connect to the API and run workflows. Uses the same UI on mobile, desktop, and web.

## Beyond the MVP

Once the basics described above are working, there are a lot of ways we'll be able to improve things. Here are 7 improvements we'll need to make Hex a truly useful tool:

1. **Arrange state into dashboards**: See how many runs you've done and expose custom stats in operations.

2. **Modules**: A way for people to share software, from entire intents with sub-workflows to single operations that are useful.

3. **Apps**: Perhaps there should be a way to package many intents into a single app for simplicity.

4. **Marketplace**: With all these modules and apps floating around, we'll need a standard way to present them so that they can be published, discovered, and installed.

5. **Events**: We need to add events, both custom and built-in.

6. **Hooks**: Once there are events flying around, we'll add hooks, which can trigger a workflow based on events.

7. **HexBox**: The HexBox will come with Hex pre-installed, so you can get started as quickly and easily as possible.


## Take Back Tech, Together

You may be wondering, why bother building something like Hex? In short, our goal is to Take Back Tech and regain ownership of the tech that runs our daily lives. See my previous video for more information on PageKey's mission.

If you want to help, here are a few things you can do.

First, download Hex and try it out. Hopefully by the time you see this video, it'll be available somewhere on PageKey.io, GitHub, and maybe other places too. Next, instead of running the executable or installer, try cloning the source code and building it yourself. Finally, read the issues in the issue tracker. From here, you can write an issue to document a bug, annoyance, or new feature idea, or choose one of the issues that you'd like to solve and create a branch to get it done.

Thanks for joining me for the Hex whitepaper. Stay tuned for more updates soon.

I'm Steve, this is PageKey, and this is how we Take Back Tech.

