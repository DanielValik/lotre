import { useState } from "react";
import styled from "styled-components";
import { RiCollapseDiagonal2Line } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import Task from "./Task";
import { FaPlus } from "react-icons/fa";
import Button from "../../ui/Button";

const StyledCardItem = styled.div`
  background-color: #e1e1e1;
  border-radius: 5px;
  width: 400px;
  height: auto;
  padding: 10px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardBody = styled.div`
  padding: 10px;
`;

const CardFooter = styled.div`
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
      <CardHeader>
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

        <div>
          <Button>
            <RiCollapseDiagonal2Line />
          </Button>
          <Button>
            <SlOptionsVertical />
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <Task />
      </CardBody>
      <CardFooter>
        <Button>
          <FaPlus /> Add a card
        </Button>
      </CardFooter>
    </StyledCardItem>
  );
}

export default CardItem;
