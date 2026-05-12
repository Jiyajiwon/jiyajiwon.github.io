---
layout: page
title: projects
permalink: /projects/
description: Selected robotics work streams.
nav: true
nav_order: 2
horizontal: true
---

Selected work that best reflects my fit for robot learning / manipulation labs. I keep this page focused on real hardware, data, calibration, deployment, and failure analysis.

<!-- pages/projects.md -->
<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
{% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>
