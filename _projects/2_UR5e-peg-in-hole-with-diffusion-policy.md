---
layout: page
title: UR5e peg-in-hole with diffusion policy
description: A diffusion-policy-based manipulation system for peg-in-hole on UR5e using TCP force observations
importance: 2
img: assets/img/projects/2_UR5e-peg-in-hole-with-diffusion-policy/UR-peg-in-hole-with-diffusion-policy_1_edited_4-3.png
category: robotics
---

This project investigated how TCP force observations can be incorporated into a **[diffusion policy](https://github.com/real-stanford/diffusion_policy)** for peg-in-hole on a **[UR5e robot](https://www.universal-robots.com/products/e-series/)**. The system was built on a UR5e robot using visual observations, robot state, and TCP force values, and demonstration data were collected through **[Gello teleoperation](https://github.com/wuphilipp/gello_software)**.

I used an image-based diffusion policy that takes camera images together with low-dimensional robot state as input. In this setup, TCP force was included as an observation so that the policy could capture contact-related information, such as whether the peg had made contact, whether side contact was occurring, or whether the insertion was getting stuck.

<div class="row justify-content-center">
  <div class="col-sm-7">
        <video controls playsinline class="img-fluid rounded z-depth-1 mt-3">
        <source src="{{ '/assets/video/UR_DP_Force_demo_lantern_third_1.8x.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support the video tag.
        </video>
  </div>
</div>

During deployment, the policy predicted action chunks from real-time observations, and these actions were executed on the UR5e through an OSC (Operational Space Control)-based torque controller, which handled stable low-level execution on hardware. In this structure, TCP force was used to represent contact state, while OSC was responsible for turning the predicted actions into stable robot motion.

The learned policy showed search behavior by gradually rotating the wrist while probing for the hole, rather than simply pushing the peg straight down. Its behavior resembled how a person would insert a peg: aligning gradually, adjusting based on contact, and attempting insertion step by step. This suggests that, in contact-rich manipulation, force observations can serve as an important cue for fine alignment and exploratory behavior rather than acting as a simple auxiliary signal.

<!-- <div style="display: flex; gap: 20px; align-items: center;">

  <div style="flex: 1;">
    <video width="100%" autoplay muted loop playsinline controls>
      <source src="/assets/img/projects/UR-peg-in-hole-with-diffusion-policy/UR_DP_Force_demo_phone_1.8x.mp4" type="video/mp4">
    </video>
  </div>
  <div style="flex: 1;">
    <video width="100%" autoplay muted loop playsinline controls>
      <source src="/assets/img/projects/UR-peg-in-hole-with-diffusion-policy/UR_DP_Force_demo_Fan_1.8x.mp4" type="video/mp4">
    </video>
  </div>

</div>
 -->

<div class="row justify-content-center">
  <div class="col-sm-6">
    <video controls playsinline preload="metadata" class="img-fluid rounded z-depth-1 mt-3">
      <source src="{{ '/assets/video/UR_DP_Force_demo_Fan_1.8x.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="col-sm-6">
    <video controls playsinline preload="metadata" class="img-fluid rounded z-depth-1 mt-3">
      <source src="{{ '/assets/video/UR_DP_Force_demo_phone_1.8x.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>
