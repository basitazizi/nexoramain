export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about-us" },
  { label: "Contact", href: "/contact" }
];

export const enabledRoutes = ["/", "/services"] as const;

export function isEnabledRoute(href: string) {
  return enabledRoutes.includes(href as (typeof enabledRoutes)[number]);
}

export const serviceCategories = [
  {
    title: "Build",
    description:
      "We design and ship the systems businesses need to operate, sell, and scale online.",
    items: [
      "Software development",
      "Database systems",
      "Admin panels",
      "Management platforms",
      "Websites",
      "Booking systems",
      "Ordering QR flows",
      "E-commerce",
      "AI agents"
    ]
  },
  {
    title: "Grow",
    description:
      "We connect the product layer to growth work so launches do not stall after the website goes live.",
    items: [
      "Marketing systems",
      "Social media planning",
      "Content creation",
      "Paid ads",
      "Brand scaling strategy",
      "Brand development"
    ]
  },
  {
    title: "Operate",
    description:
      "We simplify internal workflows and customer journeys so your team can move faster with less overhead.",
    items: [
      "Lead capture funnels",
      "Client dashboards",
      "Internal tools",
      "Automation flows",
      "Reporting layers",
      "Support journeys"
    ]
  }
];

export const homeShowcaseCards = [
  {
    eyebrow: "Website systems",
    title: "Landing pages that explain what you do fast.",
    description:
      "Clear messaging, conversion-first structure, and a visual system that makes your offer easier to trust.",
    metrics: ["Sharp positioning", "Fast delivery", "Built to convert"]
  },
  {
    eyebrow: "Operations",
    title: "Admin panels and databases that keep the business moving.",
    description:
      "Behind the marketing, we build the tools your team needs to manage bookings, orders, users, and internal workflows.",
    metrics: ["Internal tools", "Data structure", "Team clarity"]
  },
  {
    eyebrow: "Growth",
    title: "Brand, content, and paid campaigns that support the launch.",
    description:
      "We connect design, development, and growth so your website is not working alone after it ships.",
    metrics: ["Brand systems", "Paid traffic", "Content support"]
  }
];

export const processSteps = [
  {
    title: "Scope the offer",
    description:
      "We define what needs to be built, who it is for, and what the site or system needs to achieve."
  },
  {
    title: "Design the flow",
    description:
      "We shape the messaging, wireframes, visual direction, and interaction patterns before heavy build work starts."
  },
  {
    title: "Ship the build",
    description:
      "We develop the website, dashboard, booking flow, or automation stack and prepare it for launch."
  },
  {
    title: "Support growth",
    description:
      "We refine pages, improve conversion points, and extend the system with content, campaigns, and new features."
  }
];

export const solutionCards = [
  {
    title: "Launch-ready websites",
    description:
      "Minimal marketing websites for SaaS teams, local businesses, service brands, and operators who need clarity and speed."
  },
  {
    title: "Business systems",
    description:
      "Booking flows, QR ordering systems, admin panels, dashboards, and internal tools designed around real operations."
  },
  {
    title: "Growth support",
    description:
      "Brand strategy, ads, social systems, and content workflows that support the website after launch."
  }
];

export const principleCards = [
  {
    title: "Minimal by default",
    description:
      "We strip away noise and push the message, hierarchy, and conversion path to the front."
  },
  {
    title: "Built for use",
    description:
      "Pretty pages are not enough. We focus on systems that help teams sell, manage, and deliver."
  },
  {
    title: "Fast to launch",
    description:
      "We favor focused execution, clear decisions, and shipping work that is ready to use."
  }
];

export const teamMembers = [
  {
    name: "Nadim Khan",
    role: "Creative direction",
    bio: "Shapes the visual system, brand voice, and the overall tone of each launch."
  },
  {
    name: "Amina Yusuf",
    role: "Product design",
    bio: "Turns offers and workflows into clean interfaces that feel easy to use."
  },
  {
    name: "Rafi Noor",
    role: "Full-stack development",
    bio: "Builds websites, dashboards, data flows, and custom business tooling."
  },
  {
    name: "Leena Ortiz",
    role: "Growth strategy",
    bio: "Connects content, paid ads, and funnels to support launch momentum."
  },
  {
    name: "Isa Malik",
    role: "Automation systems",
    bio: "Designs operational flows that reduce repetitive work and tighten response time."
  },
  {
    name: "Sara Patel",
    role: "Accounts and delivery",
    bio: "Keeps projects structured, on schedule, and aligned with business priorities."
  }
];

export const roleCards = [
  {
    title: "Product designer",
    description:
      "You can create elegant interfaces, structure messaging, and think in systems rather than isolated screens."
  },
  {
    title: "Full-stack developer",
    description:
      "You are comfortable moving from polished frontends to backend logic, data design, and integrations."
  },
  {
    title: "Growth marketer",
    description:
      "You understand paid media, content loops, and the mechanics behind turning attention into pipeline."
  },
  {
    title: "Project operator",
    description:
      "You keep teams aligned, communicate clearly, and know how to move work from idea to launch without drift."
  }
];

export const contactCards = [
  {
    title: "Project enquiries",
    description:
      "For new websites, booking systems, dashboards, QR ordering, e-commerce, and AI-driven workflows.",
    actionLabel: "Start a project",
    actionHref: "/contact"
  },
  {
    title: "Partnerships",
    description:
      "For collaborations with agencies, operators, and teams that need a flexible build and growth partner.",
    actionLabel: "Discuss a partnership",
    actionHref: "/contact"
  },
  {
    title: "Careers",
    description:
      "For designers, developers, and marketers who want to help ship focused digital products quickly.",
    actionLabel: "See open roles",
    actionHref: "/join"
  }
];
