export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Sol' | 'Óptica' | 'Sport';
  gender: 'Hombre' | 'Mujer' | 'Unisex';
  image: string;
}

export const mockProducts: Product[] = [
  {
    id: 'ug-001',
    name: 'Aura Titanium',
    description: 'Armazones de acetato premium diseñados obsesivamente para la perfección. Bisagras de alta relojería.',
    price: 320000,
    category: 'Óptica',
    gender: 'Hombre',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-002',
    name: 'Eclipse Noir',
    description: 'Bisel forjado en titanio aeroespacial. La reinterpretación moderna de un clásico atemporal.',
    price: 280000,
    category: 'Sol',
    gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-003',
    name: 'Velvet Havana',
    description: 'Cautivadoras piezas geométricas de acetato carey labrado a mano. Definición total para el rostro.',
    price: 250000,
    category: 'Sol',
    gender: 'Mujer',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-004',
    name: 'Lumina Crystal',
    description: 'Montura transparente para una elegancia que desafía la gravedad. Ligereza táctil y visual.',
    price: 450000,
    category: 'Óptica',
    gender: 'Mujer',
    image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-005',
    name: 'Obsidian Shield',
    description: 'La máxima expresión del minimalismo. Armazón ultra ligero en fibra mate y líneas esculpidas.',
    price: 310000,
    category: 'Sport',
    gender: 'Hombre',
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-006',
    name: 'Rose Gold Aurelia',
    description: 'Perfiles finos y afilados revestidos en suave rosa dorado. Una declaración vanguardista y delicada.',
    price: 260000,
    category: 'Óptica',
    gender: 'Mujer',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-007',
    name: 'Alpine Velocity',
    description: 'Protección fotocromática envolvente de gama elite. El visor perfecto para el lujo deportivo radical.',
    price: 420000,
    category: 'Sport',
    gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-008',
    name: 'Sapphire Horizon',
    description: 'Silueta cuadrada retro fusionada con lentes celestes degradados y cristales premium.',
    price: 290000,
    category: 'Sol',
    gender: 'Hombre',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-009',
    name: 'Graphite Edge',
    description: 'Bordes pulidos a diamante en acetato color grafito. Contundente y estéticamente irreprochable.',
    price: 210000,
    category: 'Óptica',
    gender: 'Hombre',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-010',
    name: 'Tortoiseshell Amber',
    description: 'El clásico carey italiano en un volumen cat-eye acentuado que aporta sofisticación instantánea.',
    price: 335000,
    category: 'Sol',
    gender: 'Mujer',
    image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-011',
    name: 'Champagne Geometry',
    description: 'Montura geométrica bañada en tonos champagne translúcidos. Resistencia y flexibilidad total.',
    price: 245000,
    category: 'Óptica',
    gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-012',
    name: 'Ivy Browline',
    description: 'Diseño mixto con puente metálico y cejas marcadas en acetato italiano. Vintage revitalizado.',
    price: 275000,
    category: 'Sol',
    gender: 'Hombre',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-013',
    name: 'Canyon Wayfarer',
    description: 'Inyección de policarbonato ultraliviano con acabado madera clara. Robustez escultural.',
    price: 180000,
    category: 'Sol',
    gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-014',
    name: 'Silver Aviator Lite',
    description: 'El minimalismo llevado al extremo en una montura de aleación plateada de menos de 15 gramos.',
    price: 195000,
    category: 'Sol',
    gender: 'Hombre',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-015',
    name: 'Azure Runner',
    description: 'Lentes polarizados multicapa con curvatura base 8 para ajuste perfecto en actividades intensas.',
    price: 350000,
    category: 'Sport',
    gender: 'Hombre',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ug-016',
    name: 'Pearl Cat-Eye',
    description: 'Acetato perlado y cristales polarizados en tono arena. Radiante y excepcionalmente ligero.',
    price: 290000,
    category: 'Sol',
    gender: 'Mujer',
    image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=800&q=80'
  }
];
