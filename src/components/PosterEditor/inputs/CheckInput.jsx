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

const InputBox = styled.div`
  font-size: 1em;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 15px;
  border-radius: 8px;
  outline: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 44px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px 18px;
    min-height: 48px;
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
  }
`;

const Input = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:checked {
    background-color: var(--PosterfyGreen);
    border-color: var(--PosterfyGreen);
  }

  &:checked::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 15px;

    &:checked::after {
      font-size: 14px;
    }
  }
`;

const Text = styled.p`
  font-size: 1em;
  font-weight: 500;
  margin: 0;
  cursor: pointer;
  color: ${({ active }) =>
    active ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.6)'};
  transition: color 0.3s;

  @media (max-width: 768px) {
    font-size: 1.05em;
  }
`;

function CheckInput({ title, text, value, onChange }) {
  const handleToggle = () => onChange(!value);

  return (
    <Container>
      <Title>{title}</Title>
      <InputBox onClick={handleToggle}>
        <Input checked={value} readOnly type='checkbox' />
        <Text active={value}>{text}</Text>
      </InputBox>
    </Container>
  );
}

export default CheckInput;
