import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
    width: 100%;
    min-height: 82px;
    position: sticky;
    top:0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.96);
    border-bottom: 1px solid var(--line);
    backdrop-filter: blur(16px);
    a{
      text-decoration: none;
    }
`;
   
export const NavbarWrapper = styled.div`
  margin:auto;      
  width: min(100% - 32px, 1340px);
  min-height: 82px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

export const IconLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--ink);
  white-space: nowrap;
  min-width: max-content;

  .brand-mark {
    position: relative;
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border: 1px solid rgba(29, 35, 64, 0.16);
    border-radius: 50%;
    background:
      radial-gradient(circle at 34% 28%, rgba(244, 196, 0, 0.32), transparent 28px),
      var(--brand);
    color: var(--accent);
    box-shadow: inset 0 0 0 5px #ffffff, 0 8px 24px rgba(29, 35, 64, 0.14);
  }

  .brand-mark::after {
    content: "";
    position: absolute;
    right: -4px;
    bottom: 5px;
    width: 12px;
    height: 12px;
    border: 3px solid #ffffff;
    border-radius: 50%;
    background: var(--accent);
  }

  svg {
    width: 1.55rem;
    height: 1.55rem;
  }

  .brand-copy {
    display: grid;
    gap: 1px;
  }

  .brand-name {
    font-family: var(--font-display);
    font-size: 1.18rem;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0;
    color: var(--brand);
  }

  .brand-name span {
    color: var(--accent-dark);
  }

  .brand-kicker {
    color: var(--muted);
    font-family: var(--font-sans);
    font-size: 0.68rem;
    font-weight: 900;
    letter-spacing: 0.16em;
    line-height: 1;
    text-transform: uppercase;
  }

  @media screen and (max-width: 520px) {
    gap: 9px;

    .brand-mark {
      width: 42px;
      height: 42px;
      box-shadow: inset 0 0 0 4px #ffffff, 0 8px 18px rgba(29, 35, 64, 0.12);
    }

    .brand-name {
      font-size: 1rem;
    }

    .brand-kicker {
      font-size: 0.58rem;
      letter-spacing: 0.12em;
    }
  }
`;

export const IconLogoMobile = styled.button`
    display: none;
    border: 1px solid var(--line);
    background: var(--paper);
    border-radius: 999px;
    color: var(--ink);
    min-width: 44px;
    min-height: 44px;
    place-items: center;
    cursor: pointer;

  @media screen and (max-width: 960px){
    display: grid;
    font-size: 1.1rem;  
 }

`;


export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  list-style: none;

  @media screen and (max-width: 960px) {
    width: min(100%, 420px);
    height: calc(100vh - 82px);
    position: absolute;
    top: 82px;
    left: ${({click}) => (click ? 0 : "-100%")};
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 18px;
    transition: left 0.25s ease;
    background-color: var(--brand);
    box-shadow: 24px 24px 80px rgba(0, 0, 0, 0.24);
  }

`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  a {
    color: var(--muted);
    padding: 12px 10px;
    border-radius: 999px;
    transition: color 0.18s ease, background-color 0.18s ease;
  }

  a:hover,
  a.active {
    color: var(--brand);
  }

  .podcast-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--ink);
    border: 2px solid var(--accent);
    background: #fff8d6;
  }

  &.nav-icon-item a {
    font-size: 1rem;
    color: var(--brand);
  }

  @media screen and (max-width: 960px){
      width: 100%;
      justify-content: stretch;

      a {
        width: 100%;
        color: white;
        border-radius: 8px;
        padding: 16px;
      }

      a:hover,
      a.active {
        color: white;
        background: rgba(255, 255, 255, 0.12);
      }

      .podcast-link {
        color: white;
        background: transparent;
      }

      &.nav-icon-item {
        display: none;
      }
    
 }

`;
