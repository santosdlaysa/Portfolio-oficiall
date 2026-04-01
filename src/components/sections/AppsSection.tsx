import { ExternalLink, Smartphone } from 'lucide-react';
import { APPS } from '@/utils/constants';

export function AppsSection() {
  return (
    <section id="aplicativos" className="relative py-20 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-purple-950" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl" />

      <div className="relative z-10 container-center section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Smartphone size={16} />
            Aplicativos Mobile
          </div>

          <h2 className="heading-lg text-white mb-6">
            Meus aplicativos{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              mobile
            </span>
          </h2>

          <p className="body-lg text-white/60 max-w-2xl mx-auto">
            Aplicativos que desenvolvi para dispositivos móveis, disponíveis nas lojas oficiais.
          </p>
        </div>

        {/* App Showcases */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {APPS.map((app) => (
            <div
              key={app.id}
              className="flex flex-col sm:flex-row items-center gap-8"
            >
              {/* Phone Mockup */}
              <div className="flex-shrink-0 relative">
                {/* Glow behind phone */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
                </div>

                {/* Phone frame */}
                <div className="relative w-[200px] h-[400px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-[8px] shadow-2xl shadow-purple-500/20">
                  {/* Inner bezel */}
                  <div className="relative w-full h-full bg-black rounded-[2rem] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-2xl z-10" />

                    {/* App screenshot */}
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/200x400/667eea/ffffff?text=${encodeURIComponent(app.title)}`;
                      }}
                    />
                  </div>

                  {/* Home indicator */}
                  <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full" />
                </div>
              </div>

              {/* App Info */}
              <div className="flex-1 text-center sm:text-left">
                {/* Platform badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-4">
                  <Smartphone size={14} className="text-purple-400" />
                  <span className="text-white/80 text-sm font-medium">{app.platform}</span>
                </div>

                <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
                  {app.icon && (
                    <img
                      src={app.icon}
                      alt={`${app.title} icon`}
                      className="w-12 h-12 rounded-2xl shadow-lg"
                    />
                  )}
                  <h3 className="text-2xl font-bold text-white">
                    {app.title}
                  </h3>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {app.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5 justify-center sm:justify-start">
                  {app.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* App Store Button */}
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary-900 px-4 py-2.5 rounded-xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 text-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <span className="block text-xs opacity-70">Disponível na</span>
                    <span className="block text-sm font-bold -mt-0.5">App Store</span>
                  </div>
                  <ExternalLink size={14} className="ml-1 opacity-50" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
