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

const DescriptionContent = styled.div`
  font-size: 13px;
  padding: 10px;
  cursor: pointer;
`;

const InputWrapper = styled.div``;

const Input = styled.input`
  display: block;
  width: 450px;
  height: 150px;
`;

function EditDescription() {
  const [isAddingDescription, setIsAddingDescription] = useState(false);
  const [descriptionInput, setDescriptionInput] = useState("");
  const [description, setDescription] = useState("");

  function handleSaveDescription() {
    setIsAddingDescription(false);
    setDescription(descriptionInput);
  }

  function handleCancelDescription() {
    setIsAddingDescription(false);
    description === "" ? setDescription("") : setDescription(description);
  }

  return !isAddingDescription ? (
    description === "" ? (
      <DescriptionButton onClick={() => setIsAddingDescription(true)}>
        Add a more detailed description...
      </DescriptionButton>
    ) : (
      <DescriptionContent onClick={() => setIsAddingDescription(true)}>
        {description}
      </DescriptionContent>
    )
  ) : (
    <InputWrapper>
      <Input
        type="text"
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
      ></Input>
      <Button onClick={handleSaveDescription}>Save</Button>
      <Button onClick={handleCancelDescription}>Cancel</Button>
    </InputWrapper>
  );
}

export default EditDescription;
