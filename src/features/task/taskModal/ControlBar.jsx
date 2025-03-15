import { FaRegEye } from "react-icons/fa";
import Button from "../../../ui/Button";
import styled from "styled-components";
import { CiCirclePlus, CiSquarePlus } from "react-icons/ci";
import Labels from "../Labels";

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
  background-color: ${(props) => props.labelColor || "black"};
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

function ControlBar({ task }) {
  return (
    <ControlBarWrapper>
      <div display="flex">
        <ElementName>Members</ElementName>

        <StyledAvatar src="../../../../public/fakeUserAvatar.png" alt="" />
        <CiCirclePlus style={plusIconStyle} />
      </div>

      <div>
        <ElementName>Labels</ElementName>

        {task.labels.map((label) => {
          return <LabelSquare labelColor={label} key={label}></LabelSquare>;
        })}

        <Labels>
          <CiSquarePlus style={plusIconStyle} />
        </Labels>
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
