'use client'

import { useEffect, useState } from "react";
import { ProjectCardData } from "../app/_components/projectCard";
import Image from "next/image";
import { NextIcon } from "./icons/nextIcon";
import { CrossIcon } from "./icons/crossIcon";

type ProjectModalProps = {
  project: ProjectCardData | null;
  onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project!.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project!.images.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project?.images) return;

      switch (e.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "Escape":
          onClose();
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed z-[99] inset-0 flex flex-col w-screen h-screen bg-primary/80 backdrop-blur-xs"
      // onClick={onClose}
    >
      <div className="flex justify-between items-center p-6 w-full text-text border-b border-border">
        <div className="flex-1 flex flex-col gap-1 min-w-0">
          <h3 className="font-semibold text-lg truncate">{project.title}</h3>
          <span className="text-xs text-text-sub">
            {project.type} • {project.date}
          </span>
        </div>

        <h3 className="flex-1 text-center">
          {currentIndex + 1} / {project.images.length}
        </h3>

        <div className="flex-1 flex justify-end">
          <button
            className="p-3 hover:bg-hover rounded-full cursor-pointer transition-colors duration-150"
            onClick={onClose}
          >
            <CrossIcon size={24} />
          </button>
        </div>
      </div>

      <div className="flex w-full h-full text-text">
        <button
          className="px-6 h-full hover:bg-hover rotate-180 transition-colors duration-150 cursor-pointer"
          onClick={prevImage}
        >
          <NextIcon size={24} />
        </button>

        <div className="relative flex justify-center items-center p-8 w-full h-full scale-90">
          <Image
            src={project.images[currentIndex]}
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <button
          className="px-6 h-full hover:bg-hover transition-colors duration-150 cursor-pointer"
          onClick={nextImage}
        >
          <NextIcon size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
