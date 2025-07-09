'use client'

import { Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Navbar from '../../src/components/Navbar/Navbar.jsx'
import Anchor from '../../src/components/Anchor.jsx'
import Grid from '../../src/components/Grid.jsx'
import Footer from '../../src/components/Footer.jsx'
import Searchbar from '../../src/components/Searchbar.jsx'

function SearchContent() {
  const { t } = useTranslation()
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  function onClickAlbum(id) {
    // 调试日志：记录传入的id参数
    console.log('SearchPage onClickAlbum called with:', {
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

  const onSearch = (newQuery) => {
    if (newQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(newQuery)}`)
    } else {
      router.push('/')
    }
  }

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <Anchor text={t('anchorArt')} type={1} />
        <Searchbar onSearch={onSearch} defaultValue={query} />
        {query && (
          <>
            <h2 style={{ textAlign: 'center', margin: '40px 0 20px', fontSize: '1.5em' }}>
              {t('SearchResults', `Search results for "${query}"`)}
            </h2>
            <Grid query={query} onclick={onClickAlbum} />
          </>
        )}
      </div>
      <Footer />
    </>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  )
}