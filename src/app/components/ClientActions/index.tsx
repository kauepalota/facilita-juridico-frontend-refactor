import { Plus, Waypoints } from 'lucide-react'

export function ClientActions() {
  return (
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
  )
}
