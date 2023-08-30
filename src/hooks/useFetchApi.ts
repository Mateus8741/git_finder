import { useState } from 'react'
import { api } from '../api/apiConfig'

export function useFetchApi<T>(endPoint: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [Error, setError] = useState<boolean | null>(null)

  async function request() {
    try {
      setError(null)
      setLoading(true)
      const { data } = await api.get<T>(endPoint)
      setData(data)
    } catch (error) {
      setError(true)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, Error, request }
}

// import { useQuery } from '@tanstack/react-query'
// import { api } from '../api/apiConfig'

// export function useFetchApi<T>(endPoint: string) {
//   const { data, isLoading, error, refetch } = useQuery({
//     queryKey: ['fetchApi'],
//     queryFn: request,
//   })

//   async function request() {
//     const { data } = await api.get<T>(endPoint)
//     return data
//   }

//   return { data, isLoading, error, request, refetch }
// }
