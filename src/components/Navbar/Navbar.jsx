'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import Icon from '../icons/icon';
import LanguageSelector from './Languageselector';
import ThemeSelector from './ThemeSelector';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: ${({ $scrolled }) =>
    $scrolled ? 'rgba(0, 0, 0, 0.2)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(10px)' : 'none')};
  padding: ${({ $scrolled }) => ($scrolled ? '12px 0' : '20px 0')};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;

  @media (max-width: 768px) {
    padding-inline: 40px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: var(--PosterfyGreen);
    background: rgba(29, 185, 84, 0.1);
  }

  ${({ $active }) =>
    $active &&
    `
    color: var(--PosterfyGreen);
    background: rgba(29, 185, 84, 0.15);
  `}

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

const BrandName = styled.h1`
  font-weight: bolder;
  margin-left: 20px;
  font-size: 1.3em;
  color: var(--PosterfyGreen);
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const CenterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Divider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(0, 255, 0, 0.1);
  opacity: ${({ $scrolled }) => ($scrolled ? '1' : '0')};
  transition: opacity 0.3s ease;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  min-height: 44px;
  min-width: 44px;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--PosterfyGreen);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenuHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`;

const MobileNavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;

  &:hover {
    color: var(--PosterfyGreen);
    background: rgba(29, 185, 84, 0.1);
    transform: translateY(-2px);
  }

  ${({ $active }) =>
    $active &&
    `
    color: var(--PosterfyGreen);
    background: rgba(29, 185, 84, 0.15);
  `}
`;

const MobileMenuFooter = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <NavbarContainer $scrolled={scrolled}>
        <NavbarContent>
          <LogoContainer>
            <Link
              href='/'
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
              onClick={handleMobileNavClick}
            >
              <Icon fill={'#01b755'} width={'40px'} height={'44.05px'} />
              <BrandName>Posterfy</BrandName>
            </Link>
          </LogoContainer>

          <CenterSection>
            <Navigation>
              <NavLink href='/' $active={pathname === '/'}>
                Home
              </NavLink>
              <NavLink href='/search' $active={pathname === '/search'}>
                Search
              </NavLink>
              <NavLink href='/blog' $active={pathname?.startsWith('/blog')}>
                Blog
              </NavLink>
            </Navigation>
          </CenterSection>

          <RightSection>
            <ThemeSelector />
            <LanguageSelector />
            <MobileMenuButton onClick={handleMobileMenuToggle}>
              {mobileMenuOpen ? <HiX /> : <HiMenu />}
            </MobileMenuButton>
          </RightSection>
        </NavbarContent>
        <Divider $scrolled={scrolled} />
      </NavbarContainer>

      <MobileMenu $isOpen={mobileMenuOpen}>
        <MobileMenuHeader>
          <Link
            href='/'
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
            onClick={handleMobileNavClick}
          >
            <Icon fill={'#01b755'} width={'32px'} height={'35px'} />
            <BrandName style={{ fontSize: '1.1em', marginLeft: '12px' }}>
              Posterfy
            </BrandName>
          </Link>
          <MobileMenuButton onClick={handleMobileMenuToggle}>
            <HiX />
          </MobileMenuButton>
        </MobileMenuHeader>

        <MobileNavLink
          href='/'
          $active={pathname === '/'}
          onClick={handleMobileNavClick}
        >
          Home
        </MobileNavLink>
        <MobileNavLink
          href='/search'
          $active={pathname === '/search'}
          onClick={handleMobileNavClick}
        >
          Search
        </MobileNavLink>
        <MobileNavLink
          href='/blog'
          $active={pathname?.startsWith('/blog')}
          onClick={handleMobileNavClick}
        >
          Blog
        </MobileNavLink>

        <MobileMenuFooter>
          <ThemeSelector />
          <LanguageSelector />
        </MobileMenuFooter>
      </MobileMenu>
    </>
  );
}

export default Navbar;
