import styled from 'styled-components';
import Link from 'next/link';
import { BiTime, BiUser, BiTag } from 'react-icons/bi';

const Card = styled.article`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  height: fit-content;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(29, 185, 84, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  color: #fff;
  font-weight: 600;
  line-height: 1.4;
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #ccc;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 1rem;
    color: #1db954;
  }
`;

const Excerpt = styled.p`
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background: rgba(29, 185, 84, 0.2);
  color: #1db954;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const FeaturedBadge = styled.div`
  background: linear-gradient(135deg, #1db954, #1aa34a);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  width: fit-content;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ReadMore = styled.div`
  color: #1db954;
  font-weight: 500;
  margin-top: 1rem;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

function BlogCard({ post }) {
  const formatDate = dateString => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <Card>
        {post.featured && <FeaturedBadge>Featured</FeaturedBadge>}

        <CardHeader>
          <Title>{post.title}</Title>

          <Meta>
            <MetaItem>
              <BiTime />
              <span>{formatDate(post.date)}</span>
            </MetaItem>

            <MetaItem>
              <BiUser />
              <span>{post.author}</span>
            </MetaItem>

            {post.readingTime && (
              <MetaItem>
                <BiTag />
                <span>{post.readingTime} min read</span>
              </MetaItem>
            )}
          </Meta>
        </CardHeader>

        {post.excerpt && <Excerpt>{post.excerpt}</Excerpt>}

        {post.tags && post.tags.length > 0 && (
          <Tags>
            {post.tags.slice(0, 3).map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        )}

        <ReadMore>Read more →</ReadMore>
      </Card>
    </Link>
  );
}

export default BlogCard;
