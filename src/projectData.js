// This variable automatically gets the correct path (e.g., "/mohammed-azif-portfolio")
const publicUrl = process.env.PUBLIC_URL;

export const projects = [
  {
    id: "pick-o-place-sort", // URL-friendly ID
    title: "Pick-O-Place Sort (Parol6)",
    githubUrl: "https://github.com/syedazif321/parol6",
    tags: ["ROS 2 (Humble)", "C++", "Gazebo Plugins", "MoveIt 2", "GUI", "Database"],
    overview: "This project involved building a complete, end-to-end sorting solution from the ground up, all in C++ within the ROS 2 and Gazebo ecosystems. The objective was to simulate a Parol6 robotic arm performing an automated pick-and-place operation, sorting boxes from an input conveyor onto two output conveyors based on visual classification.",
    features: [
      "<strong>Custom C++ Gazebo Plugins:</strong> I developed several C++ plugins to create a dynamic, realistic simulation. This included an input conveyor plugin for continuous motion and a box-spawning plugin to generate objects with random sizes, colors, and orientations. I also wrote a plugin for the output conveyors that would activate upon box placement.",
      "<strong>Intelligent Gripper Logic:</strong> I implemented a suction gripper plugin that included a proximity check. This was crucial for reliability, as the suction would only activate if the end-effector was within an acceptable distance from the box surface, preventing failed pick attempts.",
      "<strong>Full-Stack GUI Control:</strong> A significant component was the custom-built GUI. It provided comprehensive real-time control, including joint-level manipulation, Cartesian pose-based control, and incremental jog controls. It also featured a speed slider (0.5x to 2x) for all system components and a status display for errors and box counts.",
      "<strong>Analytics & Data Logging:</strong> To analyze performance, I integrated a database (SQLite/PostgreSQL) to log critical analytics. This included simulation start time, detected box color/size, and high-precision timestamps for detection, pick, and place events, allowing for a full-cycle duration analysis."
    ],
    images: [
      { src: publicUrl + "/media/project1/gui_operations.gif", alt: "GUI Operations" },
      { src: publicUrl + "/media/project1/box_spawning.gif", alt: "Box Spawning" },
      { src: publicUrl + "/media/project1/gui1.png", alt: "Pick-O-Place GUI 1", class: "img-contain" },
      { src: publicUrl + "/media/project1/gui2.png", alt: "Pick-O-Place GUI 2", class: "img-contain" },
      // Your file 'Data_base.png' has a capital 'D', which is correct here.
      { src: publicUrl + "/media/project1/Data_base.png", alt: "Database Schema" }
    ],
    cardImage: publicUrl + "/media/project1/pipeline-execution.gif" // From projects.html
  },
  {
    id: "multi-floor-manipulator",
    title: "Autonomous Mobile Manipulator (Multi-Floor)",
    githubUrl: "https://github.com/syedazif321/Autonomous-Mobile-Manipulator-in-Multi-Floor",
    tags: ["ROS 2", "C++", "Nav2", "Gazebo Plugins", "Multi-Map Nav"],
    overview: "This project simulates a complex, real-world indoor logistics scenario: an autonomous mobile manipulator (AMR + 7DoF Arm + Linear Guide) designed to transport packages between floors in a multi-story environment. The system was developed entirely in C++ and ROS 2, pushing the boundaries of autonomous navigation and robot-infrastructure interaction.",
    features: [
       "<strong>Multi-Floor Gazebo World:</strong> I designed and built a two-floor Gazebo environment...",
       "<strong>Custom Lift Control Plugin:</strong> The core of this project. I wrote a C++ Gazebo plugin...",
       "<strong>Dynamic Multi-Map Navigation:</strong> The robot utilized the full Nav2 stack...",
       "<strong>Dynamic Obstacle Simulation:</strong> To validate the Nav2 stack's robustness...",
       "<strong>Perception-Guided Manipulation:</strong> The robot used its vision pipeline to locate packages..."
    ],
    images: [
      { src: publicUrl + "/media/project2/world.gif", alt: "Gazebo World" },
      // FIXED TYPO: pipleine1.gif -> pipeline1.gif
      { src: publicUrl + "/media/project2/pipeline1.gif", alt: "Pipeline Demo" },
      { src: publicUrl + "/media/project2/data_base.gif", alt: "Database Demo" },
      // FIXED SPACES: 'robot model.png' -> 'robot_model.png'
      { src: publicUrl + "/media/project2/robot_model.png", alt: "Robot Model" },
      { src: publicUrl + "/media/project2/top_view.png", alt: "Top View" },
      // FIXED SPACES: 'data base1.png' -> 'data_base1.png'
      { src: publicUrl + "/media/project2/data_base1.png", alt: "Database Schema 1" },
      // FIXED SPACES: 'data base2.png' -> 'data_base2.png'
      { src: publicUrl + "/media/project2/data_base2.png", alt: "Database Schema 2" },
      // FIXED SPACES: 'data base3.png' -> 'data_base3.png'
      { src: publicUrl + "/media/project2/data_base3.png", alt: "Database Schema 3" }
    ],
    cardImage: publicUrl + "/media/project2/main_execution.gif"
  },
  {
    id: "dynamic-pick",
    title: "Dynamic Pick from Moving Conveyor",
    githubUrl: "https://github.com/syedazif321/Dynamic-Pick-from-Moving-Conveyor-With-AMR",
    tags: ["ROS 2", "C++", "Computer Vision", "ArUco", "Dynamic Grasping"],
    overview: "This project tackles one of the most challenging problems in mobile manipulation: dynamically grasping a moving target from a moving platform. The simulation features an AMR (with a robotic arm) navigating alongside a conveyor belt. The core task was to successfully pick an ArUco-marked box from the moving conveyor while the AMR itself was in motion and not synchronized to the conveyor's speed.",
    features: [
      "<strong>Real-Time 6-DoF Pose Estimation:</strong> I implemented a vision pipeline in C++ using ArUco markers...",
      "<strong>Relative Velocity Control:</strong> The system's 'brain' was its ability to estimate the relative velocity...",
      "<strong>Dynamic Cartesian Tracking:</strong> The robotic arm operated in Cartesian space...",
      "<strong>Precision Grasp Logic:</strong> A grasp was only triggered when the system's calculations determined the box..."
    ],
    images: [
      { src: publicUrl + "/media/project3/video2.gif", alt: "Dynamic Pick Demo 2" },
      { src: publicUrl + "/media/project3/2.png", alt: "ArUco Tracking" },
      { src: publicUrl + "/media/project3/3.png", alt: "System View" },
      // FIXED TYPO: vidoe1.gif -> video1.gif
      { src: publicUrl + "/media/project3/video1.gif", alt: "Dynamic Pick Demo 1" }
    ],
    // FIXED TYPO: vidoe1.gif -> video1.gif
    cardImage: publicUrl + "/media/project3/video1.gif"
  }
];