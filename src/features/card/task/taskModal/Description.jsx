import ToggleInput from "./ToggleInput";
import { useState } from "react";
// import styled from "styled-components";
// import TrixInput from "../../../ui/TrixInput";
// import DOMPurify from "dompurify";

// const DescriptionButton = styled.div`
//   font-size: 13px;
//   padding: 10px 100px 30px 10px;
//   background-color: #fff;
//   border: 3px solid var(--border);
//   border-radius: 5px;

//   &:hover {
//     background-color: var(--hover);
//   }
// `;

// const DescriptionContent = styled.div`
//   font-size: 13px;
//   padding: 10px;
//   cursor: pointer;
// `;

// const InputWrapper = styled.div`
//   max-width: 500px;
//   border: 1px solid var(--border);
//   border-radius: 5px;
//   padding: 5px;
// `;

// function Description() {
//   const [isAddingDescription, setIsAddingDescription] = useState(false);
//   const [descriptionInput, setDescriptionInput] = useState("");
//   const [description, setDescription] = useState("");

//   function handleSaveDescription() {
//     setIsAddingDescription(false);
//     setDescription(descriptionInput);
//   }

//   function handleCancelDescription() {
//     setIsAddingDescription(false);
//     description === "" ? setDescription("") : setDescription(description);
//   }

//   return !isAddingDescription ? (
//     description === "" ? (
//       <DescriptionButton onClick={() => setIsAddingDescription(true)}>
//         Add a more detailed description...
//       </DescriptionButton>
//     ) : (
//       <DescriptionContent onClick={() => setIsAddingDescription(true)}>
//         <div
//           dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
//         ></div>
//       </DescriptionContent>
//     )
//   ) : (
//     <InputWrapper>
//       <TrixInput
//         inputContent={descriptionInput}
//         setInputContent={setDescriptionInput}
//         onSave={handleSaveDescription}
//         onCancel={handleCancelDescription}
//       />
//     </InputWrapper>
//   );
// }

// export default Description;

function Description() {
  const [description, setDescription] = useState("");

  return (
    <>
      <ToggleInput
        label={"Add a more detailed description..."}
        content={description}
        setContent={setDescription}
      />
    </>
  );
}

export default Description;
