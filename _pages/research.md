---
layout: page
title: research
permalink: /research/
description: Research interests and preparation for graduate work in robot learning and manipulation.
nav: true
nav_order: 2
---

My current research direction is real-world robot learning for manipulation. I am interested in how imitation-learning and embodied-AI systems can be made reliable enough for hardware: calibrated perception, robust data collection, human correction, and careful evaluation under distribution shift.

## Interests

- **Robot manipulation:** tabletop manipulation, long-horizon task composition, grasp/place failure modes, and action representation.
- **Imitation learning:** teleoperation datasets, diffusion-policy style pipelines, VLA / VA models, and deployment from learned checkpoints.
- **Real-world deployment:** latency, camera viewpoint shift, OOD workspace design, and policy behavior under partial sensor failure.
- **Calibration and perception:** hand-eye calibration, third-view and wrist-camera alignment, camera-to-robot transforms, and point-cloud validation.
- **Human-in-the-loop correction:** runtime intervention, corrective control, and policy recovery on real hardware.

## Preparation

My internship work has been strongest at the boundary between learning code and robot systems. I have configured robot arms and Jetson environments, collected teleoperation demonstrations, trained and deployed learned policies, adapted calibration software to a new arm, debugged camera and frame-transform failures, and analyzed rollouts where the learned policy did not behave as expected.

This systems experience shapes the kinds of research questions I want to pursue:

- How should imitation datasets be collected so that policies learn task-relevant behavior instead of memorizing workspace geometry?
- How can policies use wrist and third-view cameras robustly when calibration, lighting, or viewpoint changes?
- How should human corrections be represented so they can improve policy execution without destabilizing the robot?
- What evaluation protocols expose real manipulation failures, rather than only reporting clean demonstrations?

Selected examples are summarized in the [projects](/projects/) page.
