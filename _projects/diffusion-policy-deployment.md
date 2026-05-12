---
layout: page
title: Diffusion Policy Deployment and EE-Space Dataset Conversion
description: Real-robot pick-and-place data collection, policy deployment, action-latency analysis, and trajectory representation debugging.
importance: 2
category: robotics
---

## Problem

For a real-robot block pick-and-place experiment, I worked on preparing data and deployment workflows for Diffusion Policy style imitation learning. The task involved picking a block and placing it into a target container while considering out-of-distribution workspace placement.

## What I Did

- Helped design the manipulation scenario and workspace split for in-distribution and OOD object placement.
- Stabilized the physical setup by improving camera placement, replacing the wrist camera with a RealSense camera, securing cables, and moving the third-view camera to a tripod-mounted top-view setup.
- Collected 100 teleoperation episodes for a block pick-and-place task and uploaded the dataset for training.
- Started Diffusion Policy training and deployed a 40K checkpoint on real hardware.
- Converted collected trajectories from joint space toward end-effector space using forward kinematics.

## Technical Challenges

During deployment, the policy struggled at the pick stage and the robot motion appeared segmented rather than smooth. By checking rollout videos and joint-value plots, I connected this behavior to action chunking and possible inference latency rather than a simple hardware failure.

For dataset conversion, the first end-effector representation used rotation vectors from forward kinematics. The converted trajectories showed discontinuities in orientation values, which led me to investigate rotation representations. I identified that rotation vectors can jump near representation boundaries, while quaternions are often a better fit for continuous trajectory learning.

## Why It Matters

This project connected model-level choices to hardware-level behavior. In real robot learning, deployment quality depends on the training checkpoint, action representation, inference timing, camera setup, and task feasibility. I want to keep developing this kind of end-to-end debugging instinct for manipulation research.
