import { useState, useEffect } from 'react';
import { Menu, X, Code2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { NAVIGATION, PERSONAL_INFO } from '@/utils/constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-2xl border-b border-purple-100/50 shadow-[0_8px_32px_rgba(124,58,237,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* Logo com foto */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 ${isScrolled ? 'opacity-60' : 'opacity-75'}`} />
            <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full rounded-full object-cover border-2 border-white"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`text-sm font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary-900' : 'text-white'
            }`}>
              {PERSONAL_INFO.name.split(' ')[0]}
            </span>
            <span className={`text-xs transition-colors duration-300 flex items-center gap-1 ${
              isScrolled ? 'text-purple-600' : 'text-purple-200'
            }`}>
              <Code2 size={10} />
              Developer
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-100/80'
            : 'bg-white/10 backdrop-blur-sm'
        }`}>
          {NAVIGATION.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'text-primary-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500'
                  : 'text-white/90 hover:text-white hover:bg-white/20'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            as="a"
            href="#contatos"
            size="sm"
            className={`group relative overflow-hidden transition-all duration-300 ${
              isScrolled
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105'
                : 'bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-primary-900'
            }`}
          >
            <span className="relative z-10 flex items-center gap-1">
              Contato
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2.5 rounded-xl transition-all duration-300 ${
            isScrolled
              ? 'text-primary-900 bg-gray-100 hover:bg-purple-100'
              : 'text-white bg-white/10 hover:bg-white/20'
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md md:hidden z-40"
            onClick={closeMenu}
          />
        )}

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-white to-purple-50 shadow-2xl transform transition-transform duration-500 ease-out md:hidden z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6">
            {/* Mobile header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-purple-100">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 blur-md opacity-60" />
                  <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-r from-purple-600 to-pink-500">
                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full rounded-full object-cover border-2 border-white"
                    />
                  </div>
                </div>
                <div>
                  <span className="block text-base font-bold text-primary-900">
                    {PERSONAL_INFO.name.split(' ')[0]}
                  </span>
                  <span className="text-xs text-purple-600 flex items-center gap-1">
                    <Code2 size={10} />
                    {PERSONAL_INFO.role}
                  </span>
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-700 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Mobile navigation */}
            <ul className="space-y-2">
              {NAVIGATION.map((item, index) => (
                <li key={item.href} style={{ animationDelay: `${index * 50}ms` }}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between w-full px-4 py-3.5 text-primary-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 rounded-xl transition-all duration-300 font-medium group"
                    onClick={closeMenu}
                  >
                    {item.label}
                    <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-8 pt-6 border-t border-purple-100">
              <Button
                as="a"
                href="#contatos"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300"
                onClick={closeMenu}
              >
                Entre em Contato
              </Button>

              {/* Social links hint */}
              <p className="text-center text-xs text-primary-400 mt-4">
                Veja meus projetos e redes sociais
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}