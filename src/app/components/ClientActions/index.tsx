import { Waypoints } from 'lucide-react'
import { ClientDialog } from '../ClientDialog'

export function ClientActions() {
  return (
    <div className="ml-2 flex items-center gap-2">
      <ClientDialog />

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
