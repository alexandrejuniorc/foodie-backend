import { CreateRestaurantUseCase } from './create-restaurant.use-case';
import { FindRestaurantUseCase } from './find-restaurant.use-case';
import { ListAllRestaurantsUseCase } from './list-all-restaurants.use-case';
import { UpdateRestaurantUseCase } from './update-restaurant.use-case';

export const RestaurantsUseCases = [
  CreateRestaurantUseCase,
  FindRestaurantUseCase,
  ListAllRestaurantsUseCase,
  UpdateRestaurantUseCase,
];
