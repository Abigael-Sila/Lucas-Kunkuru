
const Experience = () => {
  const responsibilities = [
    "Collaborated with senior engineers on power system analysis and optimization projects, gaining valuable insights into large-scale electrical infrastructure management.",
    "Participated in energy audit assessments for government facilities, contributing to energy efficiency improvement initiatives and sustainability goals.",
    "Supported renewable energy project evaluations, analyzing feasibility studies and technical specifications for solar and wind power installations.",
    "Assisted in power distribution network planning and maintenance scheduling, contributing to improved grid reliability and performance optimization.",
    "Gained hands-on experience with industry-standard software tools and methodologies used in electrical system design and analysis."
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical experience gained through strategic internships and professional development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Intern - Electrical Engineer</h3>
              <p className="text-blue-100 text-lg">Ministry of Energy, Kenya</p>
              <p className="text-blue-200">Professional Internship Program</p>
            </div>
            
            <div className="p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities & Achievements</h4>
              <div className="space-y-4">
                {responsibilities.map((resp, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">{resp}</p>
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

export default Experience;
