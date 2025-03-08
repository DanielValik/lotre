import React, { useState } from "react";
import Trix from "trix";
import { TrixEditor } from "react-trix";
import "trix/dist/trix.css";

const MyEditorComponent = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleChange = (content) => {
    setEditorContent(content);
  };

  return (
    <div>
      <TrixEditor value={editorContent} onChange={handleChange} />
    </div>
  );
};

export default MyEditorComponent;
