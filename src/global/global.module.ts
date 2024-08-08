import { Global, Module, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { ZodValidationExceptionFilter } from './infra/zod-validation-exception-filter';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    { provide: APP_PIPE, useClass: ZodValidationPipe },
    { provide: APP_FILTER, useClass: ZodValidationExceptionFilter },
  ],
  exports: [PrismaService],
})
export class GlobalModule implements OnModuleInit {
  onModuleInit() {}
}
