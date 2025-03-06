import { useState } from "react";
import styled from "styled-components";
import Button from "../../../ui/Button";

const DescriptionButton = styled.div`
  font-size: 13px;
  padding: 10px 100px 30px 10px;
  background-color: #fff;
  border: 3px solid var(--border);

  &:hover {
    background-color: var(--hover);
  }
`;

const InputWrapper = styled.div``;

const Input = styled.input`
  display: block;
  width: 450px;
  height: 150px;
`;

function EditDescription() {
  const [isAddingDescription, setIsAddingDescription] = useState(false);
  const [description, setDescription] = useState("s");

  function handleCancelDescription(params) {
    setIsAddingDescription(false);
    setDescription("");
  }

  return !isAddingDescription ? (
    <DescriptionButton onClick={() => setIsAddingDescription(true)}>
      Add a more detailed description...
    </DescriptionButton>
  ) : (
    <InputWrapper>
      <Input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></Input>
      <Button onClick={() => setIsAddingDescription(false)}>Save</Button>
      <Button onClick={handleCancelDescription}>Cancel</Button>
    </InputWrapper>
  );
}

export default EditDescription;
