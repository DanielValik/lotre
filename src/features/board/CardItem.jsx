import { useState } from "react";
import styled from "styled-components";

const StyledCardItem = styled.div`
  background-color: #e1e1e1;
  border-radius: 5px;
  width: 300px;
  height: auto;
  padding: 10px;
`;

const StyledInput = styled.input`
  all: unset;
  width: 100%;
`;

function CardItem() {
  const [cardName, setCardName] = useState("Click to change card name");
  const [isEditingCardName, setIsEditingCardName] = useState(false);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setIsEditingCardName(false);
    }
  }

  return (
    <StyledCardItem>
      {isEditingCardName ? (
        <StyledInput
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          onBlur={() => setIsEditingCardName(false)}
          onKeyDown={(e) => handleKeyDown(e)}
          autoFocus
        />
      ) : (
        <span onClick={() => setIsEditingCardName(true)}>{cardName}</span>
      )}
    </StyledCardItem>
  );
}

export default CardItem;
