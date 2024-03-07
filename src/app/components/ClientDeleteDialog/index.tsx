import { Client } from '@/app/data/clients/client-data'
import { deleteClient } from '@/app/data/clients/delete-client-data'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Trash } from 'lucide-react'
import { dispatchDeletedToaster } from './toaster'

type ClientDeleteDialogProps = {
  id: string
}

export function ClientDeleteDialog({ id }: ClientDeleteDialogProps) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: handleDelete,
    onSuccess: async (_, deleted) => {
      queryClient.setQueryData(['clients'], (old: Client[]) => {
        return old.filter((client) => client.id !== deleted)
      })

      dispatchDeletedToaster(deleted)
    },
  })

  async function handleDelete(id: string) {
    await deleteClient(id)
  }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Trash className="size-4 " />
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
        <AlertDialog.Content
          className="fixed left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2
        rounded-md bg-white p-8 text-black shadow sm:max-w-lg"
        >
          <div className="flex flex-col space-y-2 text-center sm:text-left">
            <AlertDialog.Title className="text-lg font-semibold">
              Tem certeza?
            </AlertDialog.Title>
            <AlertDialog.Description className="text-sm text-black/60">
              Você deseja mesmo excluir este cliente? Esta ação é irreversível.
            </AlertDialog.Description>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:justify-end sm:space-x-2">
            <AlertDialog.Cancel
              className="border-sm flex h-9 items-center gap-2 whitespace-nowrap rounded-md border bg-white 
          px-2 py-2 text-sm font-medium text-stone-950 shadow-sm hover:bg-stone-50"
            >
              Cancelar
            </AlertDialog.Cancel>
            <AlertDialog.Action
              onClick={() => {
                mutation.mutateAsync(id)
              }}
              className="mt-2 flex h-9 items-center gap-2 whitespace-nowrap rounded-md bg-stone-900 px-2 py-2 text-sm 
        font-medium text-white shadow-sm hover:bg-stone-800 sm:mt-0"
            >
              Excluir
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
