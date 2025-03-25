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
import Button from "../../../ui/Button";
import Labels from "./Labels";

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

function OptionsList({ task, closeOptionsList, setIsModalOpen }) {
  const options = [
    { icon: <FaIdCard />, label: "Open Task", onClick: handleOpenTask },
    {
      icon: <FaEdit />,
      label: "Edit labels",
      onClick: handleClick,
    },
    { icon: <FaUser />, label: "Change members", onClick: handleClick },
    { icon: <FaRegImage />, label: "Change cover", onClick: handleClick },
    { icon: <IoTime />, label: "Edit dates", onClick: handleClick },
    { icon: <FaArrowRight />, label: "Move", onClick: handleClick },
    { icon: <FaCopy />, label: "Copy task", onClick: handleClick },
    { icon: <FaLink />, label: "Copy link", onClick: handleClick },
    { icon: <GiMirrorMirror />, label: "Mirror", onClick: handleClick },
    { icon: <FaArchive />, label: "Archive", onClick: handleClick },
  ];

  function handleClick() {}

  function handleOpenTask() {
    setIsModalOpen(true);
    closeOptionsList();
  }

  return (
    <>
      <StyledOptionsList>
        <Button
          additionalStyle={additionalStylesButton}
          onClick={handleOpenTask}
        >
          <IconWrapper>
            <FaIdCard />
          </IconWrapper>
          Open Task
        </Button>

        <Labels>
          <Button additionalStyle={additionalStylesButton}>
            <IconWrapper>
              <FaEdit />
            </IconWrapper>
            Edit labels
          </Button>
        </Labels>

        {/* {options.map((option) => (
          <Button
            additionalStyle={additionalStylesButton}
            onClick={option.onClick}
            key={option.label}
          >
            <IconWrapper>{option.icon}</IconWrapper>
            {option.label}
          </Button>
        ))} */}
      </StyledOptionsList>
    </>
  );
}

export default OptionsList;
