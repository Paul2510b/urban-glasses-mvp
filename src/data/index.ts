import type { Product, Testimonial, FAQItem, Benefit, ProcessStep, LookbookItem } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    brand: 'Ray-Ban',
    model: 'RB3025 Aviator Classic',
    price: 489000,
    image: '/product-1.jpg',
    category: 'Gafas de Sol',
    description: 'El icono que se convirtió en leyenda. Las Aviator Classic son el modelo que dio inicio a todo.',
    tags: ['nuevo']
  },
  {
    id: '2',
    brand: 'Lacoste',
    model: 'L881 Titanium',
    price: 620000,
    image: '/product-2.jpg',
    category: 'Monturas Ópticas',
    description: 'Montura de titanio ultraligera con el icónico cocodrilo francés.',
  },
  {
    id: '3',
    brand: 'Wonder',
    model: 'WG-2024 Urban',
    price: 345000,
    compareAtPrice: 420000,
    image: '/product-3.jpg',
    category: 'Gafas de Sol',
    description: 'Diseño urbano contemporáneo para el espíritu aventurero.',
    tags: ['sale']
  },
  {
    id: '4',
    brand: 'Ocho y Medio',
    model: 'OM Classic Round',
    price: 580000,
    image: '/product-4.jpg',
    category: 'Monturas Ópticas',
    description: 'Estilo vintage atemporal con acabados artesanales italianos.',
  },
  {
    id: '5',
    brand: 'Oakley',
    model: 'OO9102 Holbrook',
    price: 720000,
    image: '/product-5.jpg',
    category: 'Sport',
    description: 'Tecnología Prizm™ para una visión nítima en cualquier condición.',
  },
  {
    id: '6',
    brand: 'Carrera',
    model: 'C79 Stellaire',
    price: 890000,
    compareAtPrice: 1050000,
    image: '/product-6.jpg',
    category: 'Gafas de Sol',
    description: 'Elegancia francesa con un toque de audacia moderna.',
    tags: ['sale']
  },
  {
    id: '7',
    brand: 'Tom Ford',
    model: 'TF5634-B',
    price: 1250000,
    image: '/product-7.jpg',
    category: 'Monturas Ópticas',
    description: 'El lujo definitivo. Diseño impecable y materiales de élite.',
  },
  {
    id: '8',
    brand: 'Persol',
    model: 'PO3007V Meflecto',
    price: 980000,
    image: '/product-8.jpg',
    category: 'Monturas Ópticas',
    description: 'Artesanía italiana desde 1917. El legendario Meflecto en las varillas.',
  },
];

