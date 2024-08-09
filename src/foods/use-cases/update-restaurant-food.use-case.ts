import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';
import { UpdateRestaurantFoodInput } from '../domain/inputs/update-restaurant-food.input';

@Injectable()
export class UpdateRestaurantFoodUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(id: string, data: UpdateRestaurantFoodInput) {
    const food = await this.prisma.food.update({
      where: { id },
      data: {
        name: data.name,
        price: data.price,
        time: data.time,
        delivery: data.delivery,
        rating: data.rating,
        image_url: data.image_url ?? null,
      },
    });

    return food;
  }
}
