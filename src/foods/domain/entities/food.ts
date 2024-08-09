export interface Food {
  id: string;
  name: string;
  price: number;
  time: number;
  delivery: number;
  rating: number;
  image_url?: string;

  created_at: Date;
  updated_at: Date;
}
