'use client';

import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Icon from './icons/icon';
import {
  FaGithub,
  FaHeart,
  FaShieldAlt,
  FaFileContract,
  FaInfoCircle,
  FaEnvelope,
  FaNewspaper,
  FaPalette,
  FaSitemap,
} from 'react-icons/fa';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.3; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Container = styled.div`
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 60px 0 40px;
  margin-top: 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--PosterfyGreen),
      transparent
    );
  }

  @media (max-width: 768px) {
    padding: 40px 0 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 0 25px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 40px;
  padding: 0 20px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  animation: ${slideIn} 0.5s ease-out;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const LinksSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 30px;
  animation: ${slideIn} 0.5s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h3 {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 30px;
      height: 2px;
      background: var(--PosterfyGreen);
      border-radius: 1px;
    }

    @media (max-width: 768px) {
      text-align: center;

      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;

  svg {
    font-size: 0.85rem;
    opacity: 0.8;
  }

  &:hover {
    color: var(--PosterfyGreen);
    transform: translateX(5px);

    svg {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const ExternalLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;

  svg {
    font-size: 0.85rem;
    opacity: 0.8;
  }

  &:hover {
    color: var(--PosterfyGreen);
    transform: translateX(5px);

    svg {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  animation: ${slideIn} 0.5s ease-out;
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;

  @media (max-width: 1024px) {
    grid-column: span 2;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
    align-items: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const GithubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  padding: 10px 18px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 1.2em;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border-color: var(--PosterfyGreen);

    svg {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
    padding: 8px 14px;
  }
`;

const BottomSection = styled.div`
  grid-column: 1 / -1;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${slideIn} 0.5s ease-out;
  animation-delay: 0.6s;
  opacity: 0;
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

const AnimatedIconWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 15px;

  .icon-main {
    animation: ${float} 3s ease infinite;
  }

  .icon-shadow {
    animation: ${pulse} 3s ease infinite;
  }

  @media (max-width: 768px) {
    margin: 0 auto 15px;
  }
`;

const IconMain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconShadow = styled.div`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 15px;
  background: var(--PosterfyGreen);
  filter: blur(12px);
  opacity: 0.3;
  border-radius: 50%;
  transition: all 0.3s ease;
`;

const CreditText = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 300px;
  position: relative;

  .credit-content {
    display: inline-block;
    background: linear-gradient(90deg, #ffffff, var(--PosterfyGreen), #ffffff);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${shimmer} 6s linear infinite;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .emoji {
    display: inline-block;
    margin: 0 4px;
    transition: transform 0.3s ease;
  }

  &:hover .emoji {
    transform: scale(1.2) rotate(10deg);
  }

  a {
    color: var(--PosterfyGreen);
    text-decoration: none;
    font-weight: 700;
    position: relative;
    transition: all 0.3s ease;

    &:hover {
      color: white;
      text-shadow: 0 0 8px var(--PosterfyGreen);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--PosterfyGreen);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 250px;
  }
`;

const CopyrightText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);

  svg {
    color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <FooterContent>
        {/* Brand Section */}
        <BrandSection>
          <AnimatedIconWrapper>
            <IconShadow className='icon-shadow' />
            <IconMain className='icon-main'>
              <Icon fill={'white'} width={'70px'} height={'62px'} />
            </IconMain>
          </AnimatedIconWrapper>

          <CreditText>
            <div className='credit-content'>
              {t('MadeBy')}{' '}
              <a
                href='https://github.com/avictormorais'
                target='_blank'
                rel='noopener noreferrer'
              >
                Victor
              </a>
            </div>
          </CreditText>
        </BrandSection>

        {/* Links Section */}
        <LinksSection>
          {/* Company Links */}
          <LinkColumn>
            <h3>Company</h3>
            <FooterLink href='/about'>
              <FaInfoCircle />
              About Us
            </FooterLink>
            <FooterLink href='/contact'>
              <FaEnvelope />
              Contact
            </FooterLink>
            <FooterLink href='/blog'>
              <FaNewspaper />
              Blog
            </FooterLink>
            <ExternalLink
              href='https://github.com/avictormorais/posterfy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
              GitHub
            </ExternalLink>
          </LinkColumn>

          {/* Product Links */}
          <LinkColumn>
            <h3>Product</h3>
            <FooterLink href='/'>
              <FaPalette />
              Create Poster
            </FooterLink>
            <FooterLink href='/#features'>Features</FooterLink>
            <FooterLink href='/#faq'>FAQ</FooterLink>
            <FooterLink href='/sitemap'>
              <FaSitemap />
              Site Map
            </FooterLink>
          </LinkColumn>

          {/* Legal Links */}
          <LinkColumn>
            <h3>Legal</h3>
            <FooterLink href='/privacy'>
              <FaShieldAlt />
              Privacy Policy
            </FooterLink>
            <FooterLink href='/terms'>
              <FaFileContract />
              Terms of Service
            </FooterLink>
          </LinkColumn>
        </LinksSection>

        {/* Social Section */}
        <SocialSection>
          <SocialLinks>
            <GithubLink
              href='https://github.com/avictormorais/posterfy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub /> {t('ViewGitHub', 'GitHub')}
            </GithubLink>
          </SocialLinks>
        </SocialSection>

        {/* Bottom Section */}
        <BottomSection>
          <CopyrightText>
            <FaHeart /> © {currentYear} Posterfy.{' '}
            {t('AllRights', 'All rights reserved.')}
          </CopyrightText>

          <div
            style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}
          >
            Free • Open Source • Educational
          </div>
        </BottomSection>
      </FooterContent>
    </Container>
  );
}

export default Footer;
