import { BadRequestException, Catch, ExceptionFilter } from '@nestjs/common';
import { ZodValidationException } from 'nestjs-zod';

export interface FormExceptionPayload {
  id: string;
  message: string;
  fields: Array<{ field: string; message: string }>;
}

@Catch(ZodValidationException)
export class ZodValidationExceptionFilter implements ExceptionFilter {
  catch(exception: ZodValidationException) {
    const error = exception.getZodError();

    const fields: FormExceptionPayload['fields'] = error.errors.map((e) => ({
      field: e.path[0] as string,
      message: e.message,
    }));

    throw new BadRequestException({
      id: 'validation-failed',
      message: 'Os dados informados não são válidos',
      fields,
    });
  }
}
