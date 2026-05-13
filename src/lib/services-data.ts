export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceFAQItem = {
  question: string;
  answer: string;
};

export type ServiceData = {
  slug: string;
  navTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  growthIntro: string;
  features: ServiceFeature[];
  capabilities: string[];
  capabilityImage: string;
  process: ServiceProcessStep[];
  faqs: ServiceFAQItem[];
};

export const SERVICES: ServiceData[] = [
  {
    slug: "custom-software-development",
    navTitle: "Custom Software Development",
    heroTitle: "Custom Software Development",
    heroSubtitle:
      "Empower your business with software solutions designed for your unique needs.",
    heroCTA: "Request A Free Consultation",
    growthIntro:
      "Accelerate digital transformation and boost productivity with tailored software built for your workflows. Devsorb delivers robust, scalable, and secure custom software that streamlines operations and helps you stay ahead of the competition.",
    features: [
      {
        title: "Bespoke Solutions for Your Goals",
        description:
          "Every solution is crafted to fit your processes, industry, and business strategy.",
      },
      {
        title: "Experienced Software Engineers",
        description:
          "Our team has a proven record of delivering complex projects on time and within budget.",
      },
      {
        title: "Seamless Integration",
        description:
          "We connect your new software with existing systems for smooth transitions and maximum ROI.",
      },
      {
        title: "Transparent, Agile Delivery",
        description:
          "Enjoy clear communication, flexible scope, and continuous collaboration.",
      },
    ],
    capabilities: [
      "Web, mobile, and desktop app development",
      "Enterprise systems and workflow automation",
      "API and third party integrations",
      "Cloud native and on premise solutions",
      "UI/UX design and prototyping",
    ],
    capabilityImage: "/assets/about-hero-bg.png",
    process: [
      {
        title: "Discovery & Planning",
        description:
          "We collaborate to define your goals, requirements, and vision for the custom software.",
      },
      {
        title: "Design & Prototyping",
        description:
          "Our designers create wireframes and clickable prototypes so you can visualize your solution early.",
      },
      {
        title: "Agile Development & Testing",
        description:
          "Developers build your solution in iterations with continuous testing for quality and reliability.",
      },
      {
        title: "Support & Optimization",
        description:
          "Ongoing maintenance and updates keep your solution secure, fast, and ready for growth.",
      },
      {
        title: "Deployment & Integration",
        description:
          "We launch your software, integrate with your current systems, and ensure a smooth rollout.",
      },
    ],
    faqs: [
      {
        question: "What technologies do you use?",
        answer:
          "We work with React, Angular, Node.js, Python, Java, .NET, AWS, Azure, and more.",
      },
      {
        question: "What industries benefit from your solutions?",
        answer:
          "We serve finance, healthcare, logistics, e-commerce, education, and more.",
      },
    ],
  },
  {
    slug: "ai-machine-learning-development",
    navTitle: "AI & Machine Learning",
    heroTitle: "AI & Machine Learning Development",
    heroSubtitle:
      "Unlock growth and innovation with custom AI solutions for your business.",
    heroCTA: "Request A Free AI Consultation",
    growthIntro:
      "Accelerate business transformation with intelligent automation, predictive analytics, and machine learning. Devsorb helps you use AI to solve real business problems, optimize processes, and gain actionable insights that drive results.",
    features: [
      {
        title: "Tailored AI Solutions for Your Business",
        description:
          "We design custom models and automation tools that address your unique challenges, not just generic templates.",
      },
      {
        title: "Proven AI & Data Science Expertise",
        description:
          "Our engineers and data scientists deliver robust, scalable, and production ready AI systems using the latest technologies.",
      },
      {
        title: "Seamless Integration",
        description:
          "We embed AI into your current apps, platforms, and workflows, so you see immediate value.",
      },
      {
        title: "Transparent Collaboration",
        description:
          "You get open communication, clear deliverables, and ongoing support throughout the project lifecycle.",
      },
    ],
    capabilities: [
      "Custom AI model development and training",
      "Predictive analytics and business intelligence",
      "Recommendation engines",
      "Natural language processing (NLP)",
      "Computer vision and image recognition",
      "AI-driven automation and workflow optimization",
      "Web, mobile & enterprise integration",
    ],
    capabilityImage: "/assets/about-hero-bg.png",
    process: [
      {
        title: "Discovery & Planning",
        description:
          "We analyze your business, data, and goals to define high impact AI opportunities.",
      },
      {
        title: "Data Preparation & Strategy",
        description:
          "We collect, clean, and organize your data to ensure high quality input for machine learning models.",
      },
      {
        title: "Model Development & Testing",
        description:
          "Our engineers design, train, and test AI models, ensuring accuracy and business fit.",
      },
      {
        title: "Optimization",
        description:
          "We monitor results, retrain models, and provide continuous support as your needs evolve.",
      },
      {
        title: "Deployment & Integration",
        description:
          "We launch your AI solution and integrate it into your existing systems for seamless operations.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate AI into our current systems?",
        answer:
          "Yes, our team specializes in integrating AI features and analytics into your existing software or cloud platforms.",
      },
      {
        question: "What industries benefit from your AI solutions?",
        answer:
          "We serve finance, healthcare, logistics, e-commerce, education, and more.",
      },
    ],
  },
  {
    slug: "blockchain-development",
    navTitle: "Blockchain Development",
    heroTitle: "Blockchain Development",
    heroSubtitle:
      "Build trust, security, and efficiency with custom blockchain solutions.",
    heroCTA: "Start Your Blockchain Project",
    growthIntro:
      "Transform your business operations with secure, decentralized blockchain applications. Devsorb delivers blockchain solutions that enable transparent transactions, smart contracts, and next generation digital assets tailored to your needs.",
    features: [
      {
        title: "Multi Chain Development Expertise",
        description:
          "We deliver secure solutions on Ethereum, Cardano, Solana, and more, customizing each project for your industry and goals.",
      },
      {
        title: "End-to-End Blockchain Services",
        description:
          "From consulting and smart contract development to full DApp delivery, we manage the entire lifecycle.",
      },
      {
        title: "Compliance and Security First",
        description:
          "We ensure your project meets all regulatory and security standards so you can innovate with confidence.",
      },
      {
        title: "Real World Blockchain Experience",
        description:
          "Our team has launched crypto payment platforms, DeFi solutions, and NFT apps with measurable results.",
      },
    ],
    capabilities: [
      "Smart contract development and auditing",
      "Decentralized applications (DApps)",
      "Token creation (ERC-20, NFTs, etc.)",
      "Crypto payment integration",
      "Blockchain consulting and architecture",
      "Integration with web/mobile platforms",
    ],
    capabilityImage: "/assets/about-hero-bg.png",
    process: [
      {
        title: "Consult & Design",
        description:
          "We start by understanding your goals and crafting a blockchain solution that fits your business case.",
      },
      {
        title: "Blockchain Architecture",
        description:
          "Our team designs the architecture and maps the project roadmap for security and scalability.",
      },
      {
        title: "Development & Testing",
        description:
          "We develop smart contracts, DApps, or tokens, and rigorously test for reliability and compliance.",
      },
      {
        title: "Support & Upgrades",
        description:
          "Continuous monitoring and feature upgrades keep your blockchain solutions running smoothly.",
      },
      {
        title: "Deployment & Training",
        description:
          "We launch your solution, provide training, and ensure smooth adoption by your team.",
      },
    ],
    faqs: [
      {
        question: "Can you build on our preferred blockchain?",
        answer:
          "Yes, we support Ethereum, Cardano, Solana, and other major platforms.",
      },
      {
        question: "Do you offer smart contract audits?",
        answer:
          "Absolutely, security audits are part of every blockchain project we deliver.",
      },
    ],
  },
  {
    slug: "front-backend-development",
    navTitle: "Front & Backend Development",
    heroTitle: "Front & Backend Development",
    heroSubtitle: "Create robust, scalable web solutions for your business.",
    heroCTA: "Book A Consultation",
    growthIntro:
      "Deliver world class user experiences and reliable performance with our front-end and back-end development services. Devsorb crafts custom applications designed for speed, security, and business growth.",
    features: [
      {
        title: "Custom Digital Product Development",
        description:
          "We create tailored websites, apps, and APIs aligned with your business goals.",
      },
      {
        title: "Performance and Scalability",
        description:
          "Our code is clean, optimized, and built for growth as your business expands.",
      },
      {
        title: "Security Built In",
        description:
          "We use secure coding standards and the latest frameworks to protect your data and users.",
      },
      {
        title: "Agile, Collaborative Approach",
        description:
          "You get regular updates, transparent communication, and on time delivery every step of the way.",
      },
    ],
    capabilities: [
      "Responsive web app development",
      "Custom API design and integration",
      "Complex database architecture",
      "UI/UX design and prototyping",
      "System modernization and migration",
      "Performance optimization",
    ],
    capabilityImage: "/assets/about-hero-bg.png",
    process: [
      {
        title: "Requirements & Planning",
        description:
          "We analyze your needs and define clear requirements for both frontend and backend.",
      },
      {
        title: "UI/UX & Architecture",
        description:
          "Our team designs intuitive interfaces and robust back-end structures to maximize performance.",
      },
      {
        title: "Agile Development & Testing",
        description:
          "Frontend and backend are built in parallel sprints, with regular testing for speed and quality.",
      },
      {
        title: "Maintenance & Support",
        description:
          "Ongoing support and optimizations keep your digital product up-to-date and secure.",
      },
      {
        title: "Launch & Integration",
        description:
          "We deploy your solution and ensure smooth integration with other systems and APIs.",
      },
    ],
    faqs: [
      {
        question: "Can you upgrade our legacy web app?",
        answer:
          "Yes, we modernize and scale existing platforms using the latest technologies.",
      },
      {
        question: "How do you ensure security and compliance?",
        answer:
          "We follow industry standards for data protection, regular audits, and secure coding practices.",
      },
    ],
  },
  {
    slug: "android-ios-app-development",
    navTitle: "Android & iOS App Development",
    heroTitle: "Android & iOS App Development",
    heroSubtitle: "Reach your customers everywhere with custom mobile apps.",
    heroCTA: "Request A Free App Quote",
    growthIntro:
      "Grow your business and engage users with high performance mobile applications for Android and iOS. Devsorb delivers intuitive, secure, and scalable apps built to match your unique needs.",
    features: [
      {
        title: "Full Cycle Mobile Development",
        description:
          "From concept to app store launch, we manage every stage of your mobile project.",
      },
      {
        title: "Native & Cross Platform Expertise",
        description:
          "We use Swift, Kotlin, React Native, and Flutter for flexible, high quality builds.",
      },
      {
        title: "User Centric Design",
        description:
          "Our apps focus on seamless user experience, accessibility, and brand alignment.",
      },
      {
        title: "Seamless Integration",
        description:
          "We connect your mobile apps with your backend, CRM, and third party services for maximum value.",
      },
    ],
    capabilities: [
      "Custom Android & iOS development",
      "Hybrid and cross platform apps",
      "Mobile UI/UX design",
      "App maintenance and optimization",
      "API and system integration",
    ],
    capabilityImage: "/assets/about-hero-bg.png",
    process: [
      {
        title: "Discovery & Strategy",
        description:
          "We start by clarifying your app vision, business goals, and user needs.",
      },
      {
        title: "UI/UX Design & Prototyping",
        description:
          "Designers create intuitive wireframes and interactive prototypes for a great user experience.",
      },
      {
        title: "App Development & Testing",
        description:
          "Our developers build fast, secure apps and test for quality on multiple devices.",
      },
      {
        title: "Support & Optimization",
        description:
          "Continuous updates, bug fixes, and enhancements keep your app at its best.",
      },
      {
        title: "Launch & Distribution",
        description:
          "We deploy your app to app stores and help you reach your audience.",
      },
    ],
    faqs: [
      {
        question: "Can you build for both Android and iOS?",
        answer:
          "Yes, we develop both native and cross-platform apps to reach all your users.",
      },
      {
        question: "Do you provide post launch support?",
        answer:
          "Absolutely, we offer maintenance, updates, and feature enhancements.",
      },
    ],
  },
  {
    slug: "devops-cloud-services",
    navTitle: "DevOps & Cloud",
    heroTitle: "DevOps & Cloud Services",
    heroSubtitle:
      "Deploy faster and scale smarter with cloud native solutions.",
    heroCTA: "Book A Devops Consultation",
    growthIntro:
      "Optimize your operations and cut IT costs with our DevOps and cloud services. Devsorb automates deployment, ensures uptime, and keeps your applications secure so you can focus on growth.",
    features: [
      {
        title: "Certified Cloud Experts",
        description:
          "Our team is skilled in AWS, Azure, Google Cloud, and modern DevOps tools.",
      },
      {
        title: "Faster Time to Market",
        description:
          "Automated pipelines and continuous integration get your products live quickly.",
      },
      {
        title: "Maximum Uptime & Security",
        description:
          "We monitor your infrastructure and prevent downtime with proactive support.",
      },
      {
        title: "Scalable, Future Proof Solutions",
        description:
          "Our cloud setups adapt to your changing needs as your business grows.",
      },
    ],
    capabilities: [
      "Cloud architecture and migration",
      "Continuous integration and delivery (CI/CD)",
      "Automated deployment pipelines",
      "Infrastructure monitoring and management",
      "Cost optimization and cloud security",
    ],
    capabilityImage: "/assets/about-hero-bg.png",
    process: [
      {
        title: "Assessment & Planning",
        description:
          "We review your current infrastructure and define a cloud strategy tailored for your needs.",
      },
      {
        title: "Cloud Architecture Design",
        description:
          "Our experts design secure, scalable cloud environments ready for any workload.",
      },
      {
        title: "Automation Setup",
        description:
          "We configure CI/CD pipelines and automated workflows to speed up delivery.",
      },
      {
        title: "Monitoring & Support",
        description:
          "Real time monitoring and 24/7 support keep your systems running smoothly.",
      },
      {
        title: "Migration & Testing",
        description:
          "We migrate apps and data to the cloud with careful testing for zero downtime.",
      },
    ],
    faqs: [
      {
        question: "Can you migrate our on premise apps to the cloud?",
        answer:
          "Yes, we handle complete cloud migration with minimal disruption.",
      },
      {
        question: "What cloud platforms do you support?",
        answer: "We work with AWS, Azure, Google Cloud, and more.",
      },
    ],
  },
  {
    slug: "software-testing-services",
    navTitle: "Software Testing",
    heroTitle: "Software Testing Services",
    heroSubtitle:
      "Ensure flawless launches with comprehensive QA and testing.",
    heroCTA: "Request A QA Audit",
    growthIntro:
      "Protect your brand and deliver high quality products with Devsorb's manual and automated testing services. We help you find bugs early, meet user expectations, and launch with confidence.",
    features: [
      {
        title: "Full Spectrum QA Services",
        description:
          "We cover functional, usability, performance, and security testing for web, mobile, and enterprise apps.",
      },
      {
        title: "Expert QA Engineers",
        description:
          "Our team uses the latest tools and methods to catch issues before they reach your users.",
      },
      {
        title: "Automated & Manual Testing",
        description:
          "We set up test automation for speed and accuracy and do thorough manual checks for user experience.",
      },
      {
        title: "Transparent Reporting",
        description:
          "You get detailed test reports, so you know exactly what's working and what needs attention.",
      },
    ],
    capabilities: [
      "Functional and regression testing",
      "Automated test development",
      "Load, stress, and performance testing",
      "Security and compliance testing",
      "Usability and accessibility reviews",
    ],
    capabilityImage: "/assets/about-hero-bg.png",
    process: [
      {
        title: "Requirement Analysis",
        description:
          "We gather requirements and define clear test objectives for your application.",
      },
      {
        title: "Test Planning & Design",
        description:
          "Our QA team creates test cases and plans to cover all critical functionalities.",
      },
      {
        title: "Test Execution",
        description:
          "We run manual and automated tests, tracking bugs and ensuring every feature works flawlessly.",
      },
      {
        title: "Continuous QA Support",
        description:
          "Ongoing testing, regression checks, and support help you maintain quality over time.",
      },
      {
        title: "Reporting & Feedback",
        description:
          "Detailed reports and actionable feedback help you fix issues before launch.",
      },
    ],
    faqs: [
      {
        question: "Can you automate our testing processes?",
        answer:
          "Yes, we implement test automation to improve efficiency and reduce manual effort.",
      },
      {
        question: "Do you offer ongoing QA support?",
        answer:
          "Absolutely, we provide maintenance and regression testing as your app evolves.",
      },
    ],
  },
  {
    slug: "system-integration-services",
    navTitle: "System Integration",
    heroTitle: "System Integration Services",
    heroSubtitle: "Connect your systems for seamless business operations.",
    heroCTA: "Start An Integration Project",
    growthIntro:
      "Eliminate silos and automate your business with expert system integration. Devsorb connects your CRM, ERP, payment gateways, and apps for smooth, error free workflows.",
    features: [
      {
        title: "Deep Integration Expertise",
        description:
          "We unify modern and legacy systems, ensuring all your tools work together.",
      },
      {
        title: "Automated Data Flow",
        description:
          "Say goodbye to manual work and boost accuracy with automated integrations.",
      },
      {
        title: "Secure, Reliable Connections",
        description:
          "Our solutions protect your data and ensure business continuity.",
      },
      {
        title: "Tailored to Your Needs",
        description:
          "We design custom integrations that fit your unique processes and tech stack.",
      },
    ],
    capabilities: [
      "CRM, ERP, and payment gateway integration",
      "Third party API connections",
      "Data migration and synchronization",
      "Workflow automation",
      "Legacy system modernization",
    ],
    capabilityImage: "/assets/about-hero-bg.png",
    process: [
      {
        title: "Requirements Analysis",
        description:
          "We review your systems and business processes to map out integration needs.",
      },
      {
        title: "Solution Design",
        description:
          "Our architects plan secure, scalable integration solutions tailored for your business.",
      },
      {
        title: "Integration Development",
        description:
          "We develop connectors, scripts, and APIs to automate and unify your workflows.",
      },
      {
        title: "Launch & Support",
        description:
          "We deploy integrations and provide ongoing support for smooth business operations.",
      },
      {
        title: "QA & Testing",
        description:
          "Rigorous testing ensures every integration works flawlessly and safely.",
      },
    ],
    faqs: [
      {
        question: "Can you connect our legacy platforms to new apps?",
        answer:
          "Yes, we bridge modern and legacy systems for full interoperability.",
      },
      {
        question: "Do you provide ongoing integration support?",
        answer:
          "Absolutely, we maintain and update your integrations as your business grows.",
      },
    ],
  },
  {
    slug: "mvp-development-services",
    navTitle: "MVP Development",
    heroTitle: "MVP Development Services",
    heroSubtitle:
      "Launch your product idea fast and start learning from real users.",
    heroCTA: "Book A Free MVP Consultation",
    growthIntro:
      "Test your concepts quickly with Devsorb's minimum viable product (MVP) development services. We help startups and enterprises launch with speed, collect feedback, and minimize risk.",
    features: [
      {
        title: "Lean, Agile Development",
        description:
          "Get to market faster with focused features and a rapid feedback loop.",
      },
      {
        title: "End-to-End Support",
        description:
          "We guide you from ideation through launch and beyond, making pivots easy.",
      },
      {
        title: "User Centered Design",
        description:
          "We create MVPs that are easy to use and ready for real world adoption.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Our MVPs are built to grow into full featured products as you scale.",
      },
    ],
    capabilities: [
      "MVP strategy and road mapping",
      "Rapid prototyping",
      "User feedback integration",
      "Web and mobile MVP development",
      "Post launch scaling and support",
    ],
    capabilityImage: "/assets/about-hero-bg.png",
    process: [
      {
        title: "Discovery & Strategy",
        description:
          "We explore your product vision, goals, and key user problems to define a winning MVP plan.",
      },
      {
        title: "Prototyping & User Testing",
        description:
          "Clickable prototypes are built and tested with real users for early feedback.",
      },
      {
        title: "MVP Development",
        description:
          "Our engineers build the MVP with only the must have features for launch speed.",
      },
      {
        title: "Iteration & Growth",
        description:
          "Your MVP is updated based on insights, and new features are added as you grow.",
      },
      {
        title: "Launch & Data Collection",
        description:
          "We release your MVP and gather real world feedback and usage analytics.",
      },
    ],
    faqs: [
      {
        question: "Can you help refine my product idea?",
        answer:
          "Yes, we offer workshops and consultations to validate and focus your MVP.",
      },
      {
        question: "How fast can you launch an MVP?",
        answer:
          "We typically deliver MVPs in as little as 4-8 weeks, depending on complexity.",
      },
    ],
  },
  {
    slug: "enterprise-software-development",
    navTitle: "Enterprise Software Development",
    heroTitle: "Enterprise Software Development",
    heroSubtitle:
      "Transform your enterprise with secure, scalable business solutions.",
    heroCTA: "Request A Free Consultation",
    growthIntro:
      "Empower your organization with custom enterprise software that supports growth and streamlines complex processes. Devsorb delivers ERP, CRM, and workflow automation solutions built to fit your needs.",
    features: [
      {
        title: "Enterprise Grade Solutions",
        description:
          "We understand the unique challenges of large organizations and deliver robust, compliant software.",
      },
      {
        title: "Legacy System Integration",
        description:
          "We modernize and connect your existing infrastructure for true digital transformation.",
      },
      {
        title: "Agile, Transparent Delivery",
        description:
          "Our team communicates clearly and adapts quickly to your feedback.",
      },
      {
        title: "Continuous Support",
        description:
          "We provide maintenance, enhancements, and user training to ensure long term success.",
      },
    ],
    capabilities: [
      "Custom ERP and CRM development",
      "Workflow and process automation",
      "Data analytics and business intelligence",
      "Integration with legacy and third party systems",
      "Compliance and security solutions",
    ],
    capabilityImage: "/assets/about-hero-bg.png",
    process: [
      {
        title: "Requirements Gathering",
        description:
          "We analyze your business processes and requirements for an enterprise grade solution.",
      },
      {
        title: "Solution Architecture",
        description:
          "Architects design secure, scalable systems tailored to your enterprise environment.",
      },
      {
        title: "Agile Development",
        description:
          "Development proceeds in sprints with full transparency and frequent demos for your team.",
      },
      {
        title: "Deployment & Support",
        description:
          "We deploy, train users, and provide ongoing support for long term success.",
      },
      {
        title: "QA & User Testing",
        description:
          "Rigorous testing and user feedback ensure the solution works at scale.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate with our legacy systems?",
        answer:
          "Yes, we specialize in seamless integration with both legacy and modern enterprise platforms.",
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer:
          "Absolutely, we offer continuous support and feature updates as your business evolves.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
