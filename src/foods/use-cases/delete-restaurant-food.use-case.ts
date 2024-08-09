import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class DeleteRestaurantFoodUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(id: string) {
    const food = await this.prisma.food.findUnique({ where: { id } });

    if (!food) {
      throw new Error('Food not found');
    }

    await this.prisma.food.delete({ where: { id } });

    return { message: 'Food deleted' };
  }
}