export const brands = [
  'Ray-Ban', 'Lacoste', 'Wonder', 'Ocho y Medio', 'Oakley', 'Carrera',
  'Tom Ford', 'Persol', 'Prada', 'Gucci', 'Versace', 'Emporio Armani',
  'Dolce & Gabbana', 'Carolina Herrera', 'Hugo Boss', 'Michael Kors'
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Santiago Morales',
    city: 'Bogotá',
    product: 'Ray-Ban RB3025',
    rating: 5,
    text: 'Llevaba meses buscando Ray-Ban Aviator originales a buen precio. En Urban Glasses los encontré con garantía de 12 meses y llegaron en menos de 24 horas. El servicio por WhatsApp es impecable — me respondieron todas las dudas en minutos.',
    initial: 'S'
  },
  {
    id: '2',
    name: 'Valentina Ospina',
    city: 'Medellín',
    product: 'Lacoste L881',
    rating: 5,
    text: 'Pedí los Lacoste con mis lentes de fórmula progresivos. La precisión fue perfecta y el empaque llegó impecable con estuche original incluido. Definitivamente Urban Glasses es mi óptica de confianza.',
    initial: 'V'
  },
  {
    id: '3',
    name: 'Carlos Pedraza',
    city: 'Cali',
    product: 'Oakley + Wonder + Ray-Ban',
    rating: 5,
    text: 'Compré 3 pares para toda la familia. El trato fue personalísimo, como si fuéramos clientes VIP. La garantía es real — reemplazaron una patilla sin costo ni discusión. Eso no pasa en cualquier lado.',
    initial: 'C'
  },
  {
    id: '4',
    name: 'Laura Jiménez',
    city: 'Bogotá Norte',
    product: 'Carrera C79',
    rating: 5,
    text: 'Pagué online un miércoles y el pedido llegó esa misma tarde. El estuche premium, el paño y el spray de limpieza muestran el nivel de detalle. Volvería a comprar sin pensarlo dos veces.',
    initial: 'L'
  },
  {
    id: '5',
    name: 'Andrés Vargas',
    city: 'Bucaramanga',
    product: 'Tom Ford TF5634',
    rating: 5,
    text: 'Para mis lentes progresivos me pidieron la fórmula completa. Notaron que una medida estaba mal y me avisaron antes de procesar. Ese nivel de cuidado vale oro. No lo consigues en ninguna óptica física.',
    initial: 'A'
  },
  {
    id: '6',
    name: 'Marcela Rueda',
    city: 'Barranquilla',
    product: 'Cliente recurrente',
    rating: 5,
    text: 'Ya son mis terceras gafas con Urban Glasses. El catálogo crece constantemente, siempre encuentro lo que busco y los precios son imbatibles para ser productos 100% originales con garantía.',
    initial: 'M'
  },
];

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: '¿Los productos de Urban Glasses son originales?',
    answer: 'Sí, sin excepción. Somos curadores y distribuidores de óptica de alta gama. Cada pieza que ofrecemos proviene de canales oficiales garantizando su procedencia e integridad. Nunca transigimos con importaciones dudosas; la calidad y el respaldo oficial son innegociables en nuestra boutique.'
  },
  {
    id: '2',
    question: '¿Cómo funciona exactamente la garantía de 12 meses?',
    answer: 'La garantía cubre defectos de fabricación: deformación del armazón, desprendimiento del recubrimiento, bisagras defectuosas, o cualquier falla que no sea causada por uso inadecuado o accidente. Si algo falla, te pedimos que nos envíes las gafas (cubrimos el flete de retorno en Bogotá), las evaluamos y las reemplazamos o reparamos sin cobro. El proceso tarda máximo 5 días hábiles.'
  },
  {
    id: '3',
    question: '¿Puedo pedir gafas con mis lentes de fórmula óptica?',
    answer: 'Sí, es uno de nuestros servicios más solicitados. Envíanos por WhatsApp tu fórmula óptica actualizada (con: esfera OD/OS, cilindro OD/OS, eje OD/OS, adición si la tienes, y distancia pupilar). Nuestro asesor óptico revisa la prescripción, confirma que sea montable en el armazón que elegiste, y te cotiza el costo de los lentes. El proceso de fabricación tarda entre 3 y 7 días hábiles adicionales.'
  },
  {
    id: '4',
    question: '¿Cuánto demora el envío a Bogotá?',
    answer: 'En Bogotá D.C. hacemos entrega el mismo día si confirmas tu pedido antes de las 2:00pm, o al día hábil siguiente si es después. El envío es completamente gratis. La entrega se hace en moto directamente a tu dirección, en un promedio de 1 a 3 horas desde que confirmamos. Recibirás un mensaje de WhatsApp cuando el mensajero salga.'
  },
  {
    id: '5',
    question: '¿Hacen envíos a todo Colombia?',
    answer: 'Sí, enviamos a todas las ciudades principales y zonas intermedias. Medellín, Cali, Barranquilla, Bucaramanga: 1 a 2 días hábiles. Ciudades intermedias y municipios: 2 a 4 días hábiles. Zonas de difícil acceso: hasta 5 días hábiles. El costo de envío nacional varía según la ciudad — te lo confirmamos por WhatsApp antes de que pagues.'
  },
  {
    id: '6',
    question: '¿Cuáles son los métodos de pago disponibles?',
    answer: 'Aceptamos todos los métodos posibles para que pagues cómodo: transferencia bancaria (Bancolombia, Davivienda, BBVA), Nequi, Daviplata, PSE, tarjeta de crédito/débito Visa o Mastercard, Efecty o Baloto para pagos en efectivo desde cualquier lugar del país, y contra entrega en Bogotá D.C. (solo pagas cuando recibes).'
  },
  {
    id: '7',
    question: '¿Puedo devolver un producto si no me gusta?',
    answer: 'Aceptamos devoluciones dentro de los 5 días calendario siguientes a la recepción si el producto presenta un defecto, si no corresponde a lo que describimos, o si llega en mal estado. No aceptamos devoluciones por cambio de opinión o gusto personal. Para iniciar una devolución, escríbenos por WhatsApp con fotos del producto.'
  },
  {
    id: '8',
    question: '¿Cómo sé qué montura me queda bien si no puedo probármela?',
    answer: 'Este es quizás el mejor servicio que ofrecemos. Envíanos por WhatsApp una foto frontal y una de perfil de tu rostro, y nuestro asesor de moda óptica te recomendará los marcos que mejor van con tu estructura facial. Tenemos entrenamiento en morfología facial y hemos asesorado a más de 500 clientes exitosamente. El servicio es completamente gratis.'
  },
  {
    id: '9',
    question: '¿Las gafas incluyen estuche y accesorios?',
    answer: 'Sí. Los pedidos con montaje de lentes incluyen estuche rígido original de la marca, paño de microfibra y spray limpiador de lentes. Los pedidos de armazones solos incluyen estuche y paño. Todo viene en el empaque original del fabricante, sellado de fábrica.'
  },
  {
    id: '10',
    question: '¿Tienen servicio de ajuste o reparación?',
    answer: 'Para clientes Urban Glasses ofrecemos ajuste básico de forma gratuita: alineación de varillas, ajuste de patillas, reemplazo de tornillos y limpieza profesional. Si tu armazón necesita una reparación mayor, la gestionamos con el servicio técnico autorizado de la marca y te cotizamos sin compromiso.'
  },
];

