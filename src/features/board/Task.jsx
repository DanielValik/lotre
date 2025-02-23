import { useEffect, useRef, useState } from "react";
import { FaEdit, FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import styled from "styled-components";
import ControlledInput from "../../ui/ControlledInput";
import Button from "../../ui/Button";
import useDarkenBackground from "../../hooks/useDarkBackground";

const StyledTask = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;

  &:hover {
    border: 1px solid var(--hover);
    border-radius: 10px;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const FocusedTask = styled.div`
  position: fixed;
  padding: 5px;
  border: 3px solid var(--hover);
  background-color: var(--background);
  border-radius: 10px;
  z-index: 1000;
`;

const OptionsList = styled.div`
  position: absolute;
  left: 102%;
  top: 0%;

  display: flex;
  flex-direction: column;
`;

const additionalStylesButton = {
  position: "absolute",
  left: "10%",
  top: "120%",
};

function Task({ task }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);

  function handleChangeTask() {
    setIsCompleted((isCompleted) => !isCompleted);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setIsEditing(false);
      setIsDark(false);
    }
  }

  const modalRef = useRef(null);
  const { DarkenComponent, setIsDark } = useDarkenBackground(modalRef);

  function handleEditBtn() {
    setIsEditing(true);
    setIsDark(true);
  }

  useEffect(() => {
    if (!isEditing) setIsDark(false);
  }, [isEditing, setIsDark]);

  return (
    <>
      {DarkenComponent}
      {isEditing ? (
        <Wrapper>
          <FocusedTask ref={modalRef}>
            <ControlledInput
              style={{ position: "relative" }}
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              onBlur={() => setIsEditing(false)}
              onKeyDown={(e) => handleKeyDown(e)}
            />

            <Button
              onClick={() => setIsEditing(false)}
              additionalStyle={additionalStylesButton}
            >
              Save
            </Button>

            <OptionsList>
              <Button additionalStyle={{ marginBottom: "3px" }}>Test</Button>
              <Button additionalStyle={{ marginBottom: "3px" }}>Test</Button>
              <Button additionalStyle={{ marginBottom: "3px" }}>Test</Button>
              <Button additionalStyle={{ marginBottom: "3px" }}>Test</Button>
              <Button additionalStyle={{ marginBottom: "3px" }}>Test</Button>
              <Button additionalStyle={{ marginBottom: "3px" }}>Test</Button>
              <Button additionalStyle={{ marginBottom: "3px" }}>Test</Button>
              <Button additionalStyle={{ marginBottom: "3px" }}>Test</Button>
              <Button additionalStyle={{ marginBottom: "3px" }}>Test</Button>
              <Button additionalStyle={{ marginBottom: "3px" }}>Test</Button>
              <Button additionalStyle={{ marginBottom: "3px" }}>Test</Button>
              <Button additionalStyle={{ marginBottom: "3px" }}>Test</Button>
              <Button additionalStyle={{ marginBottom: "3px" }}>Test</Button>
            </OptionsList>
          </FocusedTask>
        </Wrapper>
      ) : (
        <StyledTask
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div>
            {isCompleted ? (
              <FaRegCheckCircle onClick={handleChangeTask} />
            ) : (
              <FaRegCircle onClick={handleChangeTask} />
            )}

            <span>{taskName}</span>
          </div>

          <div>
            {isHovered && !isEditing && <FaEdit onClick={handleEditBtn} />}
          </div>
        </StyledTask>
      )}
    </>
  );
}

export default Task;
