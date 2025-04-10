import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'character', 'environment', 'animation', 'commercial'];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const currentProject = projects.find(p => p.id === selectedProject);

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project.id)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 overflow-y-auto"
          >
            <div className="min-h-screen px-4 py-8">
              <div className="max-w-6xl mx-auto">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="fixed top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                  <X size={32} />
                </button>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-3xl font-bold text-white mb-4">{currentProject.title}</h2>
                  
                  {/* Main Image Carousel */}
                  <div className="mb-8">
                    <div className="aspect-video rounded-lg overflow-hidden bg-gray-800">
                      <img
                        src={currentProject.images[0]}
                        alt={currentProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold text-white mb-4">About this project</h3>
                      <p className="text-gray-300 mb-6">{currentProject.description}</p>
                      
                      {/* Additional Images */}
                      <div className="grid grid-cols-2 gap-4">
                        {currentProject.images.slice(1).map((image, index) => (
                          <div key={index} className="aspect-video rounded-lg overflow-hidden bg-gray-800">
                            <img
                              src={image}
                              alt={`${currentProject.title} detail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Project Details</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm text-gray-400">Category</h4>
                            <p className="text-white">{currentProject.category}</p>
                          </div>
                          <div>
                            <h4 className="text-sm text-gray-400">Software Used</h4>
                            <p className="text-white">{currentProject.software.join(', ')}</p>
                          </div>
                          <div>
                            <h4 className="text-sm text-gray-400">Year</h4>
                            <p className="text-white">{currentProject.year}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}