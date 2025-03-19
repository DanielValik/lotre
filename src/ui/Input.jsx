import styled from "styled-components";

const StyledInput = styled.input`
  padding: 5px 10px;
  border: 1px solid var(--border);
  border-radius: 5px;
  &:hover {
    border-color: var(--accent);
  }
`;

function Input({ value, placeholder }) {
  return (
    <StyledInput
      type="text"
      value={value}
      placeholder={placeholder}
    ></StyledInput>
  );
}

export default Input;
