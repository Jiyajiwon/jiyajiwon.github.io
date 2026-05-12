---
layout: page
title: End-to-End Manipulation Pipeline with LeRobot and smolVLA
description: Teleoperation, dataset collection, fine-tuning, deployment, and robustness checks on SO-101 hardware.
importance: 1
category: robotics
---

## Problem

I worked on a real-robot imitation learning pipeline for tabletop manipulation, using SO-101 leader/follower arms and LeRobot tooling. The goal was to move beyond reading about robot learning models and run the full cycle: task design, teleoperation, dataset collection, model training, deployment, and evaluation.

## What I Did

- Set up SO-101 leader/follower manipulation with two camera views: an arm-mounted view and a fixed external webcam.
- Collected teleoperation demonstrations for manipulation tasks and uploaded datasets to Hugging Face.
- Adjusted data-collection resolution after an initial high-resolution dataset created practical training and recording issues.
- Fine-tuned a pretrained smolVLA model on collected demonstrations and monitored training with wandb.
- Deployed the trained policy on the same hardware and evaluated behavior under changed camera and workspace conditions.

## Technical Challenges

The most useful part of this work was not only making the model run, but seeing what broke. Object choice mattered: wide, slippery wet-tissue packages were difficult for the gripper and introduced unstable grasp behavior. Two visually identical objects made goal disambiguation depend heavily on location. Camera viewpoint also mattered: a model trained with fixed viewpoints performed well under fixed deployment, but degraded when the camera changed. When the wrist camera was occluded, the policy failed across trials, which suggested that the model relied strongly on the wrist view rather than using the third-view camera alone.

I also helped define a subtask-level evaluation rubric: approach, grasp, lift, move, and place. This made rollout analysis more concrete than a binary success/failure label and helped identify where a policy failed.

## Why It Matters

This project gave me hands-on experience with the complete robot learning loop. It also clarified a research question I care about: learned manipulation policies can appear successful in the training setup while remaining brittle to camera shifts, object ambiguity, and sensor loss. I want to work on methods and evaluation protocols that expose and reduce this brittleness.
