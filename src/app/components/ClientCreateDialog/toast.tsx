import { Client } from '@/app/data/clients/client-data'
import { toast } from 'sonner'

export function dispatchCreatedToaster(client: Client) {
  toast.success(`Cliente '${client.name}' criado com sucesso!`, {
    description: `ID: ${client.id}`,
  })
}
