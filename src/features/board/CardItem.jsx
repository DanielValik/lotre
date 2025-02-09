import { useState } from "react";
import styled from "styled-components";

const StyledCardItem = styled.div`
  background-color: #252525;
  border-radius: 5px;
  width: 300px;
  height: auto;
  padding: 10px;
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
        <input
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          onBlur={() => setIsEditingCardName(false)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      ) : (
        <span onClick={() => setIsEditingCardName(true)}>{cardName}</span>
      )}
    </StyledCardItem>
  );
}

export default CardItem;
