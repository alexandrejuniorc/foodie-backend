import { Injectable } from '@nestjs/common';
import { ListAllRestaurantsUseCase } from './use-cases/list-all-restaurants.use-case';

@Injectable()
export class RestaurantsService {
  constructor(private listAllRestaurantsUseCase: ListAllRestaurantsUseCase) {}

  async listRestaurants() {
    return this.listAllRestaurantsUseCase.execute();
  }
}
