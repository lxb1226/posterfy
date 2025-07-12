'use client';

/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
`;

const Bar = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 80%;
  margin-inline: auto;
  height: 50px;
  margin-block: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.3s ease;

  &:focus-within {
    background-color: rgba(255, 255, 255, 0.08);
    border-color: var(--PosterfyGreen);
    box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.2);
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
    height: 56px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    width: 98%;
    height: 52px;
    margin-block: 15px;
  }
`;

const SearchIcon = styled(FaSearch)`
  font-size: 1.35em;
  color: rgba(255, 255, 255, 0.4);
  margin-inline: 15px;
  min-width: 20px;

  @media (max-width: 768px) {
    font-size: 1.4em;
    margin-inline: 18px;
  }

  @media (max-width: 480px) {
    margin-inline: 15px;
  }
`;
const SendIcon = styled(IoSend)`
  font-size: 1.35em;
  color: rgba(255, 255, 255, 0.4);
  margin-inline: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 20px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;

  &:hover,
  &:focus {
    color: var(--PosterfyGreen);
    background: rgba(29, 185, 84, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 1.4em;
    margin-inline: 12px;
    min-height: 48px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    margin-inline: 10px;
    padding: 8px;
  }
`;
const Spanbar = styled.span`
  width: 1px;
  height: 70%;
  background-color: rgba(255, 255, 255, 0.15);

  @media (max-width: 480px) {
    display: none;
  }
`;

const Input = styled.input`
  background-color: transparent;
  text-decoration: none;
  border: none;
  margin-left: 15px;
  font-size: 1.2em;
  font-weight: 500;
  outline: none;
  color: rgba(255, 255, 255, 0.9);
  width: 100%;
  min-height: 44px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
    font-weight: 400;
  }

  @media (max-width: 768px) {
    font-size: 1.3em;
    margin-left: 18px;
    min-height: 48px;
  }

  @media (max-width: 480px) {
    font-size: 1.1em;
    margin-left: 15px;
  }
`;

function Searchbar({ onSearch, defaultValue = '' }) {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState(defaultValue);

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      onSearch(searchValue);
    }
  };

  return (
    <Container>
      <Bar>
        <SearchIcon />
        <Spanbar />
        <Input
          placeholder={t('SearchPlaceholder')}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SendIcon onClick={() => onSearch(searchValue)} />
      </Bar>
    </Container>
  );
}

export default Searchbar;
