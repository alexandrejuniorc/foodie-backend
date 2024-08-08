import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';
import { CreateRestaurantInput } from '../domain/inputs/create-restaurant.input';

@Injectable()
export class CreateRestaurantUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(data: CreateRestaurantInput) {
    const restaurant = await this.prisma.restaurant.create({
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
