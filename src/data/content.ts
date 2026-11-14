import { Compass, Wrench, Cpu, RefreshCcw, Search, Map, Code2, Rocket, type LucideIcon } from "lucide-react";

export const principles: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Purpose-Driven Thinking", text: "We begin by understanding the problem before deciding on the technology.", icon: Compass },
  { title: "Thoughtful Engineering", text: "We prioritize functionality, maintainability, usability and quality.", icon: Wrench },
  { title: "Modern Technology", text: "We explore and apply appropriate technologies to deliver practical solutions.", icon: Cpu },
  { title: "Continuous Improvement", text: "We believe great digital products evolve through testing, learning and refinement.", icon: RefreshCcw },
];

export const processSteps: { title: string; text: string; icon: LucideIcon; points: string[] }[] = [
  { title: "Discover", text: "Understand business goals, requirements, users and challenges.", icon: Search, points: ["Goals & constraints", "User needs", "Success criteria"] },
  { title: "Strategize", text: "Plan the solution, architecture, functionality and experience.", icon: Map, points: ["Scope & priorities", "Architecture", "Experience design"] },
  { title: "Develop", text: "Design, engineer, integrate and test the product.", icon: Code2, points: ["Iterative builds", "Integrations", "Quality testing"] },
  { title: "Deliver", text: "Deploy, refine and support the digital solution.", icon: Rocket, points: ["Launch", "Refinement", "Ongoing support"] },
];

export const coreValues = [
  { title: "Innovation", text: "Exploring better ways to solve problems, not just newer ones." },
  { title: "Integrity", text: "Honest advice, transparent communication and realistic commitments." },
  { title: "Quality", text: "Careful work that is reliable, maintainable and pleasant to use." },
  { title: "Collaboration", text: "Building alongside the people who know the business best." },
  { title: "Continuous Learning", text: "Staying curious and improving our craft with every project." },
  { title: "Practical Thinking", text: "Choosing solutions that fit the real need, budget and timeline." },
  { title: "Customer Focus", text: "Measuring success by the value delivered to the people we serve." },
];
