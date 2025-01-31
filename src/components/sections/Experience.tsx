import { experiences } from '../../data/mockData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 min-h-[calc(100vh-4rem)] scroll-margin-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4"
            >
              <div className="bg-gray-100 p-2 rounded-lg">
                <Briefcase className="text-gray-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.position}
                </h3>
                <p className="text-gray-600 mb-2">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;