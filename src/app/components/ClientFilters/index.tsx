import { SearchIcon } from 'lucide-react'

export function ClientFilters() {
  return (
    <form className="flex items-center gap-2">
      <input
        autoComplete="off"
        className="h-9 w-full rounded border border-stone-200 bg-transparent px-3 py-1 text-sm shadow-sm outline-none"
        placeholder="ID do cliente"
      />
      <input
        autoComplete="off"
        className="h-9 w-full rounded border border-stone-200 bg-transparent px-3 py-1 text-sm shadow-sm outline-none"
        placeholder="Nome do cliente"
      />
      <button
        className="flex h-9 items-center gap-2 whitespace-nowrap rounded-md bg-stone-100 px-2 py-2 text-sm 
          font-medium text-stone-950 shadow-sm hover:bg-stone-50"
      >
        <SearchIcon size={16} />
        <span className="max-md:hidden">Filtrar resultados</span>
      </button>
    </form>
  )
}
