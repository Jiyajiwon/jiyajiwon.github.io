// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Selected robotics work streams.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Concise academic CV focused on robotics and real-world robot learning experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-calibration-and-cross-view-alignment",
          title: 'Calibration and Cross-View Alignment',
          description: "Adapting calibration tooling to Piper and validating wrist/scene camera geometry.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/calibration-cross-view-alignment/";
            },},{id: "projects-diffusion-policy-deployment-and-failure-analysis",
          title: 'Diffusion Policy Deployment and Failure Analysis',
          description: "Real-robot pick-and-place data collection, checkpoint deployment, latency observation, and trajectory representation debugging.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/diffusion-policy-deployment/";
            },},{id: "projects-human-in-the-loop-policy-correction",
          title: 'Human-in-the-Loop Policy Correction',
          description: "Joint-space corrective intervention for a Piper policy deployment setup.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/human-in-the-loop-correction/";
            },},{id: "projects-real-robot-imitation-learning-pipeline",
          title: 'Real Robot Imitation Learning Pipeline',
          description: "Teleoperation, dataset collection, training, deployment, and evaluation with SO-101 arms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/real-robot-manipulation-pipeline/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
