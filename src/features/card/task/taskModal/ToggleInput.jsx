import styled from "styled-components";
import { useState } from "react";
import TrixInput from "../../../../ui/TrixInput";
import DOMPurify from "dompurify";

const LabelButton = styled.div`
  font-size: 13px;
  padding: 10px 100px 30px 10px;
  background-color: #fff;
  border: 3px solid var(--border);
  border-radius: 5px;

  &:hover {
    background-color: var(--hover);
  }
`;

const Content = styled.div`
  font-size: 13px;
  padding: 10px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  max-width: 500px;
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 5px;
`;

function ToggleInput({ label, content, setContent }) {
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputData, setInputData] = useState(content);

  function handleSaveBtn() {
    setIsInputActive(false);
    setContent(inputData);
    setInputData("");
  }

  function handleCancelBtn() {
    setIsInputActive(false);
    content === "" ? setContent("") : setContent(content);
  }

  return !isInputActive ? (
    content === "" ? (
      <LabelButton onClick={() => setIsInputActive(true)}>{label}</LabelButton>
    ) : (
      <Content onClick={() => setIsInputActive(true)}>
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        ></div>
      </Content>
    )
  ) : (
    <InputWrapper>
      <TrixInput
        inputContent={inputData}
        setInputContent={setInputData}
        onSave={handleSaveBtn}
        onCancel={handleCancelBtn}
      />
    </InputWrapper>
  );
}

export default ToggleInput;
