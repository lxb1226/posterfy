'use client';

import { useRouter } from 'next/navigation';
import Grid from './Grid.jsx';

export default function ClientGrid({ query }) {
  const router = useRouter();

  function onClickAlbum(id) {
    // 调试日志：记录传入的id参数
    console.log('ClientGrid onClickAlbum called with:', {
      id,
      type: typeof id,
      stringified: String(id),
      isObject: typeof id === 'object',
      objectKeys: typeof id === 'object' ? Object.keys(id) : null,
    });

    // 检查是否传入了对象而不是ID
    if (typeof id === 'object' && id !== null) {
      console.error('❌ ERROR: Object passed instead of ID:', id);
      console.error('❌ This will cause [object Object] in URL');
      return; // 阻止导航
    }

    // 确保id是字符串，防止传递对象导致[object Object]错误
    const albumId = String(id);
    console.log('Navigating to:', `/editor/${albumId}`);
    router.push(`/editor/${albumId}`);
  }

  return <Grid query={query} onclick={onClickAlbum} />;
}
