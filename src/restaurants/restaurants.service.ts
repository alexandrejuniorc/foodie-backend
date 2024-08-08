import { Injectable } from '@nestjs/common';
import { ListAllRestaurantsUseCase } from './use-cases/list-all-restaurants.use-case';
import { FindRestaurantUseCase } from './use-cases/find-restaurant.use-case';

@Injectable()
export class RestaurantsService {
  constructor(
    private listAllRestaurantsUseCase: ListAllRestaurantsUseCase,
    private findRestaurantUseCase: FindRestaurantUseCase,
  ) {}

  async listRestaurants() {
    return this.listAllRestaurantsUseCase.execute();
  }

  async findClient(id: string) {
    return this.findRestaurantUseCase.execute(id);
  }
}
