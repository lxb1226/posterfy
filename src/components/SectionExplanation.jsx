/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-inline: auto;
`;

const Title = styled.h3`
  color: white;
  font-size: 3em;
  font-weight: bolder;
  white-space: pre-line;
`;

const Paragraph = styled.p`
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  opacity: 0.5;
  white-space: pre-line;
  padding-left: auto;
  width: 60%;
  height: min-content;
  padding-top: auto;
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const TextBox = styled.div`
  display: flex;
`;

function SectionExplanation({ title, paragraph }) {
  return (
    <Container>
      <TextBox>
        <Title>{title}</Title>
      </TextBox>
      <TextBox>
        <Paragraph>{paragraph}</Paragraph>
      </TextBox>
    </Container>
  );
}

export default SectionExplanation;
