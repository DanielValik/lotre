import { useState } from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import styled from "styled-components";

const StyledTask = styled.div`
  padding: 5px;
`;

function Task({ task }) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  function handleChangeTask() {
    setIsCompleted((isCompleted) => !isCompleted)
  }

  return (
    <StyledTask>
      {isCompleted ? <FaRegCheckCircle onClick={handleChangeTask}/> : <FaRegCircle onClick={handleChangeTask}/>} {task.name}{" "}
    </StyledTask>
  );
}

export default Task;
