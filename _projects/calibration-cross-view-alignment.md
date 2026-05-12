---
layout: page
title: Calibration and Cross-View Alignment
description: Adapting calibration tooling to Piper and validating wrist/scene camera geometry.
importance: 3
category: robotics
---

## Problem

Align wrist and third-view camera observations with the robot frame so learned policies and perception outputs can be interpreted on hardware.

## What I Did

- Adapted RAIDEN calibration tooling from a bimanual YAM setup to a single-arm Piper setup.
- Added Piper-specific backend logic for calibration pose collection and replay.
- Ran ChArUco-based hand-eye and scene-camera calibration.
- Visualized camera frames, point clouds, and transform chains in Open3D to check whether the calibration was physically meaningful.

<!-- [IMAGE PLACEHOLDER: wrist + scene camera calibration visualization] -->

## Why It Matters

This work strengthened the perception/systems side of my robotics experience. It also made clear that calibration is not just a command: board detection, camera placement, FK conventions, and transform validation all affect downstream policy deployment.
