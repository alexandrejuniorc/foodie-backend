import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class ListAllRestaurantsUseCase {
  constructor(private prisma: PrismaService) {}

  async execute() {
    return this.prisma.restaurant.findMany();
  }
}
