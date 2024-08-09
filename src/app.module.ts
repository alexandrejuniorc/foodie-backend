import { Module } from '@nestjs/common';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { GlobalModule } from './global/global.module';
import { FoodsModule } from './foods/foods.module';

@Module({
  imports: [GlobalModule, RestaurantsModule, FoodsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
