import styled from "styled-components";

const StyledInput = styled.input`
  all: unset;
  width: 100%;
  border: none;
  display: inline-block;
`;

function ControlledInput({ value, onChange, onBlur, onKeyDown }) {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      autoFocus
    />
  );
}

export default ControlledInput;
