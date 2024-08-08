import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class FindRestaurantUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(id: string) {
    const restaurant = this.prisma.restaurant.findUnique({
      where: { id },
      include: { menu: true },
    });

    if (!restaurant) {
      throw new Error('Restaurant not found');
    }

    return restaurant;
  }
}
