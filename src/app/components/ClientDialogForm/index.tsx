'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  CreateClientFormSchema,
  CreateClientForm,
  createClient,
} from '@/app/data/clients/create-client-data'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Client } from '@/app/data/clients/client-data'

type ClientDialogFormProps = {
  toggleOpen: () => void
}

export function ClientDialogForm({ toggleOpen }: ClientDialogFormProps) {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(CreateClientFormSchema),
  })

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: handleCreate,
    onSuccess: async (data) => {
      queryClient.setQueryData(['clients'], (current: Client[]) => {
        return [...current, data]
      })
    },
  })

  async function onSubmit(form: CreateClientForm) {
    try {
      const created = await mutation.mutateAsync(form)
      if (!created) {
        alert('Failed to create client')
      }

      toggleOpen()
      reset()
    } catch (error) {
      alert(error)
    }
  }

  async function handleCreate(form: CreateClientForm) {
    return createClient(form)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 grid items-start gap-4"
    >
      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="name">
          Nome
        </label>
        <input
          autoComplete="off"
          id="name"
          className="h-9 w-full rounded border border-stone-200 bg-transparent px-3 py-1 text-sm shadow-sm outline-none"
          placeholder="Matheus Silva"
          {...register('name')}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="location-x">Localização X</label>
        <input
          autoComplete="off"
          id="location-x"
          type="number"
          className="h-9 w-full rounded border border-stone-200 bg-transparent px-3 py-1 text-sm shadow-sm outline-none"
          placeholder="0"
          {...register('locationX', { valueAsNumber: true })}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="location-y">Localização Y</label>
        <input
          autoComplete="off"
          id="location-y"
          type="number"
          className="h-9 w-full rounded border border-stone-200 bg-transparent px-3 py-1 text-sm shadow-sm outline-none"
          placeholder="0"
          {...register('locationY', { valueAsNumber: true })}
        />
      </div>

      <button
        type="submit"
        className="items-center gap-2 whitespace-nowrap rounded-md bg-stone-950 px-2 py-2 text-sm 
font-medium text-white shadow hover:bg-stone-900"
      >
        Criar
      </button>
    </form>
  )
}
