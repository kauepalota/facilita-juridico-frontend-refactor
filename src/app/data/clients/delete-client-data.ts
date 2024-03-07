export async function deleteClient(id: string) {
  const response = await await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/clients/${id}`,
    {
      method: 'DELETE',
    },
  )
  if (response.status !== 200) {
    throw new Error('Failed to delete client')
  }

  return true
}
