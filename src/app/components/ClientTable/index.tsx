'use client'

import { getClients } from '@/app/data/clients/client-data'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

export function ClientTable() {
  const params = useSearchParams()

  const id = params.get('id')
  const name = params.get('name')

  const routing = params.has('routing')

  const { data, refetch } = useQuery({
    queryKey: ['clients'],
    queryFn: async () =>
      getClients({
        filter: {
          id: id || undefined,
          name: name || undefined,
        },
        routing,
      }),
  })

  useEffect(() => {
    refetch()
  }, [id, name, routing, refetch])

  return (
    <table className="w-full overflow-auto text-sm">
      <thead className="[&_tr]:border-b">
        <tr>
          {routing && (
            <th className="h-10 px-2 text-left font-medium">Posição</th>
          )}
          <th className="h-10 px-2 text-left font-medium">ID</th>
          <th className="h-10 px-2 text-left font-medium">Cliente</th>
          <th className="h-10 px-2 text-left font-medium">Localização</th>
        </tr>
      </thead>

      <tbody className="[&_tr:last-child]:border-0">
        {data &&
          data.map((client, index) => (
            <tr key={client.id} className="border-b font-mono">
              {routing && <td className="p-2">#{index + 1}</td>}

              <td className="p-2">{client.id}</td>
              <td className="p-2">{client.name}</td>
              <td className="p-2">
                ({client.locationX}, {client.locationY})
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
