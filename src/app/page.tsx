import { Suspense } from 'react'
import { ClientActions } from './components/ClientActions'
import { ClientFilters } from './components/ClientFilters'
import { ClientTable } from './components/ClientTable'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl space-y-4 p-6">
      <h1 className="font-semibold">Clientes</h1>

      <div className="flex items-center justify-between">
        <Suspense>
          <ClientFilters />
          <ClientActions />
        </Suspense>
      </div>

      <div className="rounded-lg border">
        <Suspense>
          <ClientTable />
        </Suspense>
      </div>
    </div>
  )
}
