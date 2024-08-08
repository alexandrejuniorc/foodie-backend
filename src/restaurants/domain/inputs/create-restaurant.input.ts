import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const createRestaurantInput = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  location: z.string().min(1),
  rating: z.number().finite().min(1).max(5),
  image_url: z.string().optional().nullable(),
});

export class CreateRestaurantInput extends createZodDto(
  createRestaurantInput,
) {}
