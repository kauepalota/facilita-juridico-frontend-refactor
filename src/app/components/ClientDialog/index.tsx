'use client'

import * as Dialog from '@radix-ui/react-dialog'

import { Plus, X } from 'lucide-react'
import { ClientDialogForm } from '../ClientDialogForm'

export function ClientDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="flex h-9 items-center gap-2 whitespace-nowrap rounded-md bg-stone-950 px-2 py-2 text-sm 
        font-medium text-white shadow-sm hover:bg-stone-900"
        >
          <Plus size={16} />
          <span className="max-md:hidden">Novo cliente</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <Dialog.Content
          className="fixed left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 
        rounded-md bg-white p-8 text-black shadow sm:max-w-lg"
        >
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <Dialog.Title className="text-xl font-medium">
                Criar cliente
              </Dialog.Title>

              <Dialog.Description className="font-normal text-black/60">
                Adicione um novo cliente ao sistema.
              </Dialog.Description>
            </div>

            <Dialog.Close className="flex justify-start">
              <X size={20} />
            </Dialog.Close>
          </div>

          <ClientDialogForm />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
