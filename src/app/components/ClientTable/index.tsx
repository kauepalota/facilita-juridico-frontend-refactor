export function ClientTable() {
  return (
    <table className="w-full overflow-auto text-sm">
      <thead>
        <tr className="border-b">
          <th className="h-10 px-2 text-left align-middle font-medium">ID</th>
          <th className="h-10 px-2 text-left align-middle font-medium">
            Cliente
          </th>
          <th className="h-10 px-2 text-left align-middle font-medium">
            Localização
          </th>
        </tr>
      </thead>

      <tbody className="[&_tr:last-child]:border-0">
        <tr className="border-b">
          <td className="p-2 align-middle">a1fdfcc4</td>
          <td className="p-2 align-middle">João</td>
          <td className="p-2 align-middle">Rio de Janeiro</td>
        </tr>
        <tr className="border-b">
          <td className="p-2 align-middle">b3fkd7b4</td>
          <td className="p-2 align-middle">Maria</td>
          <td className="p-2 align-middle">São Paulo</td>
        </tr>
        <tr className="border-b">
          <td className="p-2 align-middle">b3fkd7b4</td>
          <td className="p-2 align-middle">Maria</td>
          <td className="p-2 align-middle">São Paulo</td>
        </tr>
        <tr className="border-b">
          <td className="p-2 align-middle">b3fkd7b4</td>
          <td className="p-2 align-middle">Maria</td>
          <td className="p-2 align-middle">São Paulo</td>
        </tr>
        <tr className="border-b">
          <td className="p-2 align-middle">b3fkd7b4</td>
          <td className="p-2 align-middle">Maria</td>
          <td className="p-2 align-middle">São Paulo</td>
        </tr>
        <tr className="border-b">
          <td className="p-2 align-middle">b3fkd7b4</td>
          <td className="p-2 align-middle">Maria</td>
          <td className="p-2 align-middle">São Paulo</td>
        </tr>
      </tbody>
    </table>
  )
}
