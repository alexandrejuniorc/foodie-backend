import { Global, Module, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class GlobalModule implements OnModuleInit {
  onModuleInit() {}
}
