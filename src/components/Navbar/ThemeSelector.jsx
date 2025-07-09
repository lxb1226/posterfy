'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {
  FaPalette,
  FaMoon,
  FaSun,
  FaLeaf,
  FaFire,
  FaWater,
} from 'react-icons/fa';

const ThemeSelectorContainer = styled.div`
  position: relative;
`;

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  font-size: 1.2em;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--PosterfyGreen);
  }
`;

const ThemeDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px;
  min-width: 200px;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)'};
  transition: all 0.2s ease;
  z-index: 1000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const ThemeTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9em;
  font-weight: 600;
  color: white;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    color: var(--PosterfyGreen);
  }
`;

const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const ThemeOption = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  border: none;
  border-radius: 8px;
  background: ${props => props.color};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 60px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: ${props =>
      props.$active
        ? '2px solid var(--PosterfyGreen)'
        : '2px solid transparent'};
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  svg {
    font-size: 1.1em;
    color: white;
    margin-bottom: 4px;
    opacity: 0.9;
  }

  span {
    font-size: 0.75em;
    color: white;
    opacity: 0.9;
    font-weight: 500;
    text-align: center;
  }
`;

function ThemeSelector() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('theme-dark');

  useEffect(() => {
    // 只在客户端执行
    const savedTheme = localStorage.getItem('theme') || 'theme-dark';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.className = theme;
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (!event.target.closest('[data-theme-selector]')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = e => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleThemeChange = newTheme => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const themes = [
    { id: 'theme-dark', name: 'Dark', color: '#070815', icon: <FaMoon /> },
    { id: 'theme-fy', name: 'Midnight', color: '#151515', icon: <FaSun /> },
    { id: 'theme-rose', name: 'Rose', color: '#232136', icon: <FaLeaf /> },
    {
      id: 'theme-carmesin',
      name: 'Crimson',
      color: '#1f0c19',
      icon: <FaFire />,
    },
    { id: 'theme-brown', name: 'Earth', color: '#1e1516', icon: <FaWater /> },
  ];

  const currentTheme = themes.find(t => t.id === theme);

  return (
    <ThemeSelectorContainer data-theme-selector>
      <ThemeButton
        onClick={toggleDropdown}
        aria-label={t('Theme', 'Theme')}
        title={t('Theme', 'Theme')}
      >
        {currentTheme?.icon || <FaPalette />}
      </ThemeButton>

      <ThemeDropdown $isOpen={isOpen}>
        <ThemeTitle>
          <FaPalette /> {t('Theme', 'Theme')}
        </ThemeTitle>

        <ThemeGrid>
          {themes.map(themeOption => (
            <ThemeOption
              key={themeOption.id}
              color={themeOption.color}
              $active={theme === themeOption.id}
              onClick={() => handleThemeChange(themeOption.id)}
              aria-label={`${t('SwitchTo', 'Switch to')} ${themeOption.name} ${t('Theme', 'Theme').toLowerCase()}`}
            >
              {themeOption.icon}
              <span>
                {t(
                  `ThemeName_${themeOption.id.replace('theme-', '')}`,
                  themeOption.name
                )}
              </span>
            </ThemeOption>
          ))}
        </ThemeGrid>
      </ThemeDropdown>
    </ThemeSelectorContainer>
  );
}

export default ThemeSelector;
