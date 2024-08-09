import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FoodsService } from './foods.service';
import { CreateFoodInput } from './domain/inputs/create-food.input';
import { UpdateRestaurantFoodInput } from './domain/inputs/update-restaurant-food.input';

@Controller('foods')
export class FoodsController {
  constructor(private foodsService: FoodsService) {}

  @Get()
  async listFoods() {
    return this.foodsService.listFoods();
  }

  @Get(':restaurantId/restaurant-foods')
  async listRestaurantFoods(@Param('restaurantId') id: string) {
    return this.foodsService.listRestaurantFoods(id);
  }

  @Post(':restaurantId/create')
  async createFood(
    @Param('restaurantId') id: string,
    @Body() body: CreateFoodInput,
  ) {
    return this.foodsService.createFood(id, body);
  }

  @Put(':foodId/update')
  async updateRestaurantFood(
    @Param('foodId') id: string,
    @Body() body: UpdateRestaurantFoodInput,
  ) {
    return this.foodsService.updateRestaurantFood(id, body);
  }

  @Delete(':foodId/delete')
  async deleteRestaurantFood(@Param('foodId') id: string) {
    return this.foodsService.deleteRestaurantFood(id);
  }
}
