export type Client = {
  id: number
  name: string
  locationX: number
  locationY: number
}

export async function getClients(): Promise<Client[]> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string)

  if (response.status !== 200) {
    return []
  }

  return await response.json()
}
