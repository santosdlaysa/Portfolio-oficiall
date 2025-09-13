import { Heart, Code, Coffee } from 'lucide-react';
import { PERSONAL_INFO } from '@/utils/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-primary-900 via-purple-900 to-primary-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh opacity-5" />
      
      <div className="relative z-10 py-8">
        <div className="container-center section-padding">
          <div className="text-center">
            {/* Logo and name */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <Code size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>

            {/* Quote */}
            <p className="text-white/80 text-lg mb-8 max-w-md mx-auto italic">
              "Transformando ideias em código, um projeto por vez"
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-primary w-20" />
              <Coffee size={20} className="text-yellow-400 animate-pulse" />
              <div className="h-px bg-gradient-primary w-20" />
            </div>

            {/* Made with love */}
            <div className="flex items-center justify-center gap-2 text-white/70 mb-4">
              <span>Desenvolvido com</span>
              <Heart size={16} className="text-red-400 animate-bounce-light" />
              <span>por {PERSONAL_INFO.name.split(' ')[0]}</span>
            </div>

            {/* Copyright */}
            <p className="text-white/50 text-sm">
              © {currentYear} {PERSONAL_INFO.name}. Todos os direitos reservados.
            </p>

            {/* Tech stack */}
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-white/40">
              <span>Feito com React + TypeScript + Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary animated-bg" />
    </footer>
  );
}