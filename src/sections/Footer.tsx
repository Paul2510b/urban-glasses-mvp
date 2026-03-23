import React from 'react';
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon, PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from '@/components/icons';
import { companyInfo, footerLinks } from '@/data';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black pt-16 lg:pt-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-8 pb-12 lg:pb-16">
          {/* Column 1 - Brand */}
          <div>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-block mb-6">
              <span className="font-serif text-3xl italic text-white">
                Urban<span className="text-[#D4AF37]">.</span>Glasses
              </span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-8">
              La óptica digital premium de Colombia. Marcas originales, asesoría personalizada y entrega en tu puerta.
            </p>
            
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { icon: InstagramIcon, href: 'https://www.instagram.com/urban_glasses_26/' },
                { icon: FacebookIcon, href: '#' },
                { icon: TikTokIcon, href: '#' },
                { icon: WhatsAppIcon, href: `https://wa.me/${companyInfo.whatsappNumber}` },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Store */}
          <div>
            <h4 className="label-text text-white/20 mb-6">Tienda</h4>
            <ul className="space-y-3">
              {footerLinks.store.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('catalogo')}
                    className="text-sm text-white/60 hover:text-[#D4AF37] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Info */}
          <div>
            <h4 className="label-text text-white/20 mb-6">Información</h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => link.includes('FAQ') ? scrollToSection('faq') : scrollToSection('catalogo')}
                    className="text-sm text-white/60 hover:text-[#D4AF37] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="label-text text-white/20 mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-white/10 rounded-sm text-[#D4AF37]">
                  <PhoneIcon size={14} />
                </div>
                <div>
                  <span className="text-xs text-white/40 block">WhatsApp</span>
                  <a 
                    href={`https://wa.me/${companyInfo.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {companyInfo.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-white/10 rounded-sm text-[#D4AF37]">
                  <MailIcon size={14} />
                </div>
                <div>
                  <span className="text-xs text-white/40 block">Email</span>
                  <a 
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-white/10 rounded-sm text-[#D4AF37]">
                  <MapPinIcon size={14} />
                </div>
                <div>
                  <span className="text-xs text-white/40 block">Ciudad</span>
                  <span className="text-sm text-white">{companyInfo.location}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-white/10 rounded-sm text-[#D4AF37]">
                  <ClockIcon size={14} />
                </div>
                <div>
                  <span className="text-xs text-white/40 block">Horario</span>
                  <span className="text-sm text-white">{companyInfo.hours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.04] py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Urban Glasses Colombia
          </p>
          
          <div className="flex flex-wrap gap-4 lg:gap-6">
            {['Privacidad', 'Términos', 'Devoluciones', 'Envíos'].map((link) => (
              <button
                key={link}
                onClick={() => {
                  if (link === 'Garantía y Devoluciones' || link === 'Devoluciones') {
                    // TODO: Implementar despliegue de PDF con políticas de garantía al hacer clic
                  }
                  scrollToSection('faq');
                }}
                className="text-xs text-white/20 hover:text-white/40 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ug-blink" />
            <span className="text-xs text-white/20">Distribuidores Autorizados Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
