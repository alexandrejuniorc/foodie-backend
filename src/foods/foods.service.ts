import { Injectable } from '@nestjs/common';
import { CreateFoodUseCase } from './use-cases/create-food.use-case';
import { CreateFoodInput } from './domain/inputs/create-food.input';
import { ListRestaurantFoodsUseCase } from './use-cases/list-restaurant-foods.use-case';
import { ListFoodsUseCase } from './use-cases/list-foods.use-case';
import { UpdateRestaurantFoodUseCase } from './use-cases/update-restaurant-food.use-case';
import { UpdateRestaurantFoodInput } from './domain/inputs/update-restaurant-food.input';
import { DeleteRestaurantFoodUseCase } from './use-cases/delete-restaurant-food.use-case';

@Injectable()
export class FoodsService {
  constructor(
    private createFoodUseCase: CreateFoodUseCase,
    private listRestaurantFoodsUseCase: ListRestaurantFoodsUseCase,
    private listFoodsUseCase: ListFoodsUseCase,
    private updateRestaurantFoodUseCase: UpdateRestaurantFoodUseCase,
    private deleteRestaurantFoodUseCase: DeleteRestaurantFoodUseCase,
  ) {}

  async listFoods() {
    return this.listFoodsUseCase.execute();
  }

  async listRestaurantFoods(id: string) {
    return this.listRestaurantFoodsUseCase.execute(id);
  }

  async createFood(id: string, data: CreateFoodInput) {
    return this.createFoodUseCase.execute(id, data);
  }

  async updateRestaurantFood(id: string, data: UpdateRestaurantFoodInput) {
    return this.updateRestaurantFoodUseCase.execute(id, data);
  }

  async deleteRestaurantFood(id: string) {
    return this.deleteRestaurantFoodUseCase.execute(id);
  }
}
