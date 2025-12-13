import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Portfolio v3",
    blurb:
      "This very site! - a React/Next.js portfolio with Supabase-powered blog, custom Three.js hero animation, and responsive Tailwind layout.",
    role: "Web Developer",
    techStack: "Next.js - React - TypeScript - Tailwind - Supabase - Node",
    href: "https://github.com/josephdoba/portfolio-v3",
  },
  {
    title: "Music In Communities Website",
    blurb:
      "A redesign for an arts non-profit: clearer information architecture, accessible typography, and a streamlined events section for workshops and concerts.",
    role: "Web Developer",
    techStack: "Bandzoogle - HTML/CSS - UI Improvements",
    href: "https://musicincommunities.com/",
  },
    {
    title: "TinyShark (in progress)",
    blurb:
      "A lightweight Rust-based packet capture and inspection tool, built to sharpen my network and systems understanding while I study for Network+.",
    role: "Cyber Security",
    techStack: "Rust - Pcap",
    href: "https://github.com/josephdoba/tinyshark",
  },
  {
    title: "Incident Response Report Capstone",
    blurb:
      "Capstone project for my Cyber Security Diploma from Lighthouse Labs. The project is split up between 3 different submissions required to pass. This repository showcases an Incident Response Report for a fictitious company.",
    role: "Cyber Security",
    techStack: "Wireshark - MITRE ATT&CK - CrowdStrike - NIST",
    href: "https://github.com/josephdoba/IncidentResponseReport",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-blue)]/5">
      <main className="max-w-5xl mx-auto px-6 sm:px-12 py-24 font-sans">
        <section className="mb-12">
          <h1 className="text-3xl sm:text-4xl mb-4 underline decoration-[var(--color-orange-alt)]">
            Projects
          </h1>
        </section>

        <section className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>
      </main>
    </div>
  );
}
