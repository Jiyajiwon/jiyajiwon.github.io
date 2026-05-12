---
layout: page
title: Piper Calibration and Cross-View Alignment
description: Adapting calibration software to a Piper arm, collecting ChArUco calibration data, and validating camera/robot transforms.
importance: 3
category: robotics
---

## Problem

Robot learning policies that use images depend on consistent camera-to-robot geometry. I worked on aligning a real Piper arm setup with wrist and third-view cameras so that camera observations, point clouds, and robot poses could be interpreted in a shared coordinate frame.

## What I Did

- Adapted TRI-ML's RAIDEN calibration tooling, originally structured around a YAM bimanual robot, to a single-arm AgileX Piper setup.
- Added Piper-specific backend logic for calibration pose recording and replay.
- Connected Piper leader/follower teleoperation to calibration recording by implementing a loop that reads leader joints and commands the follower.
- Collected calibration poses using wrist and scene cameras while previewing camera images to ensure board visibility.
- Ran ChArUco-based hand-eye and scene-camera extrinsic calibration and obtained calibration result files.
- Built Open3D visualization to inspect camera frames, RGB-D point clouds, and calibration transforms.

## Technical Challenges

The pipeline failed in several practical ways before it produced useful calibration output. RAIDEN assumed right-arm CAN interfaces that did not exist in the Piper setup. RealSense installation on Jetson required environment debugging. ChArUco detection failed when the command dictionary did not match the printed board and when marker sizes were too small. After calibration, the wrist camera could not be placed in the base frame from hand-eye calibration alone; it also required the current end-effector pose from forward kinematics.

The key transform relationship was:

```text
T_base_wrist_camera = T_base_end_effector * T_end_effector_wrist_camera
```

Open3D visualization made it possible to inspect whether the calibration file was meaningful in the physical coordinate frame, rather than only checking that a JSON file was generated.

## Why It Matters

Calibration is often invisible when it works and painfully visible when it fails. This project gave me experience with the perception/systems layer that learned policies rely on: camera placement, marker detection, hand-eye transforms, FK conventions, and cross-view geometry validation.
