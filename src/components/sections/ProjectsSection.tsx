import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/utils/constants';

export function ProjectsSection() {

  return (
    <section id="projetos" className="relative py-12 bg-gradient-to-br from-primary-50 via-white to-purple-50">
      <div className="container-center section-padding">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>💼</span>
            Portfolio
          </div>
          
          <h2 className="heading-lg text-primary-900 mb-6">
            Meus projetos pessoais{' '}
            <span className="text-gradient bg-gradient-primary bg-clip-text text-transparent">🚀</span>
          </h2>
          
          <p className="body-lg text-primary-600 max-w-3xl mx-auto">
            No decorrer dos meus estudos desenvolvi alguns projetos para aplicar conhecimentos práticos, 
            desde interfaces simples até aplicações mais complexas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x200/667eea/ffffff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute top-4 right-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-primary-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-xl hover:scale-105 transition-all duration-300 font-semibold text-sm"
                >
                  <ExternalLink size={16} />
                  Ver Projeto
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/santosdlaysa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-900 text-white px-6 py-3 rounded-xl hover:bg-primary-800 transition-colors duration-300 font-semibold"
          >
            Ver mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}