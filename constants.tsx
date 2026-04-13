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

  // --- AI Systems & Automation ---
  {
    id: 25,
    title: "AI Prompt\nEngineering Mastery",
    code: "PROMPT-101",
    section: "AI Systems & Automation",
    category: "Prompting",
    icon: <Cpu className="w-5 h-5" />,
    description: "Master the art of crafting effective prompts to unlock the full potential of large language models.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Introduction to LLMs & Prompt Basics",
          "Prompt Structure & Context Setting",
          "Zero-Shot & Few-Shot Prompting",
          "Chain-of-Thought Techniques",
          "Prompt Testing & Iteration"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Role-Based & System Prompting",
          "Multi-Turn Conversation Design",
          "Prompt Chaining & Templates",
          "Output Formatting & JSON Schemas",
          "Avoiding Hallucinations & Bias"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Advanced Prompt Optimization",
          "Custom Instruction Systems",
          "Production-Grade Prompt Pipelines",
          "Prompt Security & Injection Defense",
          "Benchmarking & Evaluation Frameworks"
        ]
      }
    ]
  },
  {
    id: 26,
    title: "Build AI Apps\nWithout Coding",
    code: "AUT-200",
    section: "AI Systems & Automation",
    category: "No-Code AI",
    icon: <Layout className="w-5 h-5" />,
    description: "Create powerful AI-driven applications using no-code and low-code platforms without writing code.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Intro to No-Code AI Platforms",
          "Building Your First AI Chatbot",
          "Connecting AI to Data Sources",
          "Designing User Interfaces",
          "Publishing & Sharing AI Apps"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Multi-Step AI Logic Flows",
          "Integrating APIs Without Code",
          "AI-Powered Form & Database Apps",
          "Conditional Logic & Branching",
          "Testing & Debugging Workflows"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Scalable No-Code Architecture",
          "Enterprise-Grade AI Applications",
          "Advanced API & Webhook Integration",
          "Performance Optimization",
          "Deployment & Maintenance Strategies"
        ]
      }
    ]
  },
  {
    id: 27,
    title: "AI Workflow\nAutomation Systems",
    code: "AUT-210",
    section: "AI Systems & Automation",
    category: "Automation",
    icon: <Workflow className="w-5 h-5" />,
    description: "Design and deploy end-to-end AI-powered automation systems that eliminate repetitive tasks.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Intro to AI Automation Concepts",
          "Mapping & Designing Workflows",
          "Triggers, Actions & Conditions",
          "Connecting Apps with AI",
          "Your First Automated Pipeline"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Multi-Branch Workflow Design",
          "AI Decision Nodes & Routing",
          "Error Handling & Retry Logic",
          "Cross-Platform Integrations",
          "Monitoring & Analytics Dashboards"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Enterprise Automation Architecture",
          "AI Orchestration at Scale",
          "Security & Compliance in Automation",
          "Custom AI Node Development",
          "Automation ROI & Reporting"
        ]
      }
    ]
  },
  {
    id: 28,
    title: "ChatGPT, Claude\n& Gemini Power Use",
    code: "PROMPT-200",
    section: "AI Systems & Automation",
    category: "Prompting",
    icon: <Cpu className="w-5 h-5" />,
    description: "Deep-dive into the world's leading AI assistants to unlock advanced productivity and creative workflows.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Overview of ChatGPT, Claude & Gemini",
          "Core Differences & Best Use Cases",
          "Effective Prompting Across Models",
          "AI for Writing & Summarization",
          "Productivity Workflows with AI Assistants"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Advanced Prompting per Model",
          "Multi-Model Comparison Strategies",
          "Custom GPTs & Claude Projects",
          "AI Research & Fact-Checking",
          "Integrating AI Assistants into Tools"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Building AI-Powered Workflows",
          "API Access & Automation",
          "Fine-Tuning & Custom Instructions",
          "AI Assistant for Team Productivity",
          "Evaluating & Selecting Models for Business"
        ]
      }
    ]
  },
  {
    id: 29,
    title: "AI Agents:\nBuild Autonomous Systems",
    code: "AUT-220",
    section: "AI Systems & Automation",
    category: "AI Agents",
    icon: <Cpu className="w-5 h-5" />,
    description: "Design and deploy intelligent AI agents that autonomously plan, reason, and execute complex tasks.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "What Are AI Agents & How They Work",
          "Agent Frameworks Overview",
          "Building a Simple Task Agent",
          "Tool Use & Function Calling",
          "Deploying Your First Agent"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Multi-Step Planning & Reasoning",
          "Memory & Context Management",
          "Agent-to-Agent Communication",
          "Custom Tool & API Integration",
          "Agent Monitoring & Debugging"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Autonomous Multi-Agent Systems",
          "Advanced Reasoning Architectures",
          "Production Agent Deployment",
          "Security & Guardrails for Agents",
          "Evaluating Agent Performance"
        ]
      }
    ]
  },
  {
    id: 30,
    title: "AI for Business\nOperations",
    code: "BUSN-200",
    section: "AI Systems & Automation",
    category: "Business AI",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Leverage AI tools to streamline business operations, decision-making, and productivity at every level.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "AI in Modern Business Landscape",
          "AI for Meetings & Communication",
          "Document Automation with AI",
          "AI-Assisted Decision Making",
          "Building an AI-First Workflow"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "AI for Project & Team Management",
          "CRM & Sales Automation with AI",
          "Financial Analysis Using AI",
          "AI-Powered Reporting & Dashboards",
          "Workflow Optimization Strategies"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Enterprise AI Strategy & Roadmap",
          "AI Governance & Risk Management",
          "Scaling AI Across Departments",
          "Change Management for AI Adoption",
          "Measuring AI ROI & Impact"
        ]
      }
    ]
  },
  {
    id: 31,
    title: "AI Content\nCreation Systems",
    code: "CONT-101",
    section: "AI Systems & Automation",
    category: "Content AI",
    icon: <PenTool className="w-5 h-5" />,
    description: "Build scalable AI-driven content systems for blogs, scripts, newsletters, and social media.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Intro to AI Content Generation",
          "Writing Effective Content Prompts",
          "AI for Blog Posts & Articles",
          "Content Repurposing with AI",
          "Building a Basic Content Calendar"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Brand Voice & Tone with AI",
          "AI Script Writing for Video",
          "Automated Newsletter Systems",
          "Multi-Platform Content Pipelines",
          "Editing & Quality Control with AI"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "End-to-End AI Content Operations",
          "Content Personalization at Scale",
          "AI-Driven Editorial Strategy",
          "Performance Analytics & Iteration",
          "Monetizing AI Content Systems"
        ]
      }
    ]
  },
  {
    id: 32,
    title: "AI for Social\nMedia Growth",
    code: "MKT-310",
    section: "AI Systems & Automation",
    category: "Social Media AI",
    icon: <Grid className="w-5 h-5" />,
    description: "Use AI to grow social media presence, automate posting schedules, and analyze audience engagement.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "AI Tools for Social Media",
          "Generating Captions & Hashtags",
          "AI-Assisted Content Planning",
          "Scheduling & Automation Basics",
          "Analyzing Engagement with AI"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Platform-Specific AI Strategies",
          "Viral Content Frameworks with AI",
          "Audience Targeting & Segmentation",
          "AI-Powered A/B Testing",
          "Community Management Automation"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Full AI Social Media System",
          "Cross-Platform Growth Automation",
          "Influencer & Collaboration AI Tools",
          "Advanced Analytics & Reporting",
          "Monetization Strategy with AI"
        ]
      }
    ]
  },
  {
    id: 33,
    title: "AI Design &\nVisual Generation",
    code: "DESN-200",
    section: "AI Systems & Automation",
    category: "AI Design",
    icon: <Image className="w-5 h-5" />,
    description: "Harness AI image generation tools to create stunning visuals, branding assets, and creative designs.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Intro to AI Image Generation",
          "Text-to-Image Prompt Crafting",
          "Style & Composition Control",
          "Generating Brand Assets",
          "Exporting & Using AI Visuals"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Advanced Prompt Engineering for Images",
          "Inpainting, Outpainting & Editing",
          "Consistency Across AI Visuals",
          "AI for UI & Web Graphics",
          "Combining AI with Design Tools"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Building AI Design Workflows",
          "Commercial & Client Applications",
          "Training Custom Image Models",
          "AI Art Direction & Brand Systems",
          "Ethical Use & Copyright in AI Art"
        ]
      }
    ]
  },
  {
    id: 34,
    title: "AI Video Creation\n& Editing",
    code: "VID-200",
    section: "AI Systems & Automation",
    category: "AI Video",
    icon: <Video className="w-5 h-5" />,
    description: "Create, edit, and publish professional-quality videos using AI-powered generation and editing tools.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Intro to AI Video Generation Tools",
          "Text-to-Video Prompting",
          "AI-Assisted Video Editing Basics",
          "Auto-Subtitles & Voiceovers",
          "Exporting & Sharing AI Videos"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Multi-Scene AI Video Production",
          "AI B-Roll & Stock Generation",
          "Advanced AI Editing Workflows",
          "AI Color Grading & Enhancement",
          "Thumbnail & Cover Generation"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Automated Video Content Pipelines",
          "AI Video for Marketing Campaigns",
          "Long-Form AI Video Production",
          "Brand-Consistent AI Video Systems",
          "Monetization & Distribution Strategy"
        ]
      }
    ]
  },
  {
    id: 35,
    title: "AI for Marketing\n& Ads Automation",
    code: "MKT-320",
    section: "AI Systems & Automation",
    category: "Marketing AI",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Automate ad creation, campaign management, and marketing analytics using AI-driven systems.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "AI in Digital Marketing Overview",
          "AI-Generated Ad Copy & Creatives",
          "Audience Research with AI",
          "AI for Email Marketing",
          "Campaign Setup & Launch"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "AI-Powered Ad Targeting",
          "Automated A/B Testing Systems",
          "Multi-Channel Campaign Management",
          "AI Bid Optimization Strategies",
          "Conversion Funnel Analysis"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Full-Stack AI Marketing Systems",
          "Predictive Analytics for Campaigns",
          "AI Attribution & ROI Modeling",
          "Omnichannel Automation Architecture",
          "Scaling & Agency-Level Workflows"
        ]
      }
    ]
  },
  {
    id: 36,
    title: "AI SEO &\nContent Optimization",
    code: "SEO-200",
    section: "AI Systems & Automation",
    category: "SEO AI",
    icon: <Grid className="w-5 h-5" />,
    description: "Use AI to research keywords, optimize content, and build SEO strategies that rank and convert.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "SEO Fundamentals & AI Overview",
          "AI Keyword Research & Clustering",
          "Content Briefs with AI",
          "On-Page Optimization Using AI",
          "Publishing & Indexing Basics"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "AI-Driven Topic Authority Building",
          "Automated Internal Linking",
          "Technical SEO Auditing with AI",
          "Competitor Analysis Automation",
          "AI Content Refresh Strategies"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Programmatic SEO at Scale",
          "AI-Powered Link Building Systems",
          "Advanced SERP Analysis",
          "SEO Reporting Automation",
          "Enterprise SEO Strategy with AI"
        ]
      }
    ]
  },
  {
    id: 37,
    title: "AI Product Building\n(No-Code SaaS)",
    code: "PROD-101",
    section: "AI Systems & Automation",
    category: "Product Building",
    icon: <Box className="w-5 h-5" />,
    description: "Launch AI-powered SaaS products from idea to market using no-code tools and AI infrastructure.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Ideation & Problem Validation",
          "No-Code SaaS Platform Overview",
          "Building Your MVP with AI",
          "User Authentication & Onboarding",
          "Launching Your First Product"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Monetization & Pricing Models",
          "AI Feature Integration",
          "User Feedback & Iteration Loops",
          "Growth & Acquisition Funnels",
          "Analytics & Product Metrics"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Scaling No-Code SaaS Products",
          "AI-Driven Personalization",
          "Team & Workflow Automation",
          "Enterprise Sales & Onboarding",
          "Exit Strategy & Product Valuation"
        ]
      }
    ]
  },
  {
    id: 38,
    title: "AI API Integration\n& OpenRouter Systems",
    code: "API-101",
    section: "AI Systems & Automation",
    category: "AI Engineering",
    icon: <Cpu className="w-5 h-5" />,
    description: "Connect and orchestrate multiple AI models through APIs and OpenRouter for scalable AI applications.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Intro to AI APIs & REST Basics",
          "API Keys, Auth & Environments",
          "Your First AI API Call",
          "OpenRouter Setup & Model Access",
          "Building a Simple AI Integration"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Multi-Model Routing Strategies",
          "Cost Optimization via OpenRouter",
          "Streaming Responses & Webhooks",
          "Context Management in API Calls",
          "Error Handling & Retry Patterns"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Production AI API Architecture",
          "Rate Limiting & Load Balancing",
          "Custom Middleware & Adapters",
          "Logging, Monitoring & Observability",
          "Security Best Practices for AI APIs"
        ]
      }
    ]
  },
  {
    id: 39,
    title: "AI Data Analysis\n& Insights",
    code: "DATA-101",
    section: "AI Systems & Automation",
    category: "Data AI",
    icon: <Grid className="w-5 h-5" />,
    description: "Use AI tools to analyze datasets, generate insights, and create data-driven reports automatically.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Intro to AI-Assisted Data Analysis",
          "Cleaning & Preparing Data with AI",
          "Summarizing Data Using LLMs",
          "Creating Charts & Visualizations",
          "Building Your First AI Data Report"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Pattern Recognition with AI",
          "Predictive Analysis Foundations",
          "Automated Reporting Pipelines",
          "Natural Language Queries on Data",
          "AI for Business Intelligence"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Advanced AI Analytics Frameworks",
          "Real-Time Data Processing with AI",
          "Custom AI Dashboard Development",
          "Statistical Modeling & Forecasting",
          "Data Strategy & Governance"
        ]
      }
    ]
  },
  {
    id: 40,
    title: "AI for Freelancers\n& Income Systems",
    code: "BUSN-210",
    section: "AI Systems & Automation",
    category: "Freelance AI",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Build sustainable income systems as a freelancer using AI to deliver more value in less time.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "AI Freelancer Mindset & Setup",
          "Finding Clients with AI Tools",
          "Automating Proposals & Pitches",
          "AI for Service Delivery",
          "Invoicing & Admin Automation"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Productizing Services with AI",
          "AI for Client Onboarding",
          "Scaling Delivery Without Burnout",
          "Building Retainer Income Systems",
          "AI Portfolio & Personal Branding"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Agency Model with AI",
          "Passive Income Streams Using AI",
          "High-Ticket AI Service Packages",
          "Hiring & Managing AI-Assisted Teams",
          "Long-Term Income Diversification"
        ]
      }
    ]
  },
  {
    id: 41,
    title: "AI for E-commerce\nAutomation",
    code: "ECOM-101",
    section: "AI Systems & Automation",
    category: "E-commerce AI",
    icon: <Workflow className="w-5 h-5" />,
    description: "Automate product listings, customer journeys, and order operations using AI for online stores.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "AI in E-commerce Overview",
          "AI-Generated Product Descriptions",
          "Automated Inventory Management",
          "AI for Customer Segmentation",
          "Setting Up Your AI Store System"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "AI-Powered Upsell & Cross-Sell",
          "Dynamic Pricing with AI",
          "Email & Abandoned Cart Automation",
          "AI for Product Photography",
          "Customer Behavior Analytics"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Full AI E-commerce Ecosystem",
          "Predictive Demand Forecasting",
          "AI Logistics & Fulfillment",
          "Omnichannel AI Integration",
          "Scaling to Multi-Market Operations"
        ]
      }
    ]
  },
  {
    id: 42,
    title: "AI for Customer\nSupport Systems",
    code: "SERV-101",
    section: "AI Systems & Automation",
    category: "Support AI",
    icon: <Layout className="w-5 h-5" />,
    description: "Build intelligent AI support systems that handle inquiries, resolve issues, and delight customers.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "AI in Customer Support Overview",
          "Building Your First AI Chatbot",
          "FAQ & Knowledge Base Automation",
          "Live Chat Handoff Workflows",
          "Measuring Support Performance"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Multi-Channel Support Automation",
          "Sentiment Analysis & Escalation",
          "AI Ticketing System Integration",
          "Personalized Customer Journeys",
          "Support Analytics & Insights"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Enterprise AI Support Architecture",
          "Proactive AI Customer Engagement",
          "Custom AI Agent Training",
          "SLA Automation & Reporting",
          "Continuous Improvement Systems"
        ]
      }
    ]
  },
  {
    id: 43,
    title: "AI Ethics &\nResponsible AI Use",
    code: "ETHC-101",
    section: "AI Systems & Automation",
    category: "AI Ethics",
    icon: <Palette className="w-5 h-5" />,
    description: "Understand the ethical, legal, and societal implications of AI and build responsibly with confidence.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Introduction to AI Ethics",
          "Bias, Fairness & Representation",
          "Privacy & Data Rights",
          "AI Transparency & Explainability",
          "Your Responsibility as an AI User"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "AI Regulation & Compliance Overview",
          "Ethical AI Design Frameworks",
          "Mitigating Algorithmic Harm",
          "AI in Sensitive Domains",
          "Case Studies in AI Ethics"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Building Ethical AI Policies",
          "AI Governance & Audit Frameworks",
          "Responsible AI in Product Teams",
          "Stakeholder Communication on AI Risk",
          "Future of AI Regulation & Society"
        ]
      }
    ]
  },
  {
    id: 44,
    title: "AI Voice &\nAudio Generation",
    code: "AUD-101",
    section: "AI Systems & Automation",
    category: "AI Audio",
    icon: <Film className="w-5 h-5" />,
    description: "Create professional voiceovers, music, and audio content using the latest AI voice and sound tools.",
    levels: [
      {
        name: "Beginner",
        label: "Introductory",
        syllabus: [
          "Intro to AI Voice & Audio Tools",
          "Text-to-Speech & Voice Cloning Basics",
          "AI Music & Sound Generation",
          "Voiceover for Video Content",
          "Exporting & Using AI Audio"
        ]
      },
      {
        name: "Advanced",
        label: "Intermediate",
        syllabus: [
          "Custom AI Voice Creation",
          "AI Podcast Production Workflow",
          "Multi-Language Voiceover Systems",
          "AI Audio Editing & Enhancement",
          "Sound Design with AI Tools"
        ]
      },
      {
        name: "Professional",
        label: "Expert",
        syllabus: [
          "Commercial AI Voice Applications",
          "AI Audio Branding Systems",
          "Automated Audiobook Production",
          "Integration with Video Workflows",
          "Monetizing AI Voice & Audio Content"
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