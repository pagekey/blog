---
title: "Workflows MVP, on real hardware | Hex DevLog 2026W40"
date: 2026-10-02
author: Steve
tags:
  - hexbox
  - devlog
---

{% youtube "3wb86QPi-1w" %}

## Overview

In this devlog update, we walk through the process of taking the Hex ecosystem from initial architecture diagrams to a working Minimal Viable Product (MVP) running on actual HexBox hardware.

## Key Highlights

### 1. Architecture & Design

* Designed the initial system layout to support core workflow execution.
* Drafted sequence diagrams for session management, user authentication, and storage operations.
* Defined core sub-managers: **Session Manager**, **User Manager**, **Storage Manager**, and the **API Gateway**.

### 2. Backend Development (Python & FastAPI)

* Structured the backend as a proper Python package utilizing `hatchling` as the build system.
* Implemented TDD (Test-Driven Development) to build out `StorageManager` with JSON file persistence.
* Built authentication endpoints (`/sessions/new`, password checking, and cookie management).
* Added workflow management endpoints to list, create, and run workflows.

### 3. Frontend Development (React & Vite)

* Built a dashboard and login interface with session management.
* Resolved CORS and cookie-credential issues (`credentials: true`) across API requests.
* Used AI assistance to draft the workflow list UI components.

### 4. Hardware Deployment & Packaging

* Bundled the React single-page app directly into the Python backend package as static assets.
* Published the build package manually to PyPI.
* Successfully deployed and executed an end-to-end workflow on the **HexBox** hardware.
