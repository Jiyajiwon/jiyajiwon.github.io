---
layout: page
title: Teleoperation and policy learning on PiPER
description: A manipulation pipeline on PiPER using LeRobot for leader-follower teleoperation, demonstration collection, and policy learning.
img: assets/img/projects/1_Piper-arm-with-LeRobot/Piper_arm_with_LeRobot_vid1_1_edited.png_4-3.png
importance: 1
category: robotics
---

I built a **[manipulation pipeline](https://github.com/sejong-rcv/lerobot_piper_043)** on the **[PiPER arm](https://global.agilex.ai/products/piper)** by integrating the hardware into the **[LeRobot](https://github.com/huggingface/lerobot)** ecosystem, enabling leader-follower teleoperation, dataset collection, policy training, and evaluation within a unified workflow.

Using this pipeline, I ran manipulation experiments with both **[Diffusion Policy (DP)](https://diffusion-policy.cs.columbia.edu/)** and **[VQ-BeT](https://sjlee.cc/vq-bet/)**. For OOD generalization, I trained the policy with blocks randomly placed inside a 150 mm × 150 mm square region and tested it outside that region at deployment. In these settings, the model did not succeed, showing limited spatial generalization.

<div style="max-width: 500px; margin: 0 auto;">
    {% include figure.liquid
    loading="eager"
    path="assets/img/projects/1_Piper-arm-with-LeRobot/piper_arm_block.png"
    title="PiPER setup"
    class="img-fluid rounded z-depth-1"
    %}
</div>

To analyze the failure mode, I implemented a Human-in-the-Loop (HIL) intervention mode. When a person assisted only with the pick stage by guiding the block to the gripper, the robot was able to complete the remaining transport and placement reliably, indicating that grasping was the main bottleneck in this setup.

I also tested a long-horizon task in which separate policies for moving a banana, an apple, and a bell pepper were deployed sequentially. In addition, I compared VQ-BeT with Diffusion Policy on a wet wipe stacking task, where VQ-BeT showed much faster inference speed during deployment.

<div class="row justify-content-center">
  <div class="col-sm-7">
        <video controls playsinline class="img-fluid rounded z-depth-1 mt-3">
        <source src="{{ '/assets/video/DP_Longhorizon__.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support the video tag.
        </video>
  </div>
</div>
