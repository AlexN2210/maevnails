import type { Service, GalleryImage } from '@/types';

export const services: Service[] = [
  {
    id: 'vernis-semi-permanent',
    category: 'Ongles naturels',
    name: 'Vernis semi-permanent',
    description: 'Une finition brillante et longue tenue pour sublimer naturellement vos ongles.',
    price: '35 €',
    icon: 'Sparkles',
  },
  {
    id: 'vernis-semi-permanent-depose-pose',
    category: 'Ongles naturels',
    name: 'Vernis semi-permanent (dépose + pose)',
    description: 'Dépose de la pose précédente suivie d’une nouvelle couleur semi-permanente.',
    price: '40 €',
    icon: 'Hand',
  },
  {
    id: 'depose-semi-permanent',
    category: 'Ongles naturels',
    name: 'Dépose totale semi-permanent',
    description: 'Retrait complet du vernis semi-permanent dans le respect de vos ongles naturels.',
    price: '20 €',
    icon: 'Wrench',
  },
  {
    id: 'remplissage-gel',
    category: 'Rallongement',
    name: 'Remplissage gel',
    description: 'Entretien de votre pose en gel pour retrouver une forme nette et une tenue durable.',
    price: '45 €',
    icon: 'Layers3',
  },
  {
    id: 'pose-ongles-naturels',
    category: 'Rallongement',
    name: 'Pose complète sur ongles naturels',
    description: 'Une pose complète pour renforcer et embellir vos ongles naturels.',
    price: '45 €',
    icon: 'Hand',
  },
  {
    id: 'pose-americaine',
    category: 'Rallongement',
    name: 'Pose américaine',
    description: 'Des extensions prêtes à poser pour une longueur élégante et homogène.',
    price: '50 €',
    icon: 'Sparkles',
  },
  {
    id: 'pose-extension',
    category: 'Rallongement',
    name: 'Pose complète avec extension',
    description: 'Création d’une longueur personnalisée avec une finition soignée.',
    price: '55 €',
    icon: 'Palette',
  },
  {
    id: 'depose-gel',
    category: 'Rallongement',
    name: 'Dépose totale gel',
    description: 'Retrait complet du gel avec préparation des ongles naturels.',
    price: '25 €',
    icon: 'Wrench',
  },
  {
    id: 'depose-exterieure',
    category: 'Divers',
    name: 'Dépose extérieure',
    description: 'Dépose d’une prestation réalisée par une autre prothésiste.',
    price: '5 €',
    icon: 'Shield',
  },
  {
    id: 'reparation-ongle',
    category: 'Divers',
    name: 'Réparation ongle',
    description: 'Réparation ciblée d’un ongle abîmé ou cassé.',
    price: '3 €',
    icon: 'Brush',
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
