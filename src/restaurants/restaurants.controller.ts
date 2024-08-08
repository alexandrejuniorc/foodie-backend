import { Controller, Get, Param } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';

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
}
