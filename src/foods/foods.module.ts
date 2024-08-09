import { Module } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { FoodsController } from './foods.controller';
import { FoodsUseCases } from './use-cases';

@Module({
  imports: [],
  controllers: [FoodsController],
  providers: [FoodsService, ...FoodsUseCases],
  exports: [FoodsService],
})
export class FoodsModule {}
