'use client'

import { useRouter } from 'next/navigation'
import Grid from './Grid.jsx'

export default function ClientGrid({ query }) {
  const router = useRouter()

  function onClickAlbum(id) {
    router.push(`/editor/${id}`)
  }

  return <Grid query={query} onclick={onClickAlbum} />
}