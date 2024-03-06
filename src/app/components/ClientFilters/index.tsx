'use client'

import {
  FilterClientForm,
  FilterClientFormSchema,
} from '@/app/data/clients/filter-client-data'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchIcon, X } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

export function ClientFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (form: FilterClientForm) => {
      const params = new URLSearchParams(searchParams.toString())
      if (form.id && form.id !== undefined) {
        params.set('id', String(form.id))
      } else {
        params.delete('id')
      }

      if (form.name && form.name !== undefined) {
        params.set('name', form.name)
      } else {
        params.delete('name')
      }

      return params.toString()
    },
    [searchParams],
  )

  const { register, handleSubmit, reset } = useForm<FilterClientForm>({
    resolver: zodResolver(FilterClientFormSchema),
  })

  function onSubmit(data: FilterClientForm) {
    router.push(pathname + '?' + createQueryString(data))
  }

  function onClearFilters() {
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
      <input
        autoComplete="off"
        className="h-9 w-full rounded border border-stone-200 bg-transparent px-3 py-1 text-sm shadow-sm outline-none"
        placeholder="ID do cliente"
        type="number"
        {...register('id')}
      />
      <input
        autoComplete="off"
        className="h-9 w-full rounded border border-stone-200 bg-transparent px-3 py-1 text-sm shadow-sm outline-none"
        placeholder="Nome do cliente"
        {...register('name')}
      />
      <button
        type="submit"
        className="flex h-9 items-center gap-2 whitespace-nowrap rounded-md bg-stone-100 px-2 py-2 text-sm 
          font-medium text-stone-950 shadow-sm hover:bg-stone-50"
      >
        <SearchIcon size={16} />
        <span className="max-md:hidden">Filtrar resultados</span>
      </button>

      <button
        onClick={onClearFilters}
        className="border-sm flex h-9 items-center gap-2 whitespace-nowrap rounded-md border bg-white 
          px-2 py-2 text-sm font-medium text-stone-950 shadow-sm hover:bg-stone-50"
      >
        <X size={16} />
        <span className="max-md:hidden">Remover filtros</span>
      </button>
    </form>
  )
}
