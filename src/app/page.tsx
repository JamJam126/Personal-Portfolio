'use client'

import Link from "next/link";
import { RightArrowIcon } from "../components/icons/rightArrowIcon";
import AboutMe from "./_components/aboutMe";
import ProjectCard, { ProjectCardData } from "./_components/projectCard";
import TechStackCard, { TechStackCardData } from "./_components/techStackCard";
import { techStacks } from "../repositories/techStackData";
import { projectsData } from "../repositories/projectsData";
import { useState } from "react";
import ProjectModal from "../components/projectModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null);

  return (
    <main className="flex flex-col bg-primary">
      <AboutMe />

      <div className="w-full border-t border-border"></div>

      {/* TECH STACK SECTION */}
      <section className="flex flex-col gap-8 p-8">
        <h1 className="font-semibold text-xl text-text">Core Skills</h1>
        <div className="grid grid-cols-4 grid-rows-3 gap-3">
          {techStacks.map((tech: TechStackCardData) => (
            <TechStackCard key={tech.label} data={tech} />
          ))}
        </div>
      </section>

      {/* RECENT PROJECTS SECTION */}
      <section className="flex flex-col gap-8 p-8 w-full border-t border-border">
        <div className="flex justify-between w-full">
          <h1 className="font-semibold text-xl text-text">Projects</h1>
          <Link
            className="flex gap-2 text-text-sub group hover:text-text transition-colors"
            href={"/projects"}
          >
            <h3 className="font-medium text-sm">More projects</h3>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              <RightArrowIcon size={20} />
            </span>
          </Link>
        </div>

        <div className="flex gap-4 w-full">
          {projectsData.slice(0, 2).map((p, index) => (
            <ProjectCard
              key={index}
              size="small"
              data={p}
              onClick={() => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
