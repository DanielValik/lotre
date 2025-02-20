import { useState } from "react";
import { FaEdit, FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import styled from "styled-components";
import ControlledInput from "../../ui/ControlledInput";
import Button from "../../ui/Button";

const StyledTask = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;

  &:hover {
    border: 1px solid var(--hover);
    border-radius: 10px;
  }
`;

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
    }
  }

  return (
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

        {isEditing ? (
          <>
            <ControlledInput
              style={{ position: "relative" }}
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              onBlur={() => setIsEditing(false)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
          </>
        ) : (
          taskName
        )}
      </div>

      <div>
        {isHovered && !isEditing && (
          <FaEdit
            onClick={() => {
              setIsEditing(true);
            }}
          />
        )}
        {isEditing && <Button onClick={() => setIsEditing(false)}>Save</Button>}
      </div>
    </StyledTask>
  );
}

export default Task;
