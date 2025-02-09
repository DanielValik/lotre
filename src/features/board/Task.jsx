import { useState } from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import styled from "styled-components";

const StyledTask = styled.div`
  padding: 5px;
`;

function Task({ task }) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  return (
    <StyledTask onClick={() => setIsCompleted((isCompleted) => !isCompleted)}>
      {isCompleted ? <FaRegCheckCircle /> : <FaRegCircle />} {task.name}{" "}
    </StyledTask>
  );
}

export default Task;
