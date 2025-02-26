export interface Restaurant {
  id: string;
  name: string;
  description: string;
  location: string;
  rating: number;
  image_url?: string;

  created_at: Date;
  updated_at: Date;
}
