// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-teleoperation-and-policy-learning-on-piper",
          title: 'Teleoperation and policy learning on PiPER',
          description: "A manipulation pipeline on PiPER using LeRobot for leader-follower teleoperation, demonstration collection, and policy learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_Piper-arm-with-LeRobot/";
            },},{id: "projects-ur5e-peg-in-hole-with-diffusion-policy",
          title: 'UR5e peg-in-hole with diffusion policy',
          description: "A diffusion-policy-based manipulation system for peg-in-hole on UR5e using TCP force observations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_UR5e-peg-in-hole-with-diffusion-policy/";
            },},{id: "projects-scout-mini-capstone-project",
          title: 'Scout Mini capstone project',
          description: "An autonomous navigation robot for visually impaired pedestrians built on the Scout Mini platform",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_Scout-Mini-capstone-project/";
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
