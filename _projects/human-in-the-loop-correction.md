---
layout: page
title: Human-in-the-Loop Joint-Delta Intervention
description: Runtime corrective control for a Piper Diffusion Policy setup using joint-space delta teleoperation.
importance: 4
category: robotics
---

## Problem

When a learned manipulation policy begins to fail on real hardware, a human operator may need to intervene without fully restarting the episode or destabilizing the robot. I worked on the intervention path for a Piper-arm Diffusion Policy setup.

## What I Did

- Modified the human-in-the-loop intervention code used during policy execution.
- Replaced a less accurate delta end-effector intervention path with joint-space delta control.
- Preserved the existing policy execution and dataset-recording structure while changing the corrective-control mechanism.
- Designed the intervention flow around leader and follower joint offsets rather than forced absolute synchronization.

## Technical Approach

At intervention start, the system stores the leader and follower joint states as reference values. During intervention, it computes the leader's joint delta from the reference state and applies that delta to the follower's reference joint state:

```text
commanded_follower_joint = follower_reference_joint + (current_leader_joint - leader_reference_joint)
```

This allowed the human operator to correct the policy in joint space without requiring the leader and follower to be perfectly synchronized at mode switch time.

## Why It Matters

Human correction is especially important for robot learning systems that fail outside the demonstrations they were trained on. This work gave me a concrete view of what makes runtime intervention difficult: control representation, hardware limits, mode switching, and the need to keep data recording compatible with the existing learning pipeline.
