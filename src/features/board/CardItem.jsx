import { useState } from "react";
import styled from "styled-components";
import { RiCollapseDiagonal2Line } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import Task from "./Task";
import { FaPlus, FaRegCircle } from "react-icons/fa";
import Button from "../../ui/Button";

const StyledCardItem = styled.div`
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

const StyledInput = styled.input`
  all: unset;
  width: 100%;
`;

const NewTaskForm = styled.input`
  all: unset;
`;

const tasks = [
  {
    id: 1,
    name: "Task 1",
    isCompleted: false,
  },
  {
    id: 2,
    name: "Task 2",
    isCompleted: false,
  },
  {
    id: 3,
    name: "Task 3",
    isCompleted: false,
  },
];

function CardItem() {
  const [cardName, setCardName] = useState("Click to change card name");
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
    tasks.push({
      id: Math.random(),
      name: task,
      isCompleted: false,
    });
  }

  return (
    <StyledCardItem>
      <CardHeader>
        {isEditingCardName ? (
          <StyledInput
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            onBlur={() => setIsEditingCardName(false)}
            onKeyDown={(e) => handleKeyDown(e)}
            autoFocus
          />
        ) : (
          <span onClick={() => setIsEditingCardName(true)}>{cardName}</span>
        )}

        <div>
          <Button>
            <RiCollapseDiagonal2Line />
          </Button>
          <Button>
            <SlOptionsVertical />
          </Button>
        </div>
      </CardHeader>

      <CardBody>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
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
    </StyledCardItem>
  );
}

export default CardItem;
