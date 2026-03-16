'use client'

import { projectsData } from "@/src/repositories/projectsData";
import ProjectCard, { ProjectCardData } from "../_components/projectCard";
import { useState } from "react";
import ProjectModal from "@/src/components/projectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null);

  return (
    <main className="flex flex-col gap-4 sm:gap-8 p-4 sm:p-8 w-full bg-primary">
      <h1 className="font-bold text-2xl text-text">My Projects</h1>
      {projectsData.map((p, index) => (
        <ProjectCard
          key={index}
          data={p}
          onClick={() => setSelectedProject(p)}
        />
      ))}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}