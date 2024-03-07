import { FilterClientForm } from './filter-client-data'

export type Client = {
  id: string
  name: string
  locationX: number
  locationY: number
}

export type ClientFetchProps = {
  filter: FilterClientForm
  routing: boolean
}

export async function getClients({
  filter,
  routing,
}: ClientFetchProps): Promise<Client[]> {
  const params = new URLSearchParams({
    routing: routing ? 'true' : 'false',
  })

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/clients?${params}`,
    {
      method: 'GET',
    },
  )

  if (response.status !== 200) {
    return []
  }

  const data = (await response.json()) as Client[]

  return data.filter((client) => {
    const idMatches = filter.id
      ? client.id.toLowerCase().includes(filter.id.toLowerCase())
      : true
    const nameMatches = filter.name
      ? client.name.toLowerCase().includes(filter.name.toLowerCase())
      : true

    return idMatches && nameMatches
  })
}