export const benefits: Benefit[] = [
  {
    id: '1',
    number: '01',
    color: 'gold',
    title: 'Garantía 12 Meses',
    description: 'Todo producto incluye garantía real contra defectos. Reemplazamos sin costo ni preguntas.',
    icon: 'shield'
  },
  {
    id: '2',
    number: '02',
    color: 'silver',
    title: 'Selección de Origen',
    description: 'Boutique oficial. Garantizamos la procedencia e integridad de cada montura en el envío.',
    icon: 'medal'
  },
  {
    id: '3',
    number: '03',
    color: 'gold',
    title: 'Envío Gratis Bogotá',
    description: 'Despacho el mismo día si confirmas antes de las 2pm. Entrega en 1–3 horas en moto.',
    icon: 'package'
  },
  {
    id: '4',
    number: '04',
    color: 'silver',
    title: 'Asesoría Óptica',
    description: 'Envía tu fórmula por WhatsApp. Calculamos tus lentes y cotizamos en menos de 2 horas.',
    icon: 'eye'
  },
  {
    id: '5',
    number: '05',
    color: 'gold',
    title: 'Pago Seguro',
    description: 'Nequi, Daviplata, PSE, tarjeta, transferencia o contra entrega. Tú eliges cómo pagar.',
    icon: 'credit'
  },
  {
    id: '6',
    number: '06',
    color: 'silver',
    title: 'Atención 24/7',
    description: 'WhatsApp siempre activo. Lun–Sáb con respuesta garantizada en menos de 30 minutos.',
    icon: 'chat'
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: '1',
    number: '01',
    color: 'gold',
    title: 'Elige tu montura',
    description: 'Explora 650+ modelos en nuestro catálogo. Filtra por marca, usa el buscador, agrega al carrito o escríbenos por WhatsApp.',
    icon: 'glasses'
  },
  {
    id: '2',
    number: '02',
    color: 'silver',
    title: 'Comparte tu fórmula',
    description: 'Envíanos tu prescripción médica por WhatsApp (OD/OS: esfera, cilindro, eje, adición, D.P.). Cotizamos tus lentes en menos de 2 horas.',
    icon: 'document'
  },
  {
    id: '3',
    number: '03',
    color: 'gold',
    title: 'Recibe en tu puerta',
    description: 'Envío gratis en Bogotá, el mismo día si confirmas antes de las 2pm. A todo Colombia entre 1 y 5 días hábiles.',
    icon: 'home'
  },
];

export const lookbookItems: LookbookItem[] = [
  {
    id: '1',
    category: 'Colección Hombre',
    title: 'Clásicos Renovados',
    image: '/lookbook-1.jpg',
    span: 'large'
  },
  {
    id: '2',
    category: 'Colección Mujer',
    title: 'Feminidad Bold',
    image: '/lookbook-2.jpg',
    span: 'medium'
  },
  {
    id: '3',
    category: 'Gafas de Sol',
    title: 'Protección & Estilo',
    image: '/lookbook-3.jpg',
    span: 'small'
  },
  {
    id: '4',
    category: 'Monturas Ópticas',
    title: 'Claridad con Carácter',
    image: '/lookbook-4.jpg',
    span: 'small'
  },
  {
    id: '5',
    category: 'Sport & Active',
    title: 'Performance Premium',
    image: '/lookbook-5.jpg',
    span: 'small'
  },
];

export const tickerItems = [
  'Marcas 100% Originales',
  'Envío Gratis Bogotá',
  'Asesoría Óptica Personalizada',
  '12 Meses de Garantía',
  'Lentes a Tu Fórmula',
  'Distribuidores Autorizados Colombia',
  'Entrega el Mismo Día',
  '+650 Modelos',
  'Pago Seguro',
  'Contra Entrega Bogotá',
  'Atención Lun–Sáb 8am–8pm',
];

export const footerLinks = {
  store: [
    'Catálogo completo',
    'Gafas de Sol',
    'Monturas Ópticas',
    'Sport & Active',
    'Colección Hombre',
    'Colección Mujer',
    'Novedades',
    'Ofertas y Descuentos',
  ],
  info: [
    'Sobre Urban Glasses',
    'Garantía y Devoluciones',
    'Política de Envíos',
    'Preguntas Frecuentes',
    'Cuidado de tus Gafas',
    'Cómo Enviar tu Fórmula',
    'Blog de Moda Óptica',
  ],
};

export const companyInfo = {
  name: 'Urban Glasses Colombia',
  website: 'urbanglasses.co',
  email: 'info@urbanglassescol.com',
  whatsapp: '+57 302 630 1340',
  whatsappNumber: '573026301340',
  yearFounded: '2022',
  location: 'Bogotá D.C., Colombia',
  hours: 'Lunes a Domingo: 7:00 AM - 10:00 PM',
  catalogSize: '650+',
  responseTime: 'Menos de 30 minutos',
};
