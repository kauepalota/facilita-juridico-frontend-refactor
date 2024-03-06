import ClientTable from './components/ClientTable'

import { SearchIcon, Plus, Waypoints } from 'lucide-react'

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl space-y-4 p-6">
      <h1 className="font-semibold">Clientes</h1>

      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <input
            className="h-9 w-full rounded border border-stone-200 bg-transparent px-3 py-1 text-sm shadow-sm outline-none"
            placeholder="ID do cliente"
          />
          <input
            className="h-9 w-full rounded border border-stone-200 bg-transparent px-3 py-1 text-sm shadow-sm outline-none"
            placeholder="Nome do cliente"
          />
          <button
            className="flex h-9 items-center gap-2 whitespace-nowrap rounded-md bg-stone-100 px-2 py-2 
          text-sm font-medium text-stone-950 shadow-sm hover:bg-stone-50"
          >
            <SearchIcon size={16} />
            <span className="max-md:hidden">Filtrar resultados</span>
          </button>
        </form>

        <div className="ml-2 flex items-center gap-2">
          <button
            className="flex h-9 items-center gap-2 whitespace-nowrap rounded-md bg-stone-950 px-2 py-2 text-sm 
        font-medium text-white shadow hover:bg-stone-900"
          >
            <Plus size={16} />
            <span className="max-md:hidden">Novo cliente</span>
          </button>
          <button
            className="flex h-9 items-center gap-2 whitespace-nowrap rounded-md bg-stone-950 px-2 py-2 text-sm 
        font-medium text-white shadow hover:bg-stone-900"
          >
            <Waypoints size={16} />
            <span className="max-md:hidden">Calcular rota</span>
          </button>
        </div>
      </div>

      <div className="rounded-lg border">
        <ClientTable />
      </div>
    </div>
  )
}
