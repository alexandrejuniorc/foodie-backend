export interface CreateRestaurantInput {
  name: string;
  description: string;
  location: string;
  rating: number;
  image_url?: string;
}
