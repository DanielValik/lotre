import {
  FaArchive,
  FaArrowRight,
  FaCopy,
  FaEdit,
  FaIdCard,
  FaLink,
  FaRegImage,
  FaUser,
} from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { GiMirrorMirror } from "react-icons/gi";
import styled from "styled-components";
import Button from "../../ui/Button";

const StyledOptionsList = styled.div`
  position: absolute;
  left: 102%;
  top: 0%;

  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  display: inline-block;
  margin-right: 10px;
`;

const additionalStylesButton = {
  display: "flex",
  marginBottom: "5px",
};

const options = [
  { icon: <FaIdCard />, label: "Open Task", onClick: handleClick },
  { icon: <FaEdit />, label: "Edit labels", onClick: handleClick },
  { icon: <FaUser />, label: "Change members", onClick: handleClick },
  { icon: <FaRegImage />, label: "Change cover", onClick: handleClick },
  { icon: <IoTime />, label: "Edit dates", onClick: handleClick },
  { icon: <FaArrowRight />, label: "Move", onClick: handleClick },
  { icon: <FaCopy />, label: "Copy task", onClick: handleClick },
  { icon: <FaLink />, label: "Copy link", onClick: handleClick },
  { icon: <GiMirrorMirror />, label: "Mirror", onClick: handleClick },
  { icon: <FaArchive />, label: "Archive", onClick: handleClick },
];

function handleClick() {
  console.log("Button clicked");
}

function OptionsList() {
  return (
    <StyledOptionsList>
      {options.map((option) => (
        <Button
          additionalStyle={additionalStylesButton}
          onClick={option.onClick}
          key={option.label}
        >
          <IconWrapper>{option.icon}</IconWrapper>
          {option.label}
        </Button>
      ))}
    </StyledOptionsList>
  );
}

export default OptionsList;
