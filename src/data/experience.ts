export type Experience = {
  company: string
  title: string
  type: "Full-time" | "Internship" | "Trainee" | "Lead"
  logo: string | null
  from: Date
  to: Date | null
  descriptionList: string[]
  skills: string[]
  isExpanded: boolean
}

export const EXPERIENCE: Experience[] = [
  {
    title: "Full Stack Intern",
    company: "ApexPlanet Software Pvt Ltd",
    logo: "/assets/company/apexplanet.svg",
    isExpanded: false,
    descriptionList: [
      "Built scalable backend systems and REST APIs.",
    ],
    from: new Date("2025-10-01"),
    to: null,
    type: "Internship",
    skills: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Full Stack Trainee",
    company: "Pantech Solutions Pvt. Ltd.",
    logo: "/assets/company/pantech.svg",
    isExpanded: false,
    descriptionList: [
      "Full-stack development training and mentorship.",
    ],
    from: new Date("2025-09-01"),
    to: null,
    type: "Trainee",
    skills: ["React", "Node.js", "Web Development"],
  },
  {
    title: "Web Development Intern",
    company: "Shadowfox Technologies",
    logo: "/assets/company/shadowfox.svg",
    isExpanded: false,
    descriptionList: [
      "Developed responsive web applications.",
    ],
    from: new Date("2025-09-01"),
    to: new Date("2025-10-31"),
    type: "Internship",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Data Analytics Intern",
    company: "Cognifyz Technologies",
    logo: "/assets/company/cognifyz.svg",
    isExpanded: false,
    descriptionList: [
      "Performed data analysis and visualization.",
    ],
    from: new Date("2024-05-01"),
    to: new Date("2024-08-31"),
    type: "Internship",
    skills: ["Data Analysis", "Python", "Visualization"],
  },
  {
    title: "Event & Operations Lead",
    company: "GFG Campus body UIT",
    logo: "/assets/company/gfg.svg",
    isExpanded: false,
    descriptionList: [
      "Leading events and community operations.",
    ],
    from: new Date("2023-01-01"), // using a placeholder date as "Ongoing"
    to: null,
    type: "Lead",
    skills: ["Leadership", "Community Building"],
  }
]
