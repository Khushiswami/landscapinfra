export interface ResourceItem {
  id: number;
  type: string;
  industry: string;
  title: string;
  description: string;
  detailedDescription: string; // Added for detailed content
  image: string;
  link: string;
}

export const resources: ResourceItem[] = [
  {
    id: 1,
    type: "eBook",
    industry: "Solar",
    title: "Complete Guide to Industrial Solar Deployment",
    description:
      "A deep dive into large-scale solar installations for factories, warehouses, and commercial spaces.",
    detailedDescription: `
      This eBook provides a deep understanding of Solar industry trends, real-world applications, and expert insights.
      You will learn how businesses are implementing large-scale solar solutions to achieve efficiency and sustainability.
      Includes market opportunities, case studies, technical details, and future predictions.
    `,
    image: "/news2.jpeg",
    link: "/resources/1",
  },
  {
    id: 2,
    type: "eBook",
    industry: "PEB",
    title: "Modern Pre-Engineered Buildings for Faster Infra Growth",
    description:
      "Explore how next-gen PEB structures reduce time, cost, and enhance sustainability.",
    detailedDescription: `
      This eBook explores Pre-Engineered Buildings (PEB) in detail, covering design, construction, and cost optimization.
      Learn how modern PEB solutions speed up infrastructure projects while maintaining quality and sustainability.
      Includes real-world case studies and technical insights.
    `,
    image: "/new4.jpg",
    link: "/resources/2",
  },
  {
    id: 3,
    type: "Brochure",
    industry: "PEB",
    title: "Landsking Infra – PEB Solutions Brochure",
    description:
      "A complete overview of our Pre-Engineered Buildings, industrial sheds, and turnkey project capability.",
    detailedDescription: `
      This brochure gives an in-depth overview of Landsking Infra’s PEB offerings.
      Covers modular industrial structures, turnkey projects, and customization options.
      Perfect for engineers and project managers looking for reliable PEB solutions.
    `,
    image: "/industry.jpg",
    link: "/resources/3",
  },
  {
    id: 4,
    type: "Brochure",
    industry: "Solar",
    title: "Landsking Solar EPC Brochure",
    description:
      "Professional EPC solutions for rooftop, ground-mounted, and industrial solar systems.",
    detailedDescription: `
      This brochure covers Landsking’s Solar EPC solutions.
      Learn about project planning, installation, operations, and maintenance of solar systems.
      Ideal for industrial and commercial clients seeking efficient renewable energy solutions.
    `,
    image: "/new5.jpg",
    link: "/resources/4",
  },
  {
    id: 5,
    type: "Whitepaper",
    industry: "Infrastructure",
    title: "Steel Infrastructure for High-Performance Industries",
    description:
      "Technical whitepaper focused on structural design, load performance, and durability of steel buildings.",
    detailedDescription: `
      This whitepaper provides detailed technical insights into steel infrastructure.
      Covers structural design principles, load calculations, and long-term durability considerations.
      Includes case studies and industry best practices for high-performance projects.
    `,
    image: "/news2.jpeg",
    link: "/resources/5",
  },
  {
    id: 6,
    type: "Whitepaper",
    industry: "Sustainability",
    title: "Sustainable Construction Through Renewable Energy",
    description:
      "A sustainability-focused report showcasing solar adoption and energy-efficient infra.",
    detailedDescription: `
      This whitepaper focuses on sustainable construction and renewable energy integration.
      Explore solar adoption trends, energy-efficient building techniques, and environmental impact reduction.
      Useful for policymakers, architects, and sustainability consultants.
    `,
    image: "/realstate.png",
    link: "/resources/6",
  },
  {
    id: 7,
    type: "Insight",
    industry: "Construction",
    title: "Future of Fast-Track Construction in India",
    description:
      "How modular steel and hybrid construction are changing the pace of infrastructure projects.",
    detailedDescription: `
      This insight article discusses fast-track construction trends in India.
      Learn about modular steel, hybrid methods, and project acceleration techniques.
      Includes practical examples, challenges, and strategies for rapid project execution.
    `,
    image: "/service.jpg",
    link: "/resources/7",
  },
  {
    id: 8,
    type: "Insight",
    industry: "Solar",
    title: "Why Businesses Are Switching to Solar in 2025",
    description:
      "Financial and operational benefits of renewable energy for commercial and industrial customers.",
    detailedDescription: `
      This insight explores why businesses are adopting solar energy.
      Covers cost savings, operational efficiency, government incentives, and sustainability benefits.
      Provides data-backed analysis and case studies of successful solar implementations.
    `,
    image: "/about.png",
    link: "/resources/8",
  },
];
