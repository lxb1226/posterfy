import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PageContent = styled.main`
  flex: 1;
  max-width: ${props => props.maxWidth || '1000px'};
  margin: 0 auto;
  padding: 120px 20px 20px;
  width: 100%;
  line-height: 1.7;
  color: #e0e0e0;

  @media (max-width: 768px) {
    padding: 100px 15px 15px;
  }
`;

export { PageContainer, PageContent };
