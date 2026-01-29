import { Heart, Code2, Coffee, Sparkles, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/utils/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-primary-900 via-purple-900 to-primary-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-5" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />

      {/* Animated gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_auto] animate-gradient" />

      <div className="relative z-10 py-12">
        <div className="container-center section-padding">
          <div className="text-center">

            {/* Profile with name */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                {/* Photo */}
                <div className="relative p-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-white/20"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full p-1.5">
                  <Code2 size={12} className="text-white" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-purple-300 text-sm flex items-center justify-center gap-2">
                  <Sparkles size={14} />
                  {PERSONAL_INFO.role}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative max-w-md mx-auto mb-8">
              <div className="absolute -left-4 -top-2 text-4xl text-purple-500/30">"</div>
              <p className="text-white/80 text-lg italic px-6">
                Transformando ideias em código, um projeto por vez
              </p>
              <div className="absolute -right-4 -bottom-2 text-4xl text-purple-500/30">"</div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-32" />
              <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
                <Coffee size={18} className="text-yellow-400" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-32" />
            </div>

            {/* Made with love */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <span className="text-white/70">Desenvolvido com</span>
              <Heart size={16} className="text-red-400 animate-pulse" fill="currentColor" />
              <span className="text-white/70">por</span>
              <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name.split(' ')[0]}
              </span>
            </div>

            {/* Tech stack */}
            <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
              {['React', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-white/40 text-sm">
              © {currentYear} {PERSONAL_INFO.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 p-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}