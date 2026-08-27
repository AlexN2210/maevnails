import type { Service, GalleryImage } from '@/types';

export const services: Service[] = [
  {
    id: 'gel',
    name: 'Pose Gel',
    description: 'Extension en gel UV, modelage et finition brillante pour des ongles longs et résistants.',
    price: '45 €',
    icon: 'Sparkles',
  },
  {
    id: 'semi-permanent',
    name: 'Semi-Permanent',
    description: 'Vernis semi-permanent longue tenue, idéal pour un rendu naturel et une brillance parfaite.',
    price: '25 €',
    icon: 'Hand',
  },
  {
    id: 'nail-art',
    name: 'Nail Art',
    description: 'Décorations personnalisées, strass, déco japonaise, effet encapsulé pour un style unique.',
    price: '60 €',
    icon: 'Palette',
  },
  {
    id: 'manucure-russe',
    name: 'Manucure Russe',
    description: 'Manucure russe avec cuticles repoussées et contour parfaitement net, soin complet.',
    price: '35 €',
    icon: 'Brush',
  },
  {
    id: 'renfort',
    name: 'Renfort & Réparation',
    description: 'Renfort d\'ongles cassés, réparation de fissures et gainage pour une longueur durable.',
    price: '30 €',
    icon: 'Shield',
  },
  {
    id: 'depose',
    name: 'Dépose',
    description: 'Dépose de gel ou semi-permanent, soin et préparation des ongles naturels.',
    price: '15 €',
    icon: 'Wrench',
  },
];

export const pricingCategories = [
  {
    name: 'Ongles naturels',
    items: [
      { name: 'Vernis semi-permanent', price: '35 €' },
      { name: 'Vernis semi-permanent (dépose + pose)', price: '40 €' },
      { name: 'Dépose totale semi-permanent', price: '20 €' },
    ],
  },
  {
    name: 'Rallongement',
    items: [
      { name: 'Remplissage gel', price: '45 €' },
      { name: 'Pose complète sur ongles naturels', price: '45 €' },
      { name: 'Pose américaine', price: '50 €' },
      { name: 'Pose complète avec extension', price: '55 €' },
      { name: 'Dépose totale gel', price: '25 €' },
    ],
  },
  {
    name: 'Divers',
    items: [
      { name: 'Dépose extérieure', price: '5 €' },
      { name: 'Réparation ongle', price: '3 €' },
    ],
  },
];

export const bookingServices = pricingCategories.flatMap((category) =>
  category.items.map((item, index) => ({
    id: `${category.name}-${index}`,
    name: item.name,
    price: item.price,
    category: category.name,
  }))
);

export const galleryImages: GalleryImage[] = [
  { id: '1', url: 'https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Ongles rose poudré' },
  { id: '2', url: 'https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Manucure française élégante' },
  { id: '3', url: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Nail art strass' },
  { id: '4', url: 'https://images.pexels.com/photos/2619094/pexels-photo-2619094.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Ongles longs naturels' },
  { id: '5', url: 'https://images.pexels.com/photos/3997383/pexels-photo-3997383.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Pose de gel' },
  { id: '6', url: 'https://images.pexels.com/photos/2619093/pexels-photo-2619093.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Manucure soignée' },
  { id: '7', url: 'https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Ongles décorés' },
  { id: '8', url: 'https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Finition brillante' },
];

export const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
];
