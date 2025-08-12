import { CheckCircle } from 'lucide-react';

const About = () => {
  const coreCompetencies = [
    'Control Systems', 'Power Systems', 'Electrical Machines',
    'Digital Electronics', 'Analogue Electronics', 'Power Distribution',
    'Power Transmission', 'Energy Audits', 'Renewable Energy', 'System Design'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated electrical and electronics engineer with a strong academic foundation and practical experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Background</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am Lucas Kunkuru, a passionate Electrical and Electronics Engineer with a comprehensive academic 
              background and hands-on experience in various aspects of electrical engineering. My expertise spans 
              across multiple critical areas of the field, making me well-equipped to tackle complex engineering 
              challenges in today's evolving technological landscape.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My engineering journey has been driven by a commitment to innovation and sustainable solutions, 
              particularly in the areas of power systems and renewable energy. I believe in the power of 
              electrical engineering to transform communities and contribute to a more sustainable future.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-3">
                {coreCompetencies.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
