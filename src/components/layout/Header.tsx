import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, ChevronRight } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { NAVIGATION, PERSONAL_INFO } from '@/utils/constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 100], ['rgba(10, 10, 20, 0)', 'rgba(10, 10, 20, 0.8)']);
  const headerBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(24px)']);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.15]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (v) => setIsScrolled(v > 50));
    return unsubscribe;
  }, [scrollY]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: headerBg,
        backdropFilter: headerBlur,
        borderBottom: borderOpacity.get() > 0 ? `1px solid rgba(255, 255, 255, ${borderOpacity.get()})` : 'none',
      }}
    >
      <nav className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <div className={`absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${isScrolled ? 'opacity-40' : 'opacity-60'}`}
              style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff)' }}
            />
            <div className="relative w-10 h-10 rounded-full p-[2px]"
              style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff, #ff00e5)' }}
            >
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full rounded-full object-cover border-2 border-surface-900"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white transition-colors duration-300">
              {PERSONAL_INFO.name.split(' ')[0]}
            </span>
            <span className="text-xs text-neon-cyan/70 transition-colors duration-300 flex items-center gap-1">
              <Code2 size={10} />
              Developer
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 ${
          isScrolled ? 'bg-white/5' : 'bg-white/5 backdrop-blur-sm'
        }`}>
          {NAVIGATION.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white/70 hover:text-neon-cyan group"
            >
              {item.label}
              {/* Neon underline on hover */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-neon-cyan group-hover:w-3/4 transition-all duration-300 shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <MagneticButton
            as="a"
            href="#contatos"
            className="inline-flex items-center gap-1 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/20 hover:shadow-neon-cyan"
          >
            <span className="flex items-center gap-1">
              Contato
              <ChevronRight size={14} />
            </span>
          </MagneticButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2.5 rounded-xl transition-all duration-300 text-white bg-white/10 hover:bg-white/20"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md md:hidden z-40"
              onClick={closeMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-surface-900 to-surface-800 shadow-2xl md:hidden z-50 border-l border-white/10"
            >
              <div className="p-6">
                {/* Mobile header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full blur-md opacity-60"
                        style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff)' }}
                      />
                      <div className="relative w-12 h-12 rounded-full p-[2px]"
                        style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff, #ff00e5)' }}
                      >
                        <img
                          src={PERSONAL_INFO.profileImage}
                          alt={PERSONAL_INFO.name}
                          className="w-full h-full rounded-full object-cover border-2 border-surface-900"
                        />
                      </div>
                    </div>
                    <div>
                      <span className="block text-base font-bold text-white">
                        {PERSONAL_INFO.name.split(' ')[0]}
                      </span>
                      <span className="text-xs text-neon-cyan/70 flex items-center gap-1">
                        <Code2 size={10} />
                        {PERSONAL_INFO.role}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Mobile navigation */}
                <ul className="space-y-2">
                  {NAVIGATION.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        className="flex items-center justify-between w-full px-4 py-3.5 text-white/70 hover:text-neon-cyan hover:bg-white/5 rounded-xl transition-all duration-300 font-medium group"
                        onClick={closeMenu}
                      >
                        {item.label}
                        <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-neon-cyan" />
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href="#contatos"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-surface-900 transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #a855f7, #b44aff)' }}
                    onClick={closeMenu}
                  >
                    Entre em Contato
                  </a>

                  <p className="text-center text-xs text-white/30 mt-4">
                    Veja meus projetos e redes sociais
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
