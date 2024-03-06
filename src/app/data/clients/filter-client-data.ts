import { z } from 'zod'

export const FilterClientFormSchema = z
  .object({
    id: z.coerce.number(),
    name: z.string(),
  })
  .partial()

export type FilterClientForm = z.infer<typeof FilterClientFormSchema>
