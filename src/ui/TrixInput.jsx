import React, { useState } from "react";
import Trix from "trix";
import { TrixEditor } from "react-trix";
import "trix/dist/trix.css";
import Button from "./Button";

function TrixInput({ inputContent, setInputContent, onSave, onCancel }) {
  const [editorContent, setEditorContent] = useState(inputContent);

  const handleChange = (content) => {
    setEditorContent(content);
    setInputContent(content);
  };

  return (
    <>
      <TrixEditor value={editorContent} onChange={handleChange} />
      <br />
      <Button onClick={onSave}>Save</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </>
  );
}

export default TrixInput;
