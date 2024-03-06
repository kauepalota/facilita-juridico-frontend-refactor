import ClientTable from './components/ClientTable'

import { SearchIcon, Plus, Waypoints } from 'lucide-react'

export default function Home() {
  return (
    <div className="p-6 max-w-4xl space-y-4 mx-auto">
      <h1 className="font-semibold">Clientes</h1>

      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <input
            className="h-9 w-full border border-stone-200 bg-transparent rounded px-3 py-1 text-sm shadow-sm outline-none"
            placeholder="ID do cliente"
          />
          <input
            className="h-9 w-full border border-stone-200 bg-transparent rounded px-3 py-1 text-sm shadow-sm outline-none"
            placeholder="Nome do cliente"
          />
          <button
            className="flex gap-2 text-stone-950 shadow-sm h-9 px-2 py-2 items-center whitespace-nowrap 
          rounded-md text-sm font-medium bg-stone-100 hover:bg-stone-50"
          >
            <SearchIcon size={16} />
            <span className="max-md:hidden">Filtrar resultados</span>
          </button>
        </form>

        <div className="ml-2 flex items-center gap-2">
          <button
            className="flex gap-2 text-white bg-stone-950 shadow h-9 px-2 py-2 items-center whitespace-nowrap 
        rounded-md text-sm font-medium hover:bg-stone-900"
          >
            <Plus size={16} />
            <span className="max-md:hidden">Novo cliente</span>
          </button>
          <button
            className="flex gap-2 text-white bg-stone-950 shadow h-9 px-2 py-2 items-center whitespace-nowrap 
        rounded-md text-sm font-medium hover:bg-stone-900"
          >
            <Waypoints size={16} />
            <span className="max-md:hidden">Calcular rota</span>
          </button>
        </div>
      </div>

      <div className="border rounded-lg">
        <ClientTable />
      </div>
    </div>
  )
}
