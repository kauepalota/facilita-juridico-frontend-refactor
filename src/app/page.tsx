import { ClientActions } from './components/ClientActions'
import { ClientFilters } from './components/ClientFilters'
import { ClientTable } from './components/ClientTable'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl space-y-4 p-6">
      <h1 className="font-semibold">Clientes</h1>

      <div className="flex items-center justify-between">
        <ClientFilters />
        <ClientActions />
      </div>

      <div className="rounded-lg border">
        <ClientTable />
      </div>
    </div>
  )
}
