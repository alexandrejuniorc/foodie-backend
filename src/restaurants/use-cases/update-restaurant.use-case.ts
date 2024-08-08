import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';
import { UpdateRestaurantInput } from '../domain/inputs/update-restaurant.input';

@Injectable()
export class UpdateRestaurantUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(id: string, data: UpdateRestaurantInput) {
    const restaurant = await this.prisma.restaurant.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        location: data.location,
        rating: data.rating,
        image_url: data.image_url ?? null,
      },
    });

    return restaurant;
  }
}
