import React from 'react';
import { 
  Code, 
  Palette, 
  Glasses, 
  Box, 
  Grid, 
  Video, 
  Briefcase, 
  Workflow, 
  Cpu, 
  Gamepad2, 
  Image, 
  PenTool, 
  Layout, 
  Clapperboard, 
  Film
} from 'lucide-react';
import { Course } from './types';

export const COURSES_DATA: Course[] = [
  // --- Creative Tech & Coding ---
  {
    id: 1,
    title: "The Art of\nVibe Coding",
    code: "DESN-150",
    section: "Creative Coding & AI",
    category: "Creative Tech",
    icon: <Code className="w-5 h-5" />,
    description: "Interactive web design and generative coding for creative professionals using AI-assisted tools.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Intro to Vibe Coding & Env Setup",
          "Basic Shapes, Colors & Animation",
          "Generative Patterns & Randomness",
          "Interactivity & Audio-Reactive Visuals",
          "UI Control Panels & Deployment"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Generative AI\nfor Designers",
    code: "DESN-130",
    section: "Creative Coding & AI",
    category: "Design AI",
    icon: <Palette className="w-5 h-5" />,
    description: "Practical use of generative AI for branding, editorial design, and motion graphics.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Introduction to AI Tools for Designers",
          "Prompt Engineering & Visual Composition",
          "Motion & Video AI Generation",
          "Batch Generation & Workflow Automation",
          "Ethical Considerations & Final Campaign"
        ]
      }
    ]
  },
  
  // --- VR & Immersive ---
  {
    id: 3,
    title: "VR Design\n& Storytelling",
    code: "DESN-140",
    section: "Virtual Reality & Metaverse",
    category: "Immersive",
    icon: <Glasses className="w-5 h-5" />,
    description: "Narrative-driven VR creation focusing on spatial composition and storytelling.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "VR Fundamentals & SimLab Interface",
          "Spatial Design Principles",
          "Scene Composition & Lighting",
          "Interactive Elements & Spatial Audio",
          "Storyboarding for VR"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Multi-Scene Narrative Design",
          "Character Placement & Interaction",
          "Branching Logic & Scene Memory",
          "Spatial Audio & Narrative Timing",
          "User Testing & Final Polishing"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "SIMLAB\nCOMPOSER",
    code: "VR-101",
    section: "Virtual Reality & Metaverse",
    category: "VR Tech",
    icon: <Box className="w-5 h-5" />,
    description: "Comprehensive technical training in SimLab Composer for interactive 3D scenes.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "SimLab Interface & Navigation",
          "Object Import & Placement",
          "Materials, Textures & Lighting Basics",
          "Simple Interactions & Animations",
          "Publishing VR Scenes"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Advanced Scene Composition",
          "Interactive VR Triggers",
          "Animation Timelines & Camera Nav",
          "Materials & Advanced Lighting",
          "Scene Optimization"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Multi-Scene VR World Creation",
          "Advanced Physics & Interaction",
          "AI-Generated Assets Integration",
          "Scripting, Logic Nodes & Spatial Audio",
          "Professional Publishing Standards"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Meta Worlds\n& VR Games",
    code: "MW-101",
    section: "Virtual Reality & Metaverse",
    category: "Social VR",
    icon: <Grid className="w-5 h-5" />,
    description: "Build social VR worlds and games, from basic environments to multi-user experiences.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Meta Worlds Interface Overview",
          "World Building Basics & Object Placement",
          "Avatar Integration & Basic Interactions",
          "Lighting & Environmental Setup",
          "Publishing Your World"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Advanced Terrain & Structures",
          "Animated Avatars & NPCs",
          "Interactive Object Triggers",
          "Environmental Storytelling & Lighting",
          "Multi-Scene Navigation"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Advanced Multi-User Environments",
          "Complex Interactions & Events",
          "AI & Procedural Asset Integration",
          "Real-Time Physics & Logic",
          "Immersive Audio Design"
        ]
      }
    ]
  },

  // --- 3D & Motion ---
  {
    id: 6,
    title: "MAXON\nCINEMA4D",
    code: "DESN-170",
    section: "3D & Motion Graphics",
    category: "3D Motion",
    icon: <Box className="w-5 h-5" />,
    description: "3D modeling, texturing, lighting, animation, and rendering workflows.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Interface & Workspace",
          "3D Modeling Basics",
          "Materials & Textures",
          "Lighting & Camera Techniques",
          "Keyframe Animation & Rendering"
        ]
      },
      {
        name: "Advanced",
        label: "Procedural VFX",
        syllabus: [
          "Procedural Modeling & MoGraph",
          "Dynamics & Simulations",
          "Advanced Animation Techniques",
          "Multi-Pass Rendering & Compositing",
          "Lighting & Rendering for VFX"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "ADOBE\nAFTER EFFECTS",
    code: "MOT-101",
    section: "3D & Motion Graphics",
    category: "Motion Graphics",
    icon: <Video className="w-5 h-5" />,
    description: "The industry standard for motion graphics and visual effects compositing.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Composition & Layer Basics",
          "Keyframe Animation Fundamentals",
          "Text Animation & Simple Effects",
          "Importing & Organizing Assets",
          "Exporting Animations"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Advanced Keyframe Techniques",
          "Shape Layers & Masking",
          "Motion Tracking",
          "Intermediate Effects & Compositing",
          "Precomposing & Optimization"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "3D Layers & Cameras",
          "Particle Systems & Simulation",
          "Advanced Expressions",
          "Complex Compositing & VFX",
          "MOGRTs & Adobe Integration"
        ]
      }
    ]
  },
  {
    id: 22,
    title: "Blender for\nVideo Editors",
    code: "VID-150",
    section: "3D & Motion Graphics",
    category: "3D Design",
    icon: <Box className="w-5 h-5" />,
    description: "Bridging the gap between video editing and 3D. Create 3D titles, transitions, and assets for video workflows.",
    levels: [
      {
        name: "Foundations",
        label: "Introductory",
        syllabus: [
          "Blender Interface for NLE Users",
          "Basic Modeling & Texturing",
          "3D Typography & Motion",
          "Lighting & Camera Animation",
          "Rendering with Alpha & Compositing"
        ]
      }
    ]
  },

  // --- Business & Automation ---
  {
    id: 8,
    title: "AI for\nBusiness",
    code: "BUSN-160",
    section: "Business & Automation",
    category: "Business AI",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Apply AI for workflows, content generation, marketing, and no-code automation.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Introduction to AI in Business",
          "Generating AI Content",
          "No-Code Workflow Design",
          "Multi-Step Automation",
          "Optimization & Final System Project"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "n8n\nAutomation",
    code: "BUSN-180",
    section: "Business & Automation",
    category: "Automation",
    icon: <Workflow className="w-5 h-5" />,
    description: "Visual automation to connect applications and services using node-based workflows.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Intro to n8n & Node-Based Workflows",
          "Triggers & Actions Configuration",
          "Multi-App Integration",
          "Workflow Testing & Debugging",
          "Final End-to-End Automation"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "AI & Automation\nTrack",
    code: "AUT-101",
    section: "Business & Automation",
    category: "Enterprise Auto",
    icon: <Cpu className="w-5 h-5" />,
    description: "Complete track from basic task automation to enterprise-level AI decision systems.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Intro to AI Automation",
          "Basic Workflow Creation",
          "AI Content Generation",
          "Task Automation with No-Code Tools",
          "Integrations with Web Apps"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Multi-Step Workflow Design",
          "AI-Driven Content Pipelines",
          "Conditional Triggers",
          "Web App Integration",
          "Monitoring & Analytics"
        ]
      },
      {
        name: "Professional",
        label: "Enterprise",
        syllabus: [
          "Enterprise Workflow Automation",
          "AI-Driven Decision Systems",
          "Advanced Conditional Logic",
          "Integration Across Platforms",
          "Deployment at Scale"
        ]
      }
    ]
  },

  // --- Game Development ---
  {
    id: 11,
    title: "Creating Games\nwith AI",
    code: "GAM-101",
    section: "Game Development",
    category: "Game Dev",
    icon: <Gamepad2 className="w-5 h-5" />,
    description: "Game creation using AI tools for assets, mechanics, and storytelling.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Intro to AI Game Creation",
          "Concept & Storyboarding",
          "AI-Generated Assets",
          "Simple Game Mechanics",
          "Publishing Playable Demo"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Advanced Game Mechanics",
          "AI-Generated Characters & NPCs",
          "Interactive Storytelling",
          "Level Design & Optimization",
          "Physics & Interactions"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Multi-Level Game Worlds",
          "Advanced AI NPCs & Behaviors",
          "Procedural Content Generation",
          "AI Storytelling & Dialogue Systems",
          "Professional Deployment"
        ]
      }
    ]
  },
  {
    id: 23,
    title: "Unity Game\nDevelopment",
    code: "GAM-200",
    section: "Game Development",
    category: "Game Engine",
    icon: <Gamepad2 className="w-5 h-5" />,
    description: "Introduction to real-time interactive development using the Unity Engine and C# scripting.",
    levels: [
      {
        name: "Core Skills",
        label: "Introductory",
        syllabus: [
          "Unity Interface & Hierarchy",
          "Game Objects, Prefabs & Components",
          "Introduction to C# Scripting",
          "Physics, Collisions & Triggers",
          "UI Systems & Game Logic"
        ]
      }
    ]
  },
  {
    id: 24,
    title: "The Unreal\nEngine",
    code: "GAM-300",
    section: "Game Development",
    category: "Real-Time 3D",
    icon: <Cpu className="w-5 h-5" />,
    description: "Comprehensive mastery of UE5 for games, virtual production, and cinematic visualization.",
    levels: [
      {
        name: "Fundamentals",
        label: "Introductory",
        syllabus: [
          "UE5 Interface & Project Setup",
          "Level Design & Quixel Assets",
          "Lighting (Lumen) Basics",
          "Introduction to Blueprints",
          "Sequencer for Cinematics"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Advanced Blueprints & Logic",
          "Material Editor Deep Dive",
          "Landscape & Foliage Systems",
          "Nanite Virtualized Geometry",
          "Character Animation & Rigging"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Virtual Production Workflows",
          "Niagara Particle Systems",
          "C++ for Unreal Developers",
          "Performance Profiling & Optimization",
          "Packaging & Deployment"
        ]
      }
    ]
  },

  // --- Design (Adobe) ---
  {
    id: 12,
    title: "Adobe\nPhotoshop",
    code: "DESN-110",
    section: "Visual Design & UX",
    category: "Design",
    icon: <Image className="w-5 h-5" />,
    description: "The gold standard for image editing, compositing, and digital art.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Interface, Layers & Masks",
          "Basic Image Editing & Retouching",
          "Text & Shape Layers",
          "Simple Filters & Effects",
          "Exporting Images"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Advanced Layer Techniques",
          "Masking & Blending Modes",
          "Compositing Multiple Images",
          "Adjustment Layers & Filters",
          "Retouching Complex Scenes"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "High-End Retouching & Compositing",
          "Digital Painting & Illustration",
          "Advanced Adjustment Techniques",
          "Smart Object Workflows",
          "Automation & Batch Processing"
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Adobe\nIllustrator",
    code: "DESN-120",
    section: "Visual Design & UX",
    category: "Vector Design",
    icon: <PenTool className="w-5 h-5" />,
    description: "Vector graphics software for branding, illustration, and typography.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Interface & Pen Tool Basics",
          "Basic Shapes & Drawing",
          "Layers & Groups",
          "Simple Typography",
          "Colors, Swatches & Exporting"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Advanced Pen Tool Techniques",
          "Gradient & Mesh Tools",
          "Pattern Creation",
          "Typography & Text Effects",
          "Shape Building & Pathfinder"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Advanced Illustration Techniques",
          "Branding & Logo Design",
          "Digital Painting with Vectors",
          "Complex Typography",
          "Workflow Automation"
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Figma\nUI/UX",
    code: "UX-101",
    section: "Visual Design & UX",
    category: "UI/UX Design",
    icon: <Layout className="w-5 h-5" />,
    description: "Collaborative interface design tool for prototyping and user experience.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Interface, Frames & Layouts",
          "Shapes, Components & Assets",
          "Text & Typography",
          "Basic Prototyping",
          "Collaboration & Exporting"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Component Libraries & Variants",
          "Auto Layouts & Responsive Design",
          "Intermediate Prototyping",
          "Interactive Components",
          "Design Tokens & Styles"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Advanced Design Systems",
          "Multi-Screen Prototyping",
          "Interactive Animations",
          "Version Control & Library Mgmt",
          "Developer Handoff"
        ]
      }
    ]
  },

  // --- Video Production ---
  {
    id: 15,
    title: "DaVinci\nResolve",
    code: "VID-101",
    section: "Video Production",
    category: "Video Editing",
    icon: <Clapperboard className="w-5 h-5" />,
    description: "Professional editing, color correction, visual effects, and audio post-production.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Project Setup & Media Import",
          "Timeline Basics & Editing Tools",
          "Basic Transitions & Effects",
          "Color Correction Fundamentals",
          "Audio Editing & Exporting"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Multi-Camera Editing",
          "Keyframe Animation & Effects",
          "Advanced Transitions",
          "Intermediate Color Grading",
          "Audio Mixing & Sound Design"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Advanced Editing & Workflow Optimization",
          "Professional Color Grading (HDR)",
          "Visual Effects Integration (Fusion)",
          "Motion Graphics & Compositing",
          "Deliverables & Standards"
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Adobe\nPremiere Pro",
    code: "VID-102",
    section: "Video Production",
    category: "Video Editing",
    icon: <Film className="w-5 h-5" />,
    description: "Timeline-based video editing application for film, TV, and the web.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Media Import & Project Setup",
          "Timeline Basics & Editing Tools",
          "Transitions & Effects",
          "Basic Color Correction",
          "Audio Editing & Mixing"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Multi-Camera Editing",
          "Advanced Timeline Techniques",
          "Keyframe Animations & Effects",
          "Intermediate Color Grading",
          "Workflow Organization"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Advanced Editing Techniques",
          "Motion Graphics Integration",
          "Professional Color Grading",
          "Visual Effects (VFX)",
          "Broadcast Delivery Standards"
        ]
      }
    ]
  },
  // --- New Intensive Courses ---
  {
    id: 17,
    title: "Integrated Digital\nMedia Production",
    code: "DMP-200",
    section: "Video Production",
    category: "Production",
    icon: <Film className="w-5 h-5" />,
    description: "Holistic video production merging editing, cinematic theory, audio engineering, and delivery.",
    levels: [
      {
        name: "Foundations",
        label: "Introductory",
        syllabus: [
          "Introduction to Video Editing Paradigm",
          "Narrative Structure & Rough Cuts",
          "Cinematic Lighting Theory",
          "Product Lighting & Visual Aesthetics",
          "Advanced Premiere Pro Techniques",
          "Audio Fundamentals & Dialogue Editing",
          "Midterm Project: The Mini-Documentary"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Sound Design & Logic Pro X Integration",
          "Color Correction vs. Color Grading",
          "Content Marketing Video Strategies",
          "Technical Standards & Codecs",
          "Specialized Editing Workflows",
          "Final Project Workshop",
          "Final Review & Portfolio Assembly"
        ]
      }
    ]
  },
  {
    id: 18,
    title: "Advanced Motion\nDesign & VFX",
    code: "MOT-250",
    section: "3D & Motion Graphics",
    category: "VFX",
    icon: <Video className="w-5 h-5" />,
    description: "Rigorous curriculum merging 2D animation, 3D modeling (C4D), and VFX compositing (Nuke/AE).",
    levels: [
      {
        name: "Fundamentals",
        label: "Introductory",
        syllabus: [
          "The Art of Motion (2D Principles)",
          "After Effects Deep Dive",
          "Introduction to Cinema 4D",
          "Integration: AE & C4D",
          "Mograph Techniques",
          "Visual Effects & Compositing",
          "Midterm Project: The Broadcast Package"
        ]
      },
      {
        name: "Simulation",
        label: "Intermediate",
        syllabus: [
          "Advanced Dynamics & Simulation",
          "High-End Compositing with Nuke",
          "Concert & Event Graphics",
          "Virtual Reality (VR) Creation",
          "Mind-Bending Illusions",
          "Portfolio & Breakdown Reel",
          "Final Presentation"
        ]
      }
    ]
  },
  {
    id: 19,
    title: "Strategic Digital\nMarketing",
    code: "MKT-300",
    section: "Business & Automation",
    category: "Marketing",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Intersection of creative branding, data-driven marketing, and sales psychology.",
    levels: [
      {
        name: "Brand Strategy",
        label: "Introductory",
        syllabus: [
          "Branding Foundations",
          "Personal Branding",
          "The Marketing Plan",
          "Creative Thinking in Business",
          "Content Marketing Strategy",
          "Visual Communication for Marketers",
          "Midterm Project: The Brand Bible"
        ]
      },
      {
        name: "Execution",
        label: "Intermediate",
        syllabus: [
          "Social Media Mastery (Instagram)",
          "Storytelling for Advertising",
          "The Psychology of Persuasion",
          "Field Sales & Negotiation",
          "Digital Marketing Analytics",
          "Campaign Case Study",
          "Final Pitch"
        ]
      }
    ]
  },
  {
    id: 20,
    title: "Applied\nComputer Science",
    code: "CS-101",
    section: "Creative Coding & AI",
    category: "Dev",
    icon: <Code className="w-5 h-5" />,
    description: "Full-stack overview from IT basics and web dev (HTML/JS) to Python and Machine Learning.",
    levels: [
      {
        name: "Frontend",
        label: "Introductory",
        syllabus: [
          "IT Infrastructure",
          "Structure of the Web (HTML)",
          "Styling and Aesthetics (CSS)",
          "Interactivity (JavaScript Basics)",
          "Advanced JavaScript (DOM)",
          "Programming Fundamentals",
          "Midterm Project: The Portfolio Site"
        ]
      },
      {
        name: "Backend & AI",
        label: "Intermediate",
        syllabus: [
          "Introduction to Python",
          "Artificial Intelligence Concepts",
          "Machine Learning Fundamentals",
          "The Digital Garage (SEO & SEM)",
          "Emerging Tech & Cloud",
          "Code Review & Refactoring",
          "Final Exam"
        ]
      }
    ]
  },
  {
    id: 21,
    title: "Visual\nCommunication",
    code: "DESN-180",
    section: "Visual Design & UX",
    category: "Graphic Design",
    icon: <PenTool className="w-5 h-5" />,
    description: "Focus on static visual media, vector illustration, multi-page layout, and infographic theory.",
    levels: [
      {
        name: "Vector & Illustration",
        label: "Introductory",
        syllabus: [
          "The Vector Environment",
          "Iconography & Branding Assets",
          "Typography in Design",
          "Infographic Theory",
          "Infographic Execution",
          "Creative Thinking for Designers",
          "Midterm Project: Corporate Identity Package"
        ]
      },
      {
        name: "Publishing",
        label: "Intermediate",
        syllabus: [
          "Introduction to InDesign",
          "Text Flow & Master Pages",
          "New Features & Workflows",
          "Editorial Design",
          "Print Production",
          "Portfolio Design",
          "Final Review"
        ]
      }
    ]
  }
];