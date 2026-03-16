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
import CareerItem from "./_components/careerItem";
import CareerDisplay from "./_components/careerDisplay";
import { Career } from "../types/careers";
import { careers } from "../repositories/careers";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null);
  const [selected, setSelected] = useState<Career>(careers[0]);
  
  return (
    <main className="flex flex-col bg-primary">
      <div id="about">
        <AboutMe />
      </div>

      <section className="flex flex-col gap-4 sm:gap-8 p-4 sm:p-8 w-full border-t border-b border-border">
        <h1 className="font-semibold text-xl text-text">My Journeys</h1>

        <div
          className="flex flex-col md:flex-row w-full min-h-105 md:min-h-90 rounded-md 
                        border border-border overflow-hidden"
        >
          <div
            className="flex md:flex-col w-full md:w-60 overflow-x-auto 
                          md:overflow-x-visible border-b md:border-b-0
                          md:border-r border-border"
          >
            <div className="flex md:flex-col gap-2 md:gap-0">
              {careers.map((item) => (
                <CareerItem
                  key={item.id}
                  title={item.title}
                  active={selected.id === item.id}
                  onClick={() => setSelected(item)}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 flex items-center p-4 h-full w-full sm:hidden">
            <h1 className="text-text font-semibold">{"Can't Afford Responsive Yet"}</h1>
          </div>

          <div className="flex-1 p-4 hidden sm:block">
            <CareerDisplay career={selected} />
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="skills" className="flex flex-col gap-4 sm:gap-8 p-4 sm:p-8">
        <h1 className="font-semibold text-xl text-text">Core Skills</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 grid-rows-3 gap-4">
          {techStacks.map((tech: TechStackCardData) => (
            <TechStackCard key={tech.label} data={tech} />
          ))}
        </div>
      </section>

      {/* RECENT PROJECTS SECTION */}
      <section className="flex flex-col gap-4 sm:gap-8 p-4 sm:p-8 w-full border-t border-border">
        <div className="flex justify-between items-end w-full">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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
