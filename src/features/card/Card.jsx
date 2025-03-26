import styled from "styled-components";
import { RiCollapseDiagonal2Line } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import Task from "./task/Task";
import { FaPlus, FaRegCircle } from "react-icons/fa";
import Button from "../../ui/Button";
import ControlledInput from "../../ui/ControlledInput";
import { useState } from "react";
import { tasks } from "../../fakeData/fakeTasks";

const StyledCard = styled.div`
  background-color: #e1e1e1;
  border-radius: 5px;
  width: 400px;
  height: auto;
  padding: 10px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardBody = styled.div`
  padding: 10px;
`;

const CardFooter = styled.div`
  padding: 10px;
`;

const NewTaskForm = styled.input`
  all: unset;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const MinimizedCard = styled.div`
  position: absolute;
  left: 50%;
  top: 100%;
  transform: rotate(90deg);
  transform-origin: left top;
  background: #e1e1e1;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
  display: inline-block;
`;

function Card({ card }) {
  console.log(card);
  console.log(card.tasks);
  const [cardName, setCardName] = useState(card.name);
  const [isEditingCardName, setIsEditingCardName] = useState(false);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setIsEditingCardName(false);
      setIsAddingTask(false);
    }
    if (isAddingTask && e.key === "Enter") {
      handleAddTask(newTask);
    }
  }

  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTask, setNewTask] = useState("");

  function handleAddTask(task) {
    // tasks.push({
    //   id: Math.random(),
    //   name: task,
    //   isCompleted: false,
    // });
  }

  const [isMinimized, setIsMinimized] = useState(false);

  return isMinimized ? (
    <Wrapper>
      <MinimizedCard>
        <Button
          onClick={() => setIsMinimized(false)}
          additionalStyle={{ marginRight: "10px" }}
        >
          <RiCollapseDiagonal2Line />
        </Button>
        <span>{cardName}</span>
      </MinimizedCard>
    </Wrapper>
  ) : (
    <StyledCard>
      <CardHeader>
        {isEditingCardName ? (
          <ControlledInput
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            onBlur={() => setIsEditingCardName(false)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        ) : (
          <span onClick={() => setIsEditingCardName(true)}>{cardName}</span>
        )}

        <div>
          <Button onClick={() => setIsMinimized(true)}>
            <RiCollapseDiagonal2Line />
          </Button>
          <Button>
            <SlOptionsVertical />
          </Button>
        </div>
      </CardHeader>

      <CardBody>
        {card.tasks.map((task) => (
          <Task key={task.id} task={task} cardName={cardName} />
        ))}
        {isAddingTask && (
          <>
            <FaRegCircle />{" "}
            <NewTaskForm
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => {
                handleKeyDown(e, newTask);
              }}
              onBlur={() => {
                handleAddTask(newTask);
                setIsAddingTask(false);
              }}
              autoFocus
            />
          </>
        )}
      </CardBody>

      <CardFooter>
        <Button onClick={() => setIsAddingTask(true)}>
          <FaPlus /> Add a task
        </Button>
      </CardFooter>
    </StyledCard>
  );
}

export default Card;
