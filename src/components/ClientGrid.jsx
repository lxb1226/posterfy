'use client'

import { useRouter } from 'next/navigation'
import Grid from './Grid.jsx'

export default function ClientGrid({ query }) {
  const router = useRouter()

  function onClickAlbum(id) {
    // 调试日志：记录传入的id参数
    console.log('ClientGrid onClickAlbum called with:', {
      id,
      type: typeof id,
      isString: typeof id === 'string',
      stringified: String(id)
    })
    
    // 确保id是字符串，防止传递对象导致[object Object]错误
    const albumId = typeof id === 'string' ? id : String(id)
    
    console.log('Navigating to:', `/editor/${albumId}`)
    router.push(`/editor/${albumId}`)
  }

  return <Grid query={query} onclick={onClickAlbum} />
}