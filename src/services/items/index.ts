import useSWR from 'swr'
import { API_ENDPOINT } from '@/lib/constants/env'
import { Item } from '@/types/api'

export const useFetchItems = () =>
  useSWR<{ items: Item[] }>(`${API_ENDPOINT}/items`)
