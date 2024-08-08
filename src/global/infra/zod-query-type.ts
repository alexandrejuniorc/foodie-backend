import { z } from 'zod';

export const zodQueryType = z
  .custom<string[]>()
  .transform((value) => (Array.isArray(value) ? value : [value]))
  .optional();

export const zodQueryEnumTypeBuilder = <T extends string>(
  enumValues: T[],
  message = 'Valor inválido',
) =>
  z
    .custom<T[]>((value) => {
      if (Array.isArray(value)) {
        return !value.some((permission) => !enumValues.includes(permission));
      }

      return enumValues.includes(value as never);
    }, message)
    .transform((value) => (Array.isArray(value) ? value : [value]))
    .optional();
