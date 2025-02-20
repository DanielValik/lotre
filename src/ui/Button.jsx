import styled from "styled-components";

const StyledButton = styled.button`
  display: inline;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  background: var(--background);
  color: var(--text-primary);

  &:hover {
    background: var(--accent);
    color: var(--white);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

function Button({ children, onClick, additionalStyle }) {
  return (
    <StyledButton onClick={onClick} style={additionalStyle}>
      {children}
    </StyledButton>
  );
}

export default Button;
