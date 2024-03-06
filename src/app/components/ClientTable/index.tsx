'use client'

import { getClients } from '@/app/data/clients/client-data'
import { useQuery } from '@tanstack/react-query'

export function ClientTable() {
  const { data } = useQuery({
    queryKey: ['clients'],
    queryFn: async () => getClients(),
  })

  return (
    <table className="w-full overflow-auto text-sm">
      <thead>
        <tr className="border-b">
          <th className="h-10 px-2 text-left font-medium">ID</th>
          <th className="h-10 px-2 text-left font-medium">Cliente</th>
          <th className="h-10 px-2 text-left font-medium">Localização</th>
        </tr>
      </thead>

      <tbody className="[&_tr:last-child]:border-0">
        {data &&
          data.map((client) => (
            <tr key={client.id} className="border-b">
              <td className="p-2">1</td>
              <td className="p-2">João</td>
              <td className="p-2">Rio de Janeiro</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
