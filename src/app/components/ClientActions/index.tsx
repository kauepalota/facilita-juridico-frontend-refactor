'use client'

import { Waypoints, X } from 'lucide-react'
import { ClientDialog } from '../ClientDialog'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useCallback } from 'react'

export function ClientActions() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString())
    if (params.has('routing')) {
      params.delete('routing')
    } else {
      params.set('routing', 'true')
    }

    return params.toString()
  }, [searchParams])

  function onRouteCalculate() {
    router.push(pathname + '?' + createQueryString())
  }

  return (
    <div className="ml-2 flex items-center gap-2">
      <ClientDialog />

      {!searchParams.has('routing') && (
        <button
          onClick={() => onRouteCalculate()}
          className="flex h-9 items-center gap-2 whitespace-nowrap rounded-md bg-stone-950 px-2 py-2 text-sm 
        font-medium text-white shadow-sm hover:bg-stone-900"
        >
          <Waypoints size={16} />
          <span className="max-md:hidden">Ordenar rota</span>
        </button>
      )}

      {searchParams.has('routing') && (
        <button
          onClick={() => onRouteCalculate()}
          className="flex h-9 items-center gap-2 whitespace-nowrap rounded-md bg-stone-950 px-2 py-2 text-sm 
        font-medium text-white shadow-sm hover:bg-stone-900"
        >
          <X size={16} />
          <span className="max-md:hidden">Reverter</span>
        </button>
      )}
    </div>
  )
}
