import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';
import { CreateFoodInput } from '../domain/inputs/create-food.input';

@Injectable()
export class CreateFoodUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(id: string, data: CreateFoodInput) {
    const food = await this.prisma.food.create({
      data: {
        name: data.name,
        price: data.price,
        time: data.time,
        delivery: data.delivery,
        rating: data.rating,
        image_url: data.image_url ?? null,
        restaurantId: id,
      },
    });

    return food;
  }
}
