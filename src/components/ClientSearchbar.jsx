'use client'

import { useRouter } from 'next/navigation'
import Searchbar from './Searchbar.jsx'

export default function ClientSearchbar({ defaultValue = '' }) {
  const router = useRouter()

  const onSearch = (query) => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return <Searchbar onSearch={onSearch} defaultValue={defaultValue} />
}