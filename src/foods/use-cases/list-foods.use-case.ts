import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/global/prisma.service';

@Injectable()
export class ListFoodsUseCase {
  constructor(private prisma: PrismaService) {}

  async execute() {
    const foods = await this.prisma.food.findMany();

    return foods;
  }
}
