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
  },{id: "nav-research",
          title: "research",
          description: "Research interests and preparation for graduate work in robot learning and manipulation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected robotics work streams from research internship and project work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic CV focused on robotics, computer vision, and real-world robot learning experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-piper-calibration-and-cross-view-alignment",
          title: 'Piper Calibration and Cross-View Alignment',
          description: "Adapting calibration software to a Piper arm, collecting ChArUco calibration data, and validating camera/robot transforms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/calibration-cross-view-alignment/";
            },},{id: "projects-diffusion-policy-deployment-and-ee-space-dataset-conversion",
          title: 'Diffusion Policy Deployment and EE-Space Dataset Conversion',
          description: "Real-robot pick-and-place data collection, policy deployment, action-latency analysis, and trajectory representation debugging.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/diffusion-policy-deployment/";
            },},{id: "projects-human-in-the-loop-joint-delta-intervention",
          title: 'Human-in-the-Loop Joint-Delta Intervention',
          description: "Runtime corrective control for a Piper Diffusion Policy setup using joint-space delta teleoperation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/human-in-the-loop-correction/";
            },},{id: "projects-end-to-end-manipulation-pipeline-with-lerobot-and-smolvla",
          title: 'End-to-End Manipulation Pipeline with LeRobot and smolVLA',
          description: "Teleoperation, dataset collection, fine-tuning, deployment, and robustness checks on SO-101 hardware.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/real-robot-manipulation-pipeline/";
            },},{id: "projects-real-robot-systems-integration-and-failure-analysis",
          title: 'Real Robot Systems Integration and Failure Analysis',
          description: "Jetson, CAN, RealSense, Piper, SO-101, Hugging Face, and deployment debugging across real robot learning workflows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robot-systems-debugging/";
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
