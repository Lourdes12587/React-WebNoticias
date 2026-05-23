import styled from "styled-components";

export const Button = styled.button`
    font-size: 0.82rem;
    background: ${({ 'aria-pressed': pressed }) => pressed ? 'var(--brand)' : 'var(--paper)'};
    color: ${({ 'aria-pressed': pressed }) => pressed ? 'white' : 'var(--ink)'};
    border: 1px solid ${({ 'aria-pressed': pressed }) => pressed ? 'var(--brand)' : 'var(--line)'};
    border-radius: 999px;
    transition: all 0.18s ease;
    padding: 12px 16px;
    font-family: var(--font-sans);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    cursor: pointer;

    &:hover{
      background: var(--brand);
      border-color: var(--brand);
      color: white;
    }
    
`;



