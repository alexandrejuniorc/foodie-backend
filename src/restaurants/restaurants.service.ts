import { Injectable } from '@nestjs/common';
import { ListAllRestaurantsUseCase } from './use-cases/list-all-restaurants.use-case';
import { FindRestaurantUseCase } from './use-cases/find-restaurant.use-case';
import { CreateRestaurantUseCase } from './use-cases/create-restaurant.use-case';
import { CreateRestaurantInput } from './domain/inputs/create-restaurant.input';

@Injectable()
export class RestaurantsService {
  constructor(
    private listAllRestaurantsUseCase: ListAllRestaurantsUseCase,
    private findRestaurantUseCase: FindRestaurantUseCase,
    private createRestaurantUseCase: CreateRestaurantUseCase,
  ) {}

  async listRestaurants() {
    return this.listAllRestaurantsUseCase.execute();
  }

  async findClient(id: string) {
    return this.findRestaurantUseCase.execute(id);
  }

  async createRestaurant(data: CreateRestaurantInput) {
    return this.createRestaurantUseCase.execute(data);
  }
}
