---
layout: page
title: Real Robot Imitation Learning Pipeline
description: Teleoperation, dataset collection, training, deployment, and evaluation with SO-101 arms.
importance: 1
category: robotics
---

## Problem

Run a complete manipulation-learning loop on real hardware rather than only in simulation or notebooks.

## What I Did

- Set up SO-101 leader/follower teleoperation with wrist and external camera views.
- Collected manipulation demonstrations and prepared datasets for Hugging Face workflows.
- Fine-tuned a pretrained smolVLA model and deployed the learned policy on the robot.
- Compared behavior under fixed camera views, changed camera views, wrist-camera occlusion, and randomized object placement.

<!-- [VIDEO PLACEHOLDER: teleoperation or learned policy deployment clip] -->

## Why It Matters

This work gave me practical experience with the full robot learning pipeline: hardware setup, demonstrations, training, deployment, and evaluation. The most important lesson was that policy performance depends heavily on data quality, camera setup, and task design.
