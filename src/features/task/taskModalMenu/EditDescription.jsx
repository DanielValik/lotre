import { useState } from "react";
import styled from "styled-components";
import TrixInput from "../../../ui/TrixInput";
import DOMPurify from "dompurify";

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

const InputWrapper = styled.div`
  max-width: 500px;
  border: 1px solid var(--border);
  padding: 5px;
`;

const Input = styled.input`
  display: block;
  width: 450px;
  height: 150px;
`;

function EditDescription() {
  const [isAddingDescription, setIsAddingDescription] = useState(false);
  const [descriptionInput, setDescriptionInput] = useState("");
  const [description, setDescription] = useState("");
  console.log(descriptionInput);

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
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        ></div>
      </DescriptionContent>
    )
  ) : (
    <InputWrapper>
      <TrixInput
        inputContent={descriptionInput}
        setInputContent={setDescriptionInput}
        onSave={handleSaveDescription}
        onCancel={handleCancelDescription}
      />
    </InputWrapper>
  );
}

export default EditDescription;
