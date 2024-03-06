import { FilterClientForm } from './filter-client-data'

export type Client = {
  id: number
  name: string
  locationX: number
  locationY: number
}

export type ClientFetchProps = {
  filter: FilterClientForm
}

export async function getClients({
  filter,
}: ClientFetchProps): Promise<Client[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clients`)

  if (response.status !== 200) {
    return []
  }

  const data = (await response.json()) as Client[]

  return data.filter((client) => {
    const idMatches = filter.id ? client.id === filter.id : true
    const nameMatches = filter.name
      ? client.name.toLowerCase().includes(filter.name.toLowerCase())
      : true

    return idMatches && nameMatches
  })
}
