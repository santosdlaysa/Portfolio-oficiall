import { Download, Sparkles, ArrowDown, Code2, Briefcase, MapPin } from 'lucide-react';
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
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl animate-float animation-delay-300" />

      <div className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="container-center py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

            {/* Text Content */}
            <div className="flex-1 max-w-3xl text-center lg:text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-5 py-2.5 text-white text-sm font-medium mb-6 shadow-lg shadow-green-500/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Disponível para projetos
              </div>

              {/* Greeting */}
              <p className="text-white/70 text-lg mb-2 flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-2xl">👋</span> Olá, seja bem-vindo(a)!
              </p>

              {/* Name with gradient effect */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="text-white">Eu sou </span>
                <span className="relative">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    {PERSONAL_INFO.name}
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M1 5.5C47 2 153 2 199 5.5" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop stopColor="#a855f7"/>
                        <stop offset="0.5" stopColor="#ec4899"/>
                        <stop offset="1" stopColor="#a855f7"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              {/* Role with icon */}
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Code2 size={18} className="text-purple-400" />
                  <span className="text-white font-semibold">{PERSONAL_INFO.role}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <MapPin size={16} className="text-pink-400" />
                  <span className="text-white/80 text-sm">Brasil</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
                {PERSONAL_INFO.bio}
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-7 py-3.5 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 font-semibold hover:scale-105"
                >
                  <Download size={20} className="group-hover:animate-bounce" />
                  Baixar CV
                </a>

                <a
                  href="#contatos"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/30 hover:bg-white hover:text-primary-900 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <Briefcase size={18} />
                  Entre em Contato
                </a>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">9+</p>
                  <p className="text-white/60 text-sm">Projetos</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">2+</p>
                  <p className="text-white/60 text-sm">Anos Exp.</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-white/60 text-sm">Dedicação</p>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0 relative">

              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full border border-purple-500/20 animate-spin-slow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] lg:w-[360px] lg:h-[360px] rounded-full border border-pink-500/20 animate-spin-slow-reverse" />
              </div>

              {/* Glow effect behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-3xl opacity-40 animate-pulse-slow" />
              </div>

              {/* Main image container */}
              <div className="relative">
                {/* Gradient border */}
                <div className="relative p-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 shadow-2xl shadow-purple-500/30">
                  <div className="p-1 rounded-full bg-white/10 backdrop-blur-sm">
                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt={PERSONAL_INFO.name}
                      className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/320x320/667eea/ffffff?text=${encodeURIComponent(PERSONAL_INFO.name)}`;
                      }}
                    />
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-2 -right-2 flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-xl animate-float">
                  <Sparkles size={16} className="text-yellow-500" />
                  <span className="text-sm font-bold text-primary-900">Criativa</span>
                </div>

                <div className="absolute -bottom-2 -left-2 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full px-4 py-2 shadow-xl animate-float animation-delay-200">
                  <Code2 size={16} className="text-white" />
                  <span className="text-sm font-bold text-white">Dev</span>
                </div>

                {/* Status indicator */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-primary-800">Disponível</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
            <div className="flex flex-col items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-xs font-medium">Scroll</span>
              <ArrowDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}