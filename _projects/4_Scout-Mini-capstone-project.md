---
layout: page
title: Scout Mini capstone project
description: An autonomous navigation robot for visually impaired pedestrians built on the Scout Mini platform
importance: 4
img: assets/img/projects/Scout-Mini-capstone-project/Scout-Mini-capstone-project_1_4-3.png
category: robotics
---

<div style="max-width: 500px; margin: 0 auto;">
    {% include figure.liquid
    loading="eager"
    path="assets/img/projects/Scout-Mini-capstone-project/overview.png"
    title="PiPER setup"
    class="img-fluid rounded z-depth-1"
    %}
</div>

**[NAVISIONER](https://github.com/Jiyajiwon/Navisioner)** is an autonomous robot system designed to guide visually impaired users safely from a starting point to a destination. Built on the **[Scout Mini](https://global.agilex.ai/products/scout-mini)** mobile platform, the system integrates voice command input, sidewalk recognition, obstacle detection, path tracking, and voice guidance within a single ROS2-based architecture. In this project, I was responsible for Computer Vision and **[ROS2](https://www.ros.org/)** system integration, implementing the perception and localization pipeline for real-world navigation.

<div style="max-width: 700px; margin: 0 auto;">
    {% include figure.liquid
    loading="eager"
    path="assets/img/projects/Scout-Mini-capstone-project/structure.png"
    title="PiPER setup"
    class="img-fluid rounded z-depth-1"
    %}
</div>

The central challenge of the project was enabling the robot to maintain a safe position on the sidewalk while continuously guiding a user through complex, unstructured pedestrian environments. Unlike lanes in road-driving scenarios, sidewalks contain irregular patterns, obstacles, boundary distortions, and occlusions, which made purely rule-based navigation unreliable. Because the user followed behind the robot without visual feedback, the system also required a more conservative and stable navigation strategy than a standard autonomous driving setup.

To address this, I trained a segmentation model on approximately 45,000 sidewalk images and designed a data-driven localization method that estimated the robot’s lateral position by comparing the detected sidewalk boundaries with an experimentally defined safety threshold. When the robot drifted beyond this threshold, the controller adjusted its trajectory so that it returned toward the safer center region of the sidewalk. I also converted the PyTorch model into a TensorRT engine with INT8 quantization, reducing inference latency by about 65%, and integrated the full pipeline from perception to control on an NVIDIA Jetson-based robot platform.

This project showed me that improving perception accuracy alone does not guarantee reliable robot behavior in the real world. What matters more is how perception is connected to localization, planning, and control so that the system can produce stable behavior end to end. It also made clear that hand-designed rules alone are not enough for handling the variability of real environments. That limitation became one of the reasons I became interested in real-world robot learning and, more broadly, in robotic systems that can adapt and generalize through interaction with their environment.
