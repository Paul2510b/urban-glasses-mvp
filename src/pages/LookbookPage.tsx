import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const campaigns = [
  {
    id: 'bogota',
    title: 'Distrito Financiero',
    location: 'BOGOTÁ, D.C.',
    description: 'Entre la niebla y la arrolladora modernidad, Bogotá impone un ritmo de clase mundial. La arquitectura de cristal y ladrillo es el telón de fondo perfecto para el lujo de alta velocidad corporativo.',
    image: '/generated/campana_bogota.png',
    productId: 'ug-001',
    productName: 'Aura Titanium'
  },
  {
    id: 'cartagena',
    title: 'Ocaso Amurallado',
    location: 'CARTAGENA DE INDIAS',
    description: 'El realismo mágico despierta en las murallas bañadas por el atardecer del Caribe. Las calles coloniales vibran con un calor tropical donde la seda y la historia bailan juntas hasta el anochecer.',
    image: '/generated/campana_cartagena.png',
    productId: 'ug-010',
    productName: 'Tortoiseshell Amber'
  },
  {
    id: 'medellin',
    title: 'Primavera Única',
    location: 'MEDELLÍN, ANTIOQUIA',
    description: 'La eterna primavera flota en las brisas cálidas que suben por los cerros. Una ciudad vanguardista, repleta de terrazas exuberantes que redefinen el lujo casual y celebran la vibra cosmopolita.',
    image: '/generated/campana_medellin.png',
    productId: 'ug-008',
    productName: 'Sapphire Horizon'
  },
  {
    id: 'cocora',
    title: 'Aura Mística',
    location: 'VALLE DEL COCORA, QUINDÍO',
    description: 'Bajo la sombra de las imponentes palmas de cera, la bruma andina revela la grandeza intocable de Colombia. Un santuario natural colosal, reservado para el diseño aerodinámico extremo.',
    image: '/generated/campana_cocora.png',
    productId: 'ug-015',
    productName: 'Azure Runner'
  },
  {
    id: 'barichara',
    title: 'Herencia Colonial',
    location: 'BARICHARA, SANTANDER',
    description: 'El tiempo se detiene sobre las calles de piedra amarilla que capturan el oro del sol santandereano. Un rincón patrimonial de serenidad colonial donde el lino blanco brilla con luz propia.',
    image: '/generated/campana_barichara.png',
    productId: 'ug-012',
    productName: 'Ivy Browline'
  },
  {
    id: 'sanandres',
    title: 'Resort Elegance',
    location: 'SAN ANDRÉS ISLAS',
    description: 'El asombroso Mar de los Siete Colores deslumbrando bajo cielos despejados. Una joya caribeña de arrecifes y brisa salina que eleva el estilo de yate a un estándar impecable y deslumbrante.',
    image: '/generated/campana_sanandres.png',
    productId: 'ug-014',
    productName: 'Silver Aviator Lite'
  },
  {
    id: 'leyva',
    title: 'Gala Nocturna',
    location: 'VILLA DE LEYVA, BOYACÁ',
    description: 'La historia milenaria se erige bajo el frío dramático de la Plaza Mayor más grande del país. Noches boyacenses de gala arquitectónica, arcos antiguos y secretos custodiados por el viento andino.',
    image: '/generated/campana_leyva.png',
    productId: 'ug-016',
    productName: 'Pearl Cat-Eye'
  }
];

const LookbookPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0a0a0c] text-white min-h-screen">
      {/* Intro Header */}
      <div className="pt-32 pb-8 px-6 lg:px-12 max-w-[1440px] mx-auto text-center reveal-on-scroll-lookbook">
        <span className="font-accent text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] mb-4 block">Editorial Visual</span>
        <h1 className="font-serif text-5xl lg:text-7xl font-light tracking-tight mb-6">Campañas</h1>
        <p className="font-sans text-white/50 text-base max-w-2xl mx-auto">
          Un recorrido estético por siete locaciones vibrantes de Colombia, donde nuestras firmas de lujo se fusionan con la moda, la arquitectura y los paisajes naturales.
        </p>
      </div>

      {/* Editorial Campaign Sections */}
      <div className="w-full flex flex-col mt-12 pb-24">
        {campaigns.map((camp, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={camp.id} className="relative w-full min-h-[90vh] flex items-center justify-center py-20 mb-8 overflow-hidden group">
              {/* Background Ambient Glow */}
              <div className="absolute inset-0 w-full h-full select-none -z-10 bg-[#060608]">
                <img 
                  src={camp.image} 
                  alt=""
                  className="w-full h-full object-cover opacity-[0.06] group-hover:opacity-[0.12] scale-110 blur-3xl transition-opacity duration-1000"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              
              <div className={`relative z-10 max-w-[1440px] w-full mx-auto px-6 lg:px-12 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                
                {/* Photo Gallery Side - No cropping, native ratio preservation */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-[650px] aspect-square rounded-sm group/photo reveal-on-scroll-lookbook">
                    {/* Architectural Frame Offset */}
                    <div className="absolute inset-0 border border-white/20 translate-x-4 translate-y-4 group-hover/photo:translate-x-6 group-hover/photo:translate-y-6 transition-transform duration-[800ms] pointer-events-none"></div>
                    
                    {/* The 8K Image Native Aspect Square */}
                    <div className="absolute inset-0 z-10 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)]">
                      <img 
                        src={camp.image} 
                        alt={camp.title}
                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover/photo:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Typography Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center reveal-on-scroll-lookbook">
                  <div className="flex items-center gap-2 mb-6 text-[#D4AF37]">
                    <MapPin size={16} strokeWidth={1.5} />
                    <span className="font-accent text-[10px] uppercase tracking-[0.3em]">{camp.location}</span>
                  </div>
                  
                  <h2 className="font-headline text-5xl md:text-6xl lg:text-[5.5rem] italic tracking-tighter text-white mb-8 leading-[1]">
                    {camp.title}
                  </h2>
                  
                  <div className="w-16 h-[1px] bg-[#D4AF37] mb-8 shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
                  
                  <p className="font-sans text-lg text-white/70 leading-[1.8] mb-12 max-w-lg font-light">
                    {camp.description}
                  </p>
                  
                  <button 
                    onClick={() => navigate(`/producto/${camp.productId}`)}
                    className="bg-transparent border border-white/30 text-white px-8 py-5 flex items-center justify-start gap-4 font-accent text-[10px] tracking-[0.25em] uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#09090b] transition-all duration-500 w-max group/btn"
                  >
                    <span className="tracking-widest flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                      VER MODELO <span className="font-bold border-b border-[#D4AF37] group-hover/btn:border-[#09090b] leading-none pb-0.5 transition-colors">{camp.productName}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 duration-300" />
                  </button>
                </div>

              </div>
            </section>
          );
        })}
      </div>

    </div>
  );
};

export default LookbookPage;
