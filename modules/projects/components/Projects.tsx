'use client';

import { motion } from 'framer-motion';

import { IProjectsItemProps } from '@/common/types/projects';

import ProjectCard from './ProjectCard';

export default function Projects({ projects }: IProjectsItemProps) {
  const fiteredProjects = projects.filter(project => project?.is_show);

  if (fiteredProjects.length === 0) {
    return 'no data';
  }
  return (
    <section className="grid sm:grid-cols-2 gap-5 pt-2">
      {fiteredProjects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </section>
  );
}
