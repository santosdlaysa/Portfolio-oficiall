import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a 
          href="#home" 
          className={`flex items-center gap-2 text-xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-primary-900' : 'text-white'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
            <Sparkles size={16} className="text-white" />
          </div>
          {PERSONAL_INFO.name.split(' ')[0]}
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {NAVIGATION.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`relative font-medium transition-colors duration-300 hover:scale-105 px-3 py-2 rounded-full ${
                  isScrolled 
                    ? 'text-primary-700 hover:text-primary-900 hover:bg-primary-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          
          {/* CTA Button */}
          <li>
            <Button
              as="a"
              href="#contatos"
              variant={isScrolled ? 'primary' : 'secondary'}
              size="sm"
              className={`${isScrolled ? '' : 'bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-900'}`}
            >
              Contato
            </Button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-full transition-colors ${
            isScrolled 
              ? 'text-primary-900 hover:bg-primary-100' 
              : 'text-white hover:bg-white/10'
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40" onClick={closeMenu} />
        )}

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 md:hidden z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6">
            {/* Mobile header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <span className="text-lg font-bold text-primary-900">
                  {PERSONAL_INFO.name.split(' ')[0]}
                </span>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-full hover:bg-primary-100 text-primary-900"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile navigation */}
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block w-full px-4 py-3 text-primary-700 hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-colors font-medium"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-8 pt-8 border-t border-primary-200">
              <Button
                as="a"
                href="#contatos"
                variant="primary"
                size="lg"
                className="w-full"
                onClick={closeMenu}
              >
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}