import { Module } from '@nestjs/common';
import { RestaurantsUseCases } from './use-cases';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';

@Module({
  imports: [],
  controllers: [RestaurantsController],
  providers: [RestaurantsService, ...RestaurantsUseCases],
  exports: [RestaurantsService],
})
export class RestaurantsModule {}
