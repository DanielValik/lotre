import { FaRegEye } from "react-icons/fa";
import Button from "../../../ui/Button";
import styled from "styled-components";
import { CiCirclePlus, CiSquarePlus } from "react-icons/ci";

const ControlBarWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const ElementName = styled.p`
  font-size: 13px;
`;

const StyledAvatar = styled.img`
  width: 30px;
  height: 30px;
`;

const LabelSquare = styled.div`
  display: inline-block;
  width: 40px;
  height: 30px;
  border-radius: 5px;
  background-color: red;
  margin-right: 5px;
`;

const btnAdditionalStyle = {
  display: "flex",
  gap: "8px",
};

const plusIconStyle = {
  width: "30px",
  height: "30px",
  cursor: "pointer",
};

function ControlBar() {
  return (
    <ControlBarWrapper>
      <div display="flex">
        <ElementName>Members</ElementName>

        <StyledAvatar src="../../../../public/fakeUserAvatar.png" alt="" />
        <CiCirclePlus style={plusIconStyle} />
      </div>
      <div>
        <ElementName>Labels</ElementName>

        <LabelSquare></LabelSquare>
        <LabelSquare></LabelSquare>
        <CiSquarePlus style={plusIconStyle} />
      </div>
      <div>
        <ElementName>Due date</ElementName>
        <Button additionalStyle={btnAdditionalStyle}>
          <FaRegEye />
          Watch
        </Button>
      </div>
      <div>
        <ElementName>Notifications</ElementName>
        <Button additionalStyle={btnAdditionalStyle}>
          <FaRegEye />
          Watch
        </Button>
      </div>
    </ControlBarWrapper>
  );
}

export default ControlBar;
