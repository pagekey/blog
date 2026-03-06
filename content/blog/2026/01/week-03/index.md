---
title: "Building HexBox, 2026 Week 3 (Hex, A CLI for Transparent Computing)"
date: 2026-01-16
author: Steve Grice
tags:
  - self-hosting
  - software
  - systems
  - unit
---

{% youtube "_bI11_onpG8" %}

Welcome back! This is PageKey, where we Take Back Tech. Here's something useful:


## 1. Something Useful: Hex, A CLI for Transparent Computing

**TL;DR: The Python MVP of Hex (v0.1.0) is shipped. All subcommands work and we have a solid foundation.**

I'm tweaking the name of this section. For the last two weeks, "Something Useful" meant some abstract lesson that you can use in your life. I'm changing that to mean, "Something Useful PageKey can do for you." On this channel, we're building things, and one of the main reasons I make these posts is to show off what we've built so you know how it can make your life better.

See the video attached to this post for a demo of the Hex CLI working. It's a first look at the computing engine that will eventually power the PageKey Unit, unlocking transparent, modular personal computing for everyone.

We have three simple files for this demo:

1. `app.yaml`: Defines the `math` application with a single method called `add`. This serves as a "contract" for anyone implementing `math`.

2. `definition.yaml`: Provides a concrete implementation of `add` in Python.

3. `add.py`: The Python code that Hex runs, passing proper inputs and outputs.

Here's what it looks like when you run it in the terminal:

1. Register the app.

```bash
$ hex register app.yaml
✅ Successfully registered math from app.yaml.
```

2. Run a method.

```bash
$ echo '{"a":5,"b":10}' | hex run math add /dev/stdin
✅ Subprocess succeeded!
{"sum": 15}

Ran math.add
  sum: 15
```

3. Run tests on a definition.

```bash
$ hex test math math.python
✅ Subprocess succeeded!
{"sum": 3}

0: ✅ pass ({'a': 1, 'b': 2}) => ({'sum': 3})
Overall result: ✅ pass
```


### Bonus: Hexagonal Architecture Lessons

I had a lot of trouble figure out Hexagonal Architecture at first. There are so many new concepts to learn, and it feels like endless boilerplate at first. Once you get it in place though, the benefits are huge. Testing and adding new features is WAY easier than it was before I started the refactor. Before, I was up to my eyes in code debt. Now, I feel like I have a solid foundation upon which I can build the tool that I hope will become central to our business of Taking Back Tech.

If you want to build a Python application using Hexagonal Architecture, I'd recommend these subpackages.

#### `adapters/driven`

These are the "Driven Adatpers" - they are called by Use Cases to get done whatever this application is meant to do.

#### `adapters/driving`

The "Driving Adapters" take the messy outside world and conform it to your application. This means loading config files, parsing them into "domain" objects, and passing them back to the entrypoint so it can plug them into Use Cases.

#### `application/use_cases`

The Use Cases are concrete implementations of the Input Ports. This is where you decide which real-world adapters will be used by your app to carry out its purpose.

#### `domain/aggregates`

One of three types of domain objects in Domain Driven Development (DDD), Aggregates are a collection of other domain objects. For example, your CarInsuranceInfo may contain title, insurance, registration, and other information. You don't need a special ID to track your folder containing all these things - it's just a collection.

#### `domain/entities`

These domain objects have an ID and a unique identity that persists over time. Even if you change some of the values contained in them, their identity remains the same. For example, if you paint your car, it's still your car!

#### `domain/value_objects`

Value objects' identity is based solely on the values they contain. For example, if you define a `Point(x,y)` and change the `x` or `y` value, the identity of the Point changes.

#### `entrypoints`

This code pulls everything together, plugging adapters into ports to wire together a functional application. It can be a CLI, REST service, or any number of other real-world applications.

#### `ports/input`

Input ports are what your application can do, written in terms of domain objects. For exmaple, it could be something like `CalculateTaxReturn`. Regardless of whether you pull the tax data from the internet, your desktop, or somewhere else, you're still promising to return the data in the `TaxReturn` format.

#### `ports/output`

Output ports are the tools your application uses to get its job done, written in abstract terms. Continuing the tax example, to write a tax return, you need access to a `TaxRecordsRepository`. It doesn't matter whether it's a SQL database or a text file - since ports are inside the hexagon, they only care about domain objects.


## 2. What I worked on this week

Hex Python MVP

- Merged multiple MRs from myself and a collaborator
- Rewrote using Hexagonal Architecture
- Increased test coverage

## 3. What's Next

- Add meta processes
- Rewrite in Go


## 4. Freeform / Ramble: Skip

Skipping the ramble this week - would rather spend the time working!

Thanks for reading, and see you next week.

If you want to stay in the loop, you can subscribe on [YouTube](https://youtube.com/@PageKey) or sign up for the mailing list at [pagekey.io/unit](https://pagekey.io/unit) to follow along.
