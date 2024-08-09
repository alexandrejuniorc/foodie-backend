import { CreateFoodUseCase } from './create-food.use-case';
import { DeleteRestaurantFoodUseCase } from './delete-restaurant-food.use-case';
import { ListFoodsUseCase } from './list-foods.use-case';
import { ListRestaurantFoodsUseCase } from './list-restaurant-foods.use-case';
import { UpdateRestaurantFoodUseCase } from './update-restaurant-food.use-case';

export const FoodsUseCases = [
  CreateFoodUseCase,
  DeleteRestaurantFoodUseCase,
  ListFoodsUseCase,
  ListRestaurantFoodsUseCase,
  UpdateRestaurantFoodUseCase,
];
