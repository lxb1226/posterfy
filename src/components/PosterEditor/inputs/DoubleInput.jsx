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

const InputTitle = styled.input`
  font-size: 1em;
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: 500;
  margin-left: 5px;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.6);
  min-height: 24px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 1.05em;
    margin-bottom: 10px;
    min-height: 28px;
  }
`;

const Input = styled.input`
  font-size: 1em;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 12px 15px;
  border-radius: 8px;
  outline: none;
  min-height: 44px;
  transition: all 0.3s ease;

  &:focus {
    background-color: rgba(255, 255, 255, 0.08);
    border-color: var(--PosterfyGreen);
    box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 1.1em;
    padding: 15px 18px;
    min-height: 48px;
  }

  @media (max-width: 480px) {
    font-size: 1.05em;
    padding: 14px 16px;
  }
`;

function DoubleInput({ title, value, onChangeTitle, onChangeDate }) {
  return (
    <Container>
      <InputTitle placeholder={title} value={title} onChange={onChangeTitle} />
      <Input placeholder={title} value={value} onChange={onChangeDate} />
    </Container>
  );
}

export default DoubleInput;
