import ProjectCard from "../_components/projectCard";

export default function Projects() {
  return (
    <main className="flex flex-col gap-8 p-8 w-full bg-primary">
      <h1 className="font-bold text-2xl text-text">My Projects</h1>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </main>
  );
}