import styled from 'styled-components';

export const FooterContainerStyled = styled.footer`
  position: relative;
  display: grid;
  gap: 34px;
  padding: 4.5rem 1rem 7rem;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(244, 196, 0, 0.12), transparent 28rem),
    var(--brand);
  color: white;
  border-top: 5px solid var(--accent);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
    background-size: 42px 42px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 80%);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .footer-inner,
  .footer-bottom {
    position: relative;
    width: min(100% - 32px, 1340px);
    margin-inline: auto;
  }

  .footer-inner {
    display: grid;
    grid-template-columns: minmax(240px, 1.1fr) minmax(360px, 1.5fr) minmax(280px, 0.95fr);
    gap: 42px;
    align-items: start;
  }

  .footer-brand {
    display: grid;
    gap: 18px;
  }

  .footer-logo {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    width: max-content;
  }

  .footer-logo > span {
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    border: 1px solid rgba(255,255,255,0.22);
    border-radius: 999px;
    background: rgba(255,255,255,0.08);
    color: var(--accent);
    box-shadow: inset 0 0 0 5px rgba(255,255,255,0.08);
  }

  .footer-logo svg {
    width: 1.65rem;
    height: 1.65rem;
  }

  .footer-logo strong {
    font-family: var(--font-display);
    font-size: 1.45rem;
    line-height: 1;
    letter-spacing: 0;
  }

  .footer-logo strong span {
    color: var(--accent);
  }

  .footer-brand p,
  .footer-newsletter p {
    max-width: 30rem;
    color: #d7dbea;
    line-height: 1.55;
  }

  .footer-newsletter .newsletter-status {
    color: var(--accent);
    font-weight: 800;
  }

  .footer-live {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    width: max-content;
    padding: 9px 12px;
    border: 1px solid rgba(244,196,0,0.35);
    border-radius: 999px;
    color: var(--accent);
    font-size: 0.82rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .footer-nav {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 26px;
  }

  h2 {
    margin-bottom: 13px;
    color: white;
    font-size: 0.86rem;
    font-weight: 900;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  ul {
    display: grid;
    gap: 9px;
    list-style: none;
  }

  li a {
    color: #d7dbea;
    font-weight: 700;
    transition: color 0.18s ease, padding-left 0.18s ease;
  }

  li a:hover {
    color: var(--accent);
    padding-left: 4px;
  }

  .footer-newsletter {
    display: grid;
    gap: 14px;
  }

  .footer-newsletter form {
    display: grid;
    gap: 8px;
  }

  .footer-newsletter label {
    color: var(--accent);
    font-size: 0.78rem;
    font-weight: 900;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .footer-newsletter form div {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 10px;
    padding: 8px;
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 999px;
    background: rgba(255,255,255,0.08);
  }

  .footer-newsletter form svg {
    color: var(--accent);
    margin-left: 8px;
  }

  .footer-newsletter input {
    min-width: 0;
    border: 0;
    background: transparent;
    color: white;
    outline: 0;
  }

  .footer-newsletter input::placeholder {
    color: #b7bed4;
  }

  .footer-newsletter button {
    min-height: 38px;
    border: 0;
    border-radius: 999px;
    background: var(--accent);
    color: var(--brand);
    padding: 0 15px;
    font-weight: 900;
    cursor: pointer;
  }

  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding-top: 24px;
    border-top: 1px solid rgba(255,255,255,0.14);
    color: #bfc6dc;
    font-size: 0.9rem;
  }

  .footer-bottom ul {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  @media (max-width: 1020px) {
    .footer-inner {
      grid-template-columns: 1fr 1fr;
    }

    .footer-newsletter {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 720px) {
    padding-top: 3.5rem;

    .footer-inner,
    .footer-nav,
    .footer-bottom {
      grid-template-columns: 1fr;
    }

    .footer-inner {
      gap: 32px;
    }

    .footer-bottom {
      align-items: flex-start;
      flex-direction: column;
    }

    .footer-newsletter form div {
      grid-template-columns: auto 1fr;
      border-radius: 14px;
    }

    .footer-newsletter button {
      grid-column: 1 / -1;
      width: 100%;
    }
  }
`;

export const LinksContainerStyled = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 4px;

  a {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    color: white;
    background: rgba(255, 255, 255, 0.1);
    transition: background-color 0.18s ease, color 0.18s ease, transform 0.18s ease;
  }

  a:hover {
    background: var(--accent);
    color: var(--brand);
    transform: translateY(-2px);
  }

  svg {
    width: 1.35rem;
    height: 1.35rem;
  }
`;
