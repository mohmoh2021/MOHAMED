import React from 'react';
import { Project } from '../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-900">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-4">
            <h3 className="text-white text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-300 text-sm mt-1">{project.software.join(' • ')}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}