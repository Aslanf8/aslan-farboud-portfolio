// Project data (in a real app, this would come from a database or CMS)
export const projects = [
  {
    id: "tfi-group",
    title: "TFI Group AI Platform",
    description:
      "AI-powered platform for tax consultancy featuring multi-modal AI assistants, advanced document processing pipelines, and sophisticated LLM orchestration. Built comprehensive AI workflows including Tina AI (conversational AI with vector search), Dan AI (voice-enabled tax consultant), automated document analysis with parallel processing, and schema-driven AI configuration systems.",
    longDescription: `
      Architected and developed a comprehensive enterprise AI platform for TFI Group, a leading tax consultancy specializing in Housing Development, Land Remediation Relief, R&D tax credits, and Capital Allowances in the UK. The platform demonstrates up-to-date AI application development with multiple sophisticated AI systems working in coordination.

      Built Tina AI Assistant - an advanced conversational AI with multi-model support, featuring intelligent file referencing using @filename syntax, real-time web search integration, and dual-scope vector stores for personal and organizational knowledge. Implemented streaming responses, conversation persistence, and context-aware personalization.

      Developed a beta Dan AI Consultation System - a specialized voice-enabled virtual tax consultant with real-time speech-to-text/text-to-speech capabilities, domain-specific persona optimization, and structured consultation workflows mimicking professional tax advisory sessions.

      Created sophisticated document processing pipelines with multi-stage AI analysis workflows including Python-based PDF extraction, Deepgram audio/video transcription with speaker diarization, intelligent content chunking, parallel AI processing across multiple models, reference validation with fact-checking, and automated report generation with Excel output.

      Implemented advanced schema management framework for dynamic AI behavior configuration, including customizable question sets, LLM parameter control, writing style rules, version control with rollback capabilities, and training example management for consistent AI outputs.

      The platform showcases enterprise-grade features including MFA with TOTP-based 2FA, domain-restricted authentication, role-based access control, hierarchical file organization with vector search, cost optimization with token usage tracking, and production-ready error handling with fallback strategies.
    `,
    image: "/tfi-logo.svg",
    tags: [
      "Next.js",
      "TypeScript",
      "Multi-Modal AI",
      "LLM Orchestration",
      "Vector Search",
      "RAG",
      "OpenAI GPT-4o/O1",
      "Voice AI",
      "Document Processing",
      "AI Workflows",
      "Enterprise Auth",
      "Supabase",
    ],
    features: [
      "Tina AI: Multi-model conversational AI with vector search and file referencing",
      "Dan AI: Voice-enabled virtual tax consultant with domain expertise",
      "Advanced document processing with parallel AI analysis workflows",
      "Schema-driven AI configuration with dynamic behavior management",
      "Enterprise authentication with MFA and role-based access control",
      "Real-time streaming AI responses with cost optimization",
      "Sophisticated vector search with dual-scope knowledge bases",
      "Multi-stage document analysis with reference validation",
    ],
    tech: [
      "Next.js 15+",
      "TypeScript",
      "OpenAI GPT-4o, O1, O3-mini",
      "Gemini, Grok, Claude",
      "Vector Stores & RAG",
      "Deepgram Speech AI",
      "Python Document Processing",
      "Trigger.dev Workflows",
      "Supabase (Auth, DB, Storage)",
      "Multi-Factor Authentication",
      "Real-time Streaming APIs",
      "Cost Optimization Systems",
      "Reference Validation AI",
      "Schema Management Framework",
    ],
    live: "https://example.com/tfi",
    github: "",
  },
  {
    id: "daily-vocab",
    title: "DailyVocab",
    description:
      "A IOS mobile vocabulary app that uses LLM to generate a new word daily, featuring pronunciation, definitions, etymology, and personalized tracking to learn obscure english words.",
    longDescription: `
      Developed DailyVocab, a feature-rich mobile application built with React Native (Expo) that helps users expand 
      their vocabulary by learning a new word each day. Implemented comprehensive word details including pronunciation 
      (audio + IPA), definitions, usage examples, etymology, and synonyms & antonyms.
      
      Created an engaging user experience with smooth animations, gradient backgrounds, and responsive design for all 
      screen sizes. Integrated Supabase for backend services, Expo Notifications for daily reminders, and AsyncStorage 
      for local data persistence. Designed a user-friendly interface with word history tracking, profile statistics, 
      and infinite scrolling for seamless content browsing.
    `,
    image: "/daily-word-logo.png",
    tags: ["React Native", "Expo", "Supabase", "IOS", "LLM", "AWS cron"],
    features: [
      "Daily word with complete details",
      "Word history with expandable cards",
      "Profile with streak tracking",
      "Push notifications reminders",
      "Animated transitions and UI elements",
      "Audio pronunciation playback",
      "Infinite scrolling word history",
    ],
    tech: [
      "React Native (Expo)",
      "React Context API",
      "React Navigation",
      "Expo AV",
      "Expo Notifications",
      "Supabase",
      "React Native Animated API",
      "AsyncStorage",
      "Dictionary API Integration",
    ],
    live: "https://apps.apple.com/ca/app/dailyword/id6627334788",
    github: "",
    appStore: "https://apps.apple.com/ca/app/dailyword/id6627334788",
  },
  {
    id: "storytime",
    title: "StoryTime",
    description:
      "A social platform for creating (using LLMs) and sharing stories with features for story creation, friend connections, and personalized feeds.",
    longDescription: `
      Developed StoryTime, a comprehensive mobile story-sharing application built with React Native (Expo) and TypeScript. 
      Created a robust social platform featuring AI-assisted story generation, audio narration, and personalized content discovery.
      
      Implemented a sophisticated audio system with chapter-based playback, background audio support, and progress tracking. 
      Integrated a friend system with request management and notifications. Built a custom theme system with dark/light modes 
      and designed a library of reusable UI components. Used Supabase for authentication, database, and real-time features.
    `,
    image: "/storytime-logo.png",
    tags: [
      "React Native",
      "TypeScript",
      "Expo",
      "Supabase",
      "IOS",
      "LLM",
      "TTS",
      "trigger.dev",
    ],
    features: [
      "AI-assisted story generation",
      "Chapter-based audio playback",
      "Friend system with notifications",
      "Personalized content feed",
      "Custom theme system with dark mode",
      "Real-time updates and interactions",
    ],
    tech: [
      "React Native (Expo)",
      "TypeScript",
      "Supabase PostgreSQL",
      "Supabase Storage",
      "Expo AV",
      "Expo Router",
      "Context API",
      "React Native Reanimated",
      "React Native Gesture Handler",
    ],
    live: "https://storytime-ruby.vercel.app",
    github: "",
    appStore: "",
    comingSoon: "Releasing after Grok 3 API availability",
  },
  {
    id: "briefbuddy",
    title: "BriefBuddy",
    description:
      "LLM-powered note-taking platform, scaled from a web app to a fully functional iOS app. Includes in-app purchases and unique features for enhanced note-taking.",
    longDescription: `
      Founded BriefBuddy, an LLM-powered note-taking platform, scaling it from a web app to a fully functional iOS app 
      (apple.co/49xQYCf; briefbuddy.ca). Single-handedly developed the end-to-end solution using JavaScript, React, Node.js, 
      Python, and Expo for app development/deployment, with Apple Connect (TestFlight, Transporter) for distribution.
      
      Grew the user base to 100+ and generated revenue via in-app purchases. Secured the $5,000 Waterloo Conrad School 
      of Business Entrepreneurship Award for operational excellence.
    `,
    image: "/briefbuddy-logo.png",
    tags: ["React", "Node.js", "Expo", "IOS", "LLM", "AWS", "Supabase"],
    features: [
      "LLM-powered note summarization",
      "Cross-platform functionality",
      "In-app purchases",
      "iOS app available on App Store",
      "Web interface",
    ],
    tech: [
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "Expo",
      "Apple Connect",
      "TestFlight",
      "Transporter",
    ],
    live: "https://briefbuddy.ca",
    github: "",
    appStore: "https://apple.co/49xQYCf",
  },
  {
    id: "traceit",
    title: "TraceIt",
    description:
      "Food traceability system ensuring CFIA compliance by tracking ingredients, production, and sales across the food lifecycle. ",
    longDescription: `
      Developed TraceIt (traceit.ca), a comprehensive food traceability system for West Coast Kitchen, ensuring CFIA compliance 
      by tracking ingredients, production, and sales across the food lifecycle. Built a scalable solution using Next.js 15, 
      React 19, TypeScript, Tailwind CSS, and Tanstack React Query for efficient data management, with Supabase handling 
      authentication, real-time database updates, and storage.
      
      Integrated QR code scanning for rapid product identification, Excel-exportable traceability reports, and secure 
      authentication with Supabase Auth. Earned federal food inspector approval through rigorous system validation and 
      query resolution.
    `,
    image: "/wck-logo.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "shadcn/ui",
      "radix",
      "QR Code & Scanning",
    ],
    features: [
      "CFIA compliant food traceability",
      "QR code scanning",
      "Exportable reports",
      "Ingredient tracking",
      "Production monitoring",
      "Sales tracking",
    ],
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Tanstack React Query",
      "Supabase Auth",
      "Supabase Database",
      "Supabase Storage",
    ],
    live: "https://traceit.ca",
    github: "",
  },
];

