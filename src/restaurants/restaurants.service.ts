import { Injectable } from '@nestjs/common';
import { ListAllRestaurantsUseCase } from './use-cases/list-all-restaurants.use-case';
import { FindRestaurantUseCase } from './use-cases/find-restaurant.use-case';
import { CreateRestaurantUseCase } from './use-cases/create-restaurant.use-case';
import { CreateRestaurantInput } from './domain/inputs/create-restaurant.input';
import { UpdateRestaurantUseCase } from './use-cases/update-restaurant.use-case';
import { DeleteRestaurantUseCase } from './use-cases/delete-restaurant.use-case';

@Injectable()
export class RestaurantsService {
  constructor(
    private listAllRestaurantsUseCase: ListAllRestaurantsUseCase,
    private findRestaurantUseCase: FindRestaurantUseCase,
    private createRestaurantUseCase: CreateRestaurantUseCase,
    private updateRestaurantUseCase: UpdateRestaurantUseCase,
    private deleteRestaurantUseCase: DeleteRestaurantUseCase,
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

  async updateRestaurant(id: string, data: CreateRestaurantInput) {
    return this.updateRestaurantUseCase.execute(id, data);
  }

  async deleteRestaurant(id: string) {
    return this.deleteRestaurantUseCase.execute(id);
  }
}
