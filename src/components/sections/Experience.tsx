import { experiences } from '../../data/mockData';
import { Timeline } from '../ui/timeline';

export function Experience() {
  return (
    <section id='experience' className="py-20 bg-gray-50 min-h-[calc(100vh-4rem)] scroll-margin-top">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experiências</h2>
        <Timeline items={experiences} />
      </div>
    </section>
  );
};