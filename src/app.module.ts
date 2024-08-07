import { Module } from '@nestjs/common';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { GlobalModule } from './global/global.module';

@Module({
  imports: [GlobalModule, RestaurantsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
