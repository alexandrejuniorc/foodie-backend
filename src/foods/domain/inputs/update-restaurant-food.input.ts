import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const updateRestaurantFoodInput = z.object({
  name: z.string().min(1),
  price: z.number().finite().min(1),
  time: z.number().finite().min(1),
  delivery: z.number().finite().min(1),
  rating: z.number().finite().min(1).max(5),
  image_url: z.string().optional().nullable(),
});

export class UpdateRestaurantFoodInput extends createZodDto(
  updateRestaurantFoodInput,
) {}
