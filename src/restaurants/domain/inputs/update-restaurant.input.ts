export interface UpdateRestaurantInput {
  name: string;
  description: string;
  location: string;
  rating: number;
  image_url?: string;
}
