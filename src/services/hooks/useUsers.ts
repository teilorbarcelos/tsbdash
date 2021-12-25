import { useQuery } from "react-query"
import { api } from "../../services/api"

interface User {
  id: string
  name: string
  email: string
  createdAt: string
}

interface GetUsersResponse {
  users: User[]
  totalCount: number
}

async function getUsers(currentPage: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('/users', {
    params: {
      page: currentPage
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map((user: User) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    users,
    totalCount
  }
}

export function useUsers(currentPage: number) {
  return useQuery('users', () => getUsers(currentPage),
    {
      staleTime: 1000 * 5 // 5seconds
    }
  )
}