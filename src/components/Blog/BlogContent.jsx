import styled from 'styled-components';
import { BiTime, BiUser } from 'react-icons/bi';
import { MdArrowBack } from 'react-icons/md';

const Container = styled.article`
  max-width: 100%;
`;

const Header = styled.header`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #1db954;
  cursor: pointer;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  svg {
    font-size: 1.1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: #ccc;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1.1rem;
    color: #1db954;
  }
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
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const FeaturedBadge = styled.div`
  background: linear-gradient(135deg, #1db954, #1aa34a);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  width: fit-content;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Content = styled.div`
  color: #e0e0e0;
  line-height: 1.7;
  font-size: 1.1rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    margin: 2rem 0 1rem 0;
    font-weight: 600;
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.7rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  h4 {
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: #1db954;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ul,
  ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    border-left: 4px solid #1db954;
    margin: 2rem 0;
    padding: 1rem 1.5rem;
    background: rgba(29, 185, 84, 0.1);
    border-radius: 0 8px 8px 0;
    font-style: italic;
  }

  code {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    font-size: 0.9em;
  }

  pre {
    background: rgba(0, 0, 0, 0.5);
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 2rem 0;
    border: 1px solid rgba(255, 255, 255, 0.1);

    code {
      background: none;
      padding: 0;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 2rem 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;

    th,
    td {
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 0.75rem;
      text-align: left;
    }

    th {
      background: rgba(29, 185, 84, 0.2);
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    h1 {
      font-size: 1.7rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.3rem;
    }
    h4 {
      font-size: 1.1rem;
    }
  }
`;

function BlogContent({ post, onGoBack }) {
  const formatDate = dateString => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Container>
      <BackButton onClick={onGoBack}>
        <MdArrowBack />
        Back to Blog
      </BackButton>

      <Header>
        {post.featured && <FeaturedBadge>Featured</FeaturedBadge>}

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
              <span>{post.readingTime} min read</span>
            </MetaItem>
          )}
        </Meta>

        {post.tags && post.tags.length > 0 && (
          <Tags>
            {post.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        )}
      </Header>

      <Content dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </Container>
  );
}

export default BlogContent;
