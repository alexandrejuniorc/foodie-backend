import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const updateRestaurantInput = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  location: z.string().min(1),
  rating: z.number().finite().min(1).max(5),
  image_url: z.string().optional(),
});

export class UpdateRestaurantInput extends createZodDto(
  updateRestaurantInput,
) {}
