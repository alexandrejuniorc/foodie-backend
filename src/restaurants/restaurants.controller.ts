import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantInput } from './domain/inputs/create-restaurant.input';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}

  @Get()
  async listRestaurants() {
    return this.restaurantsService.listRestaurants();
  }

  @Get('/:id')
  async findClient(@Param('id') id: string) {
    return this.restaurantsService.findClient(id);
  }

  @Post()
  async createRestaurant(@Body() body: CreateRestaurantInput) {
    return this.restaurantsService.createRestaurant(body);
  }

  @Put('/:id')
  async updateRestaurant(
    @Param('id') id: string,
    @Body() body: CreateRestaurantInput,
  ) {
    return this.restaurantsService.updateRestaurant(id, body);
  }

  @Delete('/:id')
  async deleteRestaurant(@Param('id') id: string) {
    return this.restaurantsService.deleteRestaurant(id);
  }
}
