---
layout: page
title: Diffusion Policy Deployment and Failure Analysis
description: Real-robot pick-and-place data collection, checkpoint deployment, latency observation, and trajectory representation debugging.
importance: 2
category: robotics
---

## Problem

Prepare and test a Diffusion Policy style manipulation pipeline for real-robot pick-and-place.

## What I Did

- Helped define an OOD pick-and-place workspace and collected 100 teleoperation episodes.
- Stabilized the physical setup by improving camera placement, cabling, and wrist-camera sensing.
- Deployed a trained checkpoint on hardware and inspected failures from rollout videos and joint traces.
- Converted joint-space trajectories toward end-effector-space data using forward kinematics.

<!-- [FIGURE PLACEHOLDER: concise pipeline diagram from demonstrations to training to deployment] -->

## Why It Matters

The deployment exposed issues that are easy to miss offline: action-chunk latency, poor pick-stage behavior, and discontinuities from rotation-vector orientation. This shaped how I think about policy evaluation and action representation.
