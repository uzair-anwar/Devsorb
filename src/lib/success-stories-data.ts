export type IndustryGroup = {
  industry: string;
  image: string;
  imageSide: "left" | "right";
  clients: { name: string; description: string }[];
};

export type CaseStudyItem = { title: string; description: string };

export type CaseStudyDetail = {
  intro: {
    subtitle: string;
    highlights: CaseStudyItem[];
  };
  challenge: {
    heading: string;
    paragraphs: string[];
    objectives: CaseStudyItem[];
  };
  solution: {
    heading: string;
    points: CaseStudyItem[];
    howWeBuiltIt: CaseStudyItem[];
  };
  results: {
    heading: string;
    impact: CaseStudyItem[];
  };
  snapshot: {
    client: string;
    stacks: string;
    ctaText: string;
  };
};

export type CaseStudy = {
  slug: string;
  title: string;
  image: string;
  detail?: CaseStudyDetail;
};

export const INDUSTRY_GROUPS: IndustryGroup[] = [
  {
    industry: "Fintech",
    image: "/assets/success/fintech.png",
    imageSide: "left",
    clients: [
      {
        name: "Ehata Financial",
        description:
          "AI powered FX risk management system with real time insights.",
      },
      {
        name: "OnTab",
        description:
          "Wallet to wallet payment app with budgeting tools and NFC POS.",
      },
      {
        name: "FanFood",
        description:
          "In stadium mobile ordering and payments to reduce queues and improve fan experience.",
      },
      {
        name: "Bank of Riyadh",
        description:
          "Digital first banking platform serving millions of daily users.",
      },
    ],
  },
  {
    industry: "Cross-Industry",
    image: "/assets/success/cross-industry.png",
    imageSide: "right",
    clients: [
      {
        name: "Tellirent",
        description:
          "Seamless rental marketplace connecting tenants and landlords.",
      },
      {
        name: "Eduleaf",
        description:
          "AI-driven automated grading system that saves educators valuable time.",
      },
      {
        name: "Petestablish",
        description:
          "Digital platform connecting pet owners with veterinary services and wellness providers.",
      },
      {
        name: "Hoodle",
        description:
          "AI powered real estate matching platform for lifestyle based home buying.",
      },
    ],
  },
  {
    industry: "Blockchain",
    image: "/assets/success/blockchain.png",
    imageSide: "left",
    clients: [
      {
        name: "Lucia Protocol",
        description:
          "DAO governance and rewards supporting 1.5K+ active climate contributors.",
      },
      {
        name: "Orio",
        description:
          "Tokenized membership system with smart contracts for community access.",
      },
      {
        name: "Venflow",
        description:
          "NFT utilities and staking features helping creators monetize fan engagement.",
      },
      {
        name: "Spritz Finance",
        description:
          "10K+ users pay real world bills directly from crypto wallets.",
      },
    ],
  },
  {
    industry: "Healthcare",
    image: "/assets/success/healthcare.png",
    imageSide: "right",
    clients: [
      {
        name: "SeeWithin Health",
        description:
          "AI-powered radiology follow-up system improving patient communication.",
      },
      {
        name: "WayWiser",
        description:
          "Family caregiving and financial safety tools with fraud prevention features.",
      },
      {
        name: "Navitus Health Solutions",
        description:
          "Transparent pharmacy benefits platform lowering drug costs.",
      },
      {
        name: "BioMark",
        description:
          "Preventive healthcare insights powered by lab data and predictive analytics.",
      },
      {
        name: "Pip Care",
        description:
          "Surgical optimization platform reducing cancellations and hospital stays.",
      },
      {
        name: "CareCentrix",
        description:
          "In home care coordination system reducing readmissions and improving outcomes.",
      },
      {
        name: "ExtendMed",
        description:
          "Virtual healthcare engagement platform for life sciences companies.",
      },
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "energy-market-intelligence",
    title: "Turning Historical Energy Data into Forward Looking Market Intelligence",
    image: "/assets/success/cs-energy.png",
    detail: {
      intro: {
        subtitle:
          "Empowering energy decisions through predictive models, real time insights, and a future ready platform built by Devsorb.",
        highlights: [
          { title: "30+ Years", description: "Historical Energy Data" },
          { title: "Real Time", description: "Market Insights" },
          { title: "80%", description: "Market Trend Prediction Accuracy" },
        ],
      },
      challenge: {
        heading: "The Market Challenge",
        paragraphs: [
          "A leading player in the energy sector faced significant challenges in transforming decades of historical data into actionable market intelligence. Their decision making relied on over 30 years of raw energy data, but historical data alone was not enough for accurate future forecasting.",
          "The company also needed a real-time analytics platform supporting 300+ users who depended on static reports. They required a faster, smarter solution to enable data driven decision making in a rapidly evolving energy market.",
        ],
        objectives: [
          {
            title: "Daily Data Processing",
            description: "Ingest & process 50+ GB of data daily",
          },
          {
            title: "Trend Prediction",
            description: "Reach 80% forecasting accuracy",
          },
          {
            title: "Scalable Requests",
            description: "Handle 5,000+ daily analysis requests",
          },
          {
            title: "Responsive Experience",
            description: "Low latency UX for 500+ professionals",
          },
        ],
      },
      solution: {
        heading: "AI-Powered Solutions Engineered by Devsorb",
        points: [
          {
            title: "Historical Data Integration",
            description:
              "Integrated 30+ years of historical energy data with advanced predictive models.",
          },
          {
            title: "Prediction Accuracy",
            description:
              "Achieved 80% forecasting accuracy for future market trends.",
          },
          {
            title: "High Performance Backend",
            description:
              "Built a fast and reliable Node.js backend for large scale data processing.",
          },
          {
            title: "Modern Frontend Experience",
            description:
              "Clean, responsive interface using React and Next.js for seamless exploration.",
          },
          {
            title: "Scalable Deployment",
            description:
              "Scalable pipelines using Docker and Nginx for performance optimization.",
          },
        ],
        howWeBuiltIt: [
          {
            title: "Node.js Backend",
            description:
              "Engineered a high performance backend capable of handling 5,000+ daily requests.",
          },
          {
            title: "Python Predictive Models",
            description:
              "Built advanced forecasting algorithms in Python that achieved 80% prediction accuracy.",
          },
          {
            title: "React Frontend",
            description:
              "Developed an interactive React.js interface with dynamic data visualizations.",
          },
          {
            title: "Scalable Infrastructure",
            description:
              "Leveraged Docker and Nginx for seamless scaling and optimized system performance.",
          },
        ],
      },
      results: {
        heading: "Measurable Business Impact",
        impact: [
          {
            title: "300+ Users",
            description:
              "Real time access to critical market insights for energy professionals",
          },
          {
            title: "50% Faster",
            description:
              "Decision making speed improved significantly in dynamic market conditions.",
          },
          {
            title: "80% Accurate",
            description:
              "Reliable predictions for future energy market trends",
          },
          {
            title: "1M+ Daily Data Points",
            description:
              "Scalable infrastructure capable of processing massive datasets efficiently.",
          },
        ],
      },
      snapshot: {
        client: "NAT Power",
        stacks: "Node.js · React · Next.js · Python",
        ctaText: "Looking to build powerful analytics platforms with Devsorb?",
      },
    },
  },
  {
    slug: "property-leasing-intelligence",
    title: "Transforming Property Leasing with Data Driven Intelligence",
    image: "/assets/success/cs-property.png",
  },
  {
    slug: "healthcare-interoperability",
    title: "What If All Healthcare Systems Actually Spoke to Each Other?",
    image: "/assets/success/cs-healthcare.png",
  },
  {
    slug: "intelligent-fashion-discovery",
    title: "From Fragmented Shopping to Intelligent Fashion Discovery",
    image: "/assets/success/cs-fashion.png",
  },
];

export const WHY_CLIENTS = {
  heading: "Why Clients Succeed with Devsorb?",
  body: "We combine deep expertise across industries with future ready technologies like AI, blockchain, IoT, and cloud. By working closely with our clients, we build long term partnerships that drive sustainable growth and lasting value.",
};

export const CASE_STUDY_SLUGS = CASE_STUDIES.map((c) => c.slug);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
