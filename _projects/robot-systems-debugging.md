---
layout: page
title: Real Robot Systems Integration and Failure Analysis
description: Jetson, CAN, RealSense, Piper, SO-101, Hugging Face, and deployment debugging across real robot learning workflows.
importance: 5
category: robotics
---

## Problem

Real robot learning work often fails before the model becomes the bottleneck. I spent a significant part of my internship debugging the hardware, drivers, data plumbing, and experiment setup needed for manipulation policies to run on real systems.

## What I Did

- Set up Piper teleoperation on Jetson Orin AGX with Ubuntu 22.04, JetPack, L4T, Piper SDK, and CAN communication.
- Debugged a missing `gs_usb` CAN driver on Jetson by following kernel-module build and installation steps.
- Worked with SO-101 leader/follower arms and LeRobot tooling for calibration, teleoperation, recording, training, and deployment.
- Debugged RealSense / `pyrealsense2` installation and runtime issues in Jetson environments.
- Managed dataset and model movement between robot hardware, servers, wandb, and Hugging Face.
- Investigated deployment failures from both systems and learning perspectives.

## Failure Analysis Themes

- **Hardware feasibility:** some long-horizon task ideas were rejected or postponed because drawers, objects, or gripper interactions were unreliable even under teleoperation.
- **Camera dependence:** policy behavior changed sharply under camera viewpoint shifts and wrist-camera occlusion.
- **Data quality:** camera stability, cable motion, resolution, object appearance, and reset design affected whether demonstrations were useful.
- **Software environment:** Jetson package compatibility, CAN driver support, RealSense builds, and CLI environment conflicts affected experiment velocity.

## Why It Matters

This work is the systems foundation underneath robot learning experiments. It trained me to treat policy failure as a full-stack problem: robot hardware, sensors, calibration, data, representation, inference timing, and model behavior all have to be checked before drawing research conclusions.
