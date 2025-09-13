import { ExternalLink, Mail, MessageCircle, Coffee } from 'lucide-react';
import { PERSONAL_INFO } from '@/utils/constants';

export function ContactSection() {
  return (
    <section id="contatos" className="relative py-16 bg-gradient-to-br from-primary-900 via-purple-900 to-primary-800">
      <div className="container-center section-padding">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-6">
            <MessageCircle size={16} />
            Vamos conversar
          </div>
          
          <h2 className="heading-lg text-white mb-6">
            Entre em{' '}
            <span className="text-gradient bg-gradient-secondary bg-clip-text text-transparent">contato</span>{' '}
            <span className="inline-block">💻</span>
          </h2>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
            Estou sempre aberta a novas oportunidades e projetos interessantes. 
            Vamos criar algo incrível juntos!
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PERSONAL_INFO.socialLinks.map((social) => (
            <div
              key={social.name}
              className="group p-8 text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-8 h-8 brightness-0 invert"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {social.name}
                </h3>
                
                <p className="text-white/70 text-sm mb-6">
                  {social.name === 'LinkedIn' && 'Conecte-se comigo profissionalmente'}
                  {social.name === 'GitHub' && 'Veja meus projetos e código'}
                  {social.name === 'Instagram' && 'Acompanhe minha jornada'}
                </p>
                
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary-900 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-300 font-semibold text-sm"
                >
                  <ExternalLink size={16} />
                  Visitar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Coffee size={32} className="text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">
                Vamos tomar um café?
              </h3>
            </div>
            
            <p className="text-white/80 mb-8 max-w-md">
              Sempre disponível para discutir projetos, oportunidades ou apenas bater um papo sobre tecnologia!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contato@laysadiniz.dev"
                className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 font-semibold"
              >
                <Mail size={20} />
                Enviar Email
              </a>
              
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300 font-semibold"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center items-center mt-8 space-x-8 opacity-50">
          <div className="w-20 h-0.5 bg-gradient-primary" />
          <div className="w-3 h-3 rounded-full bg-gradient-primary animate-pulse" />
          <div className="w-20 h-0.5 bg-gradient-primary" />
        </div>
      </div>
    </section>
  );
}