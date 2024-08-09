import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class ListRestaurantFoodsUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(id: string) {
    const restaurantFoods = await this.prisma.food.findMany({
      where: { restaurantId: id },
    });

    return restaurantFoods;
  }
}
