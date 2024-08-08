import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class DeleteRestaurantUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(id: string) {
    const restaurant = await this.prisma.restaurant.delete({
      where: { id },
    });

    return restaurant;
  }
}
