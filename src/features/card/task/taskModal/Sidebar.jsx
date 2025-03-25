import styled from "styled-components";
import Button from "../../../../ui/Button";
import { IoImageOutline, IoPersonAddOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { MdAccessTime, MdOutlineNewLabel } from "react-icons/md";
import { IoIosAttach, IoMdCheckboxOutline } from "react-icons/io";
import { LuTextCursorInput } from "react-icons/lu";

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

const btnAdditionalStyle = {
  fonsSize: "16px",
  gap: "8px",
  display: "flex",
  marginBottom: "5px",
  padding: "10px 30px 10px 20px",
};

function TaskModalSidebar() {
  return (
    <Sidebar>
      <Button additionalStyle={btnAdditionalStyle}>
        <IoPersonAddOutline /> Join
      </Button>
      <Button additionalStyle={btnAdditionalStyle}>
        <FiUsers />
        Members
      </Button>
      <Button additionalStyle={btnAdditionalStyle}>
        <MdOutlineNewLabel />
        Labels
      </Button>
      <Button additionalStyle={btnAdditionalStyle}>
        <IoMdCheckboxOutline />
        Checklist
      </Button>
      <Button additionalStyle={btnAdditionalStyle}>
        <MdAccessTime />
        Dates
      </Button>
      <Button additionalStyle={btnAdditionalStyle}>
        <IoIosAttach />
        Attachment
      </Button>
      <Button additionalStyle={btnAdditionalStyle}>
        <IoImageOutline />
        Cover
      </Button>
      <Button additionalStyle={btnAdditionalStyle}>
        <LuTextCursorInput />
        Custom Fields
      </Button>
    </Sidebar>
  );
}

export default TaskModalSidebar;
