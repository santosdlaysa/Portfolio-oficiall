import { Download, Sparkles, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '@/utils/constants';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-mesh opacity-20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl animate-float animation-delay-200" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-600/20 rounded-full blur-lg animate-float animation-delay-500" />

      <div className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="container-center py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Text Content */}
            <div className="flex-1 max-w-3xl text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-4">
                <Sparkles size={16} className="text-yellow-300" />
                Disponível para projetos
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
                <span className="block">
                  Oi 🙋‍♀️, meu nome é{' '}
                  <span className="bg-gradient-secondary bg-clip-text text-transparent">
                    {PERSONAL_INFO.name}
                  </span>
                </span>
                <span className="block mt-2">
                  {PERSONAL_INFO.role}
                </span>
              </h1>
              
              {/* Bio */}
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-6 max-w-2xl">
                {PERSONAL_INFO.bio}
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:scale-105"
                >
                  <Download size={20} />
                  Baixar CV
                </a>
                
                <a
                  href="#contatos"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Entre em Contato
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0 relative">
              
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-3xl opacity-30 scale-110 animate-pulse-slow" />
              
              {/* Main image container */}
              <div className="relative p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl">
                <div className="relative">
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-primary p-2">
                    <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm" />
                  </div>
                  
                  {/* Profile image */}
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl animate-float"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/320x320/667eea/ffffff?text=${encodeURIComponent(PERSONAL_INFO.name)}`;
                    }}
                  />
                  
                  {/* Status indicator */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-primary-800">Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs font-medium">Scroll para explorar</span>
              <ArrowDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}