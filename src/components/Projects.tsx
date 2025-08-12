import { Zap } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative engineering solutions and ongoing development initiatives.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-12 text-center shadow-sm">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto flex items-center justify-center mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Projects Coming Soon</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              I am currently working on several exciting projects in the areas of renewable energy systems, 
              smart grid technologies, and automated control systems. These projects will showcase practical 
              applications of electrical and electronics engineering principles.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Stay tuned for updates on innovative solutions in power systems optimization, 
              energy-efficient designs, and sustainable engineering practices. Each project will 
              demonstrate real-world applications and contribute to advancing electrical engineering solutions.
            </p>
            <div className="inline-flex items-center text-blue-600 font-semibold">
              <span>Check back soon for project updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
