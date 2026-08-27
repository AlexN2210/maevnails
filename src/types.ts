export type Service = {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  icon: string;
};

export type GalleryImage = {
  id: string;
  url: string;
  alt: string;
};

export type Appointment = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  appointment_date: string;
  time_slot: string;
  comment?: string | null;
  status: string;
  created_at: string;
};
