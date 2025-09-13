import { Code, Palette, Wrench } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { TECHNOLOGIES } from '@/utils/constants';
import { useScrollAnimation } from '@/hooks/useIntersectionObserver';

const categoryIcons = {
  frontend: <Code size={24} />,
  backend: <Palette size={24} />,
  testing: <Wrench size={24} />,
  practices: <Code size={24} />,
  tools: <Wrench size={24} />
};

const categoryColors = {
  frontend: 'from-blue-500 to-purple-600',
  backend: 'from-emerald-500 to-teal-600',
  testing: 'from-orange-500 to-red-600',
  practices: 'from-indigo-500 to-purple-600',
  tools: 'from-green-500 to-emerald-600'
};

export function TechnologiesSection() {
  const sectionRef = useScrollAnimation();
  
  const groupedTechs = TECHNOLOGIES.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof TECHNOLOGIES>);

  return (
    <section id="tecnologias" className="relative py-12 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-accent rounded-full opacity-20 blur-2xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-pulse-slow animation-delay-300" />
      
      <div 
        ref={sectionRef}
        className="container-center px-4"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>⚡</span>
            Stack Tecnológica
          </div>
          
          <h2 className="heading-lg text-primary-900 mb-6">
            Tecnologias que{' '}
            <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">domino</span>{' '}
            <span className="inline-block animate-bounce-light">💻</span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 font-medium">
            Ferramentas e tecnologias que uso para criar experiências digitais incríveis
          </p>
        </div>

        {/* Main tech grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
          {TECHNOLOGIES.map((tech, index) => (
            <Card
              key={tech.name}
              hover
              glow
              className={`group p-4 text-center bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 animation-delay-${index * 100}`}
            >
              <div className="relative">
                {/* Icon container with animated background */}
                <div className="relative w-12 h-12 mx-auto mb-3">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse" />
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="relative w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                  />
                </div>
                
                <h3 className="font-semibold text-primary-800 group-hover:text-purple-600 transition-colors duration-300 text-xs">
                  {tech.name}
                </h3>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
              </div>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}