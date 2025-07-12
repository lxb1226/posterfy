import Link from 'next/link';

export default function BlogCard({ post }) {
  const formatDate = dateString => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link href={`/blog/${post.slug}`} className='blog-card'>
      {post.featured && (
        <div className='blog-card-featured-badge'>Featured</div>
      )}

      <h2 className='blog-card-title'>{post.title}</h2>

      <div className='blog-card-meta'>
        <div className='blog-card-meta-item'>
          <span>📅</span>
          <span>{formatDate(post.date)}</span>
        </div>

        <div className='blog-card-meta-item'>
          <span>👤</span>
          <span>{post.author}</span>
        </div>

        {post.readingTime && (
          <div className='blog-card-meta-item'>
            <span>⏱️</span>
            <span>{post.readingTime} min read</span>
          </div>
        )}
      </div>

      {post.excerpt && <p className='blog-card-excerpt'>{post.excerpt}</p>}

      {post.tags && post.tags.length > 0 && (
        <div className='blog-card-tags'>
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} className='blog-card-tag'>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className='blog-card-read-more'>Read more →</div>
    </Link>
  );
}
