import { z } from 'zod'
import { Client } from './client-data'

export const CreateClientFormSchema = z
  .object({
    name: z.string().min(1),
    locationX: z.number(),
    locationY: z.number(),
  })
  .partial()

export type CreateClientForm = z.infer<typeof CreateClientFormSchema>

export async function createClient(data: CreateClientForm): Promise<Client> {
  const response = await await fetch(
    process.env.NEXT_PUBLIC_API_URL as string,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  )

  if (response.status !== 201) {
    throw new Error('Failed to create client')
  }

  return await response.json()
}
