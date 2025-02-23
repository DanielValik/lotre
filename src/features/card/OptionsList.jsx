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

function OptionsList() {
  return (
    <StyledOptionsList>
      <Button additionalStyle={{ marginBottom: "3px" }}>
        <FaIdCard style={{ marginRight: "3px" }} />
        Open Task
      </Button>
      <Button additionalStyle={{ marginBottom: "3px" }}>
        <FaEdit style={{ marginRight: "3px" }} /> Edit labels
      </Button>
      <Button additionalStyle={{ marginBottom: "3px" }}>
        <FaUser style={{ marginRight: "3px" }} />
        Change members
      </Button>
      <Button additionalStyle={{ marginBottom: "3px" }}>
        <FaRegImage style={{ marginRight: "3px" }} />
        Change cover
      </Button>
      <Button additionalStyle={{ marginBottom: "3px" }}>
        <IoTime style={{ marginRight: "3px" }} />
        Edit dates
      </Button>
      <Button additionalStyle={{ marginBottom: "3px" }}>
        <FaArrowRight style={{ marginRight: "3px" }} />
        Move
      </Button>
      <Button additionalStyle={{ marginBottom: "3px" }}>
        <FaCopy style={{ marginRight: "3px" }} />
        Copy task
      </Button>
      <Button additionalStyle={{ marginBottom: "3px" }}>
        <FaLink style={{ marginRight: "3px" }} /> Copy link
      </Button>
      <Button additionalStyle={{ marginBottom: "3px" }}>
        {" "}
        <GiMirrorMirror style={{ marginRight: "3px" }} />
        Mirror
      </Button>
      <Button additionalStyle={{ marginBottom: "3px" }}>
        <FaArchive style={{ marginRight: "3px" }} />
        Archive
      </Button>
    </StyledOptionsList>
  );
}

export default OptionsList;
