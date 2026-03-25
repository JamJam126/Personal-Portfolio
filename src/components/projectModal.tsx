"use client";

import { useEffect, useState } from "react";
import { ProjectCardData } from "../app/_components/projectCard";
import Image from "next/image";
import { NextIcon } from "./icons/nextIcon";
import { CrossIcon } from "./icons/crossIcon";
import { motion, AnimatePresence } from "framer-motion";

type ProjectModalProps = {
  project: ProjectCardData | null;
  onClose: () => void;
};

const swipeConfidenceThreshold = 5000;

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage(([prev]) => [prev + newDirection, newDirection]);
  };

  const imageIndex = project
    ? ((page % project.images.length) + project.images.length) %
      project.images.length
    : 0;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project?.images) return;

      switch (e.key) {
        case "ArrowRight":
          paginate(1);
          break;
        case "ArrowLeft":
          paginate(-1);
          break;
        case "Escape":
          setPage([0, 0]);
          onClose();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, project]);

  useEffect(() => {
    if (!project) return;

    const originalStyle = window.document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [project]);

  if (!project) return null;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 900 : -900,
      opacity: 0,
    }),
  };

  return (
    <div className="fixed inset-0 z-99 flex flex-col w-screen h-screen bg-primary/80 backdrop-blur-sm">
      <div className="flex justify-between items-center p-4 sm:p-6 w-full border-b border-border text-text">
        <div className="flex flex-col flex-1">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <span className="text-xs text-text-sub">
            {project.type} • {project.date}
          </span>
        </div>

        <h3 className="flex-1 text-center">
          {imageIndex + 1} / {project.images.length}
        </h3>

        <div className="flex-1 flex justify-end">
          <button
            className="p-2 hover:bg-hover rounded-full transition-colors cursor-pointer"
            onClick={() => {
              setPage([0, 0]);
              onClose();
            }}
          >
            <CrossIcon size={24} />
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full h-full overflow-hidden text-text">
        <button
          className="hidden sm:flex absolute left-0 z-20 px-6 hover:bg-hover h-full items-center rotate-180 transition-colors"
          onClick={() => paginate(-1)}
        >
          <NextIcon size={24} />
        </button>

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            className="absolute w-full h-full flex items-center justify-center"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 1000, damping: 50 },
              opacity: { duration: 0 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            dragMomentum={false}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <div className="relative w-full h-80 sm:h-full">
              <Image
                src={project.images[imageIndex]}
                alt={project.title}
                fill
                className="object-contain select-none"
                draggable={false}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className="hidden sm:flex absolute right-0 z-20 px-6 hover:bg-hover h-full items-center transition-colors"
          onClick={() => paginate(1)}
        >
          <NextIcon size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
