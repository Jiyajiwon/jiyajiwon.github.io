---
layout: about
title: about
permalink: /
subtitle: Incoming M.S. student in Computer Science at NYU Courant. Robot learning, manipulation, and real-world deployment.

profile:
  align: right
  image: jiwonryu_profile_pic.JPG
  image_circular: false
  more_info: >
    <p>Jiwon Ryu</p>
    <p>Incoming M.S. CS student, NYU Courant</p>
    <p>Robotics / Computer Vision background</p>
    <p><a href="https://github.com/jiyajiwon">GitHub</a></p>

selected_papers: false
social: true

announcements:
  enabled: false
  scrollable: false
  limit:

latest_posts:
  enabled: false
  scrollable: false
  limit:
---

I am an incoming M.S. student in Computer Science at NYU Courant (Fall 2026), with undergraduate training at Sejong University and research internship experience in robotics and computer vision.

My research interests are in robot learning for manipulation: imitation learning, embodied AI, real-world policy deployment, calibration and perception, and human-in-the-loop correction. I am especially interested in the systems questions that decide whether a learned policy actually works on hardware: camera placement, coordinate frames, teleoperation quality, dataset design, action representation, runtime latency, and failure recovery.

During my research internship, I worked across the full real-robot pipeline: setting up Piper and SO-101 manipulator hardware, configuring Jetson-based environments and CAN communication, collecting teleoperation datasets, training and deploying smolVLA / Diffusion Policy style models, debugging multi-camera calibration, and analyzing deployment failures under viewpoint and out-of-distribution changes.

I am looking to develop as a graduate researcher in robot manipulation and robot learning, with a focus on methods that remain useful outside clean demonstrations: policies that can be corrected by humans, perception pipelines that survive calibration error, and experiments that expose failure modes rather than hide them.

## Research Fit

- **Robot learning and manipulation:** imitation learning, diffusion-policy style pipelines, VLA / VA models, and tabletop manipulation tasks.
- **Real robot systems:** Piper and SO-101 arms, leader-follower teleoperation, Jetson Orin / Thor setups, CAN communication, RealSense cameras, and Hugging Face dataset / model workflows.
- **Calibration and perception:** wrist and third-view cameras, ChArUco-based calibration, hand-eye calibration, extrinsic transforms, Open3D visualization, and cross-view alignment.
- **Deployment and debugging:** real-hardware rollout, action-chunk latency, viewpoint sensitivity, OOD task setup, failure analysis, and human intervention during policy execution.

For a compact overview, see my [research page](/research/) and selected [projects](/projects/).
