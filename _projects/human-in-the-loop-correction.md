---
layout: page
title: Human-in-the-Loop Policy Correction
description: Joint-space corrective intervention for a Piper policy deployment setup.
importance: 4
category: robotics
---

## Problem

Allow a human operator to correct a learned manipulation policy during execution without restarting the episode or forcing brittle leader/follower synchronization.

## What I Did

- Modified the intervention path for a Piper Diffusion Policy setup.
- Replaced delta end-effector intervention with joint-space delta teleoperation.
- Kept the existing policy execution and recording structure while changing the corrective control path.

<!-- [VIDEO PLACEHOLDER: human-in-the-loop correction during a failed rollout] -->

## Why It Matters

Real policies fail. This project gave me a concrete view of how human correction depends on control representation, mode switching, hardware limits, and data compatibility.
