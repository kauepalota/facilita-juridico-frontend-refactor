import { toast } from 'sonner'

export function dispatchDeletedToaster(id: string) {
  toast.success(`Cliente ${id} excluído com sucesso!`)
}
