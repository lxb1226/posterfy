import styled from 'styled-components';

const HeroContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fff;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
`;

const Accent = styled.span`
  color: #1db954;
  font-weight: 600;
`;

function BlogHero() {
  return (
    <HeroContainer>
      <Title>
        Posterfy <Accent>Blog</Accent>
      </Title>
      <Subtitle>
        Discover design tips, music industry insights, and tutorials for
        creating stunning album posters. Learn the art of music visualization
        and poster design.
      </Subtitle>
    </HeroContainer>
  );
}

export default BlogHero;
