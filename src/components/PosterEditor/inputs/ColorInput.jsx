/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  @media (max-width: 768px) {
    margin: 8px 0;
  }
`;

const Title = styled.p`
  font-size: 1em;
  font-weight: 500;
  margin-left: 5px;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    font-size: 1.05em;
    margin-bottom: 10px;
  }
`;

const ValueDiv = styled.div`
  font-size: 1em;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 15px;
  border-radius: 8px;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  min-height: 44px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:focus {
    border-color: var(--PosterfyGreen);
    box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px 18px;
    min-height: 48px;
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
  }
`;

const ColorPreview = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 15px;
  }
`;

const Color = styled.p`
  font-size: 1em;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.05em;
  }
`;

function ColorInput({ title, value, onClick }) {
  return (
    <Container>
      <Title>{title}</Title>
      <ValueDiv onClick={onClick}>
        <ColorPreview style={{ backgroundColor: value }} />
        <Color>{value}</Color>
      </ValueDiv>
    </Container>
  );
}

export default ColorInput;
