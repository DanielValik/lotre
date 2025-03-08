import { useEffect, useRef, useState } from "react";
import { FaEdit, FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import styled from "styled-components";
import ControlledInput from "../../ui/ControlledInput";
import Button from "../../ui/Button";
import useDarkenBackground from "../../hooks/useDarkBackground";
import OptionsList from "./OptionsList";
import useClickOutside from "../../hooks/useClickOutside";
import Modal from "../../ui/Modal";
import OpenedTaskModal from "./taskModalMenu/OpenedTaskModal";

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
  border: 1px solid var(--hover);
  background-color: var(--background);
  border-radius: 10px;
  z-index: 1000;
`;

const additionalStylesButton = {
  position: "absolute",
  left: "10%",
  top: "120%",
};

function Task({ task, cardName }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleChangeIsCompleted() {
    setIsCompleted((isCompleted) => !isCompleted);
  }

  useEffect(() => {
    task.isCompleted = isCompleted;
  }, [isCompleted, task]);

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

  useClickOutside(modalRef, () => {
    setIsEditing(false);
  });

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
              onKeyDown={(e) => handleKeyDown(e)}
            />

            <Button
              onClick={() => setIsEditing(false)}
              additionalStyle={additionalStylesButton}
            >
              Save
            </Button>

            <OptionsList
              task={task}
              closeOptionsList={() => {
                setIsEditing(false);
                setIsDark(false);
              }}
              setIsModalOpen={setIsModalOpen}
            />
          </FocusedTask>
        </Wrapper>
      ) : (
        <StyledTask
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div>
            {isCompleted ? (
              <FaRegCheckCircle
                onClick={handleChangeIsCompleted}
                style={{ marginRight: "5px" }}
              />
            ) : (
              <FaRegCircle
                onClick={handleChangeIsCompleted}
                style={{ marginRight: "5px" }}
              />
            )}

            <span>{taskName}</span>
          </div>

          <div>
            {isHovered && !isEditing && <FaEdit onClick={handleEditBtn} />}
          </div>
        </StyledTask>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <OpenedTaskModal
          task={task}
          cardName={cardName}
          isCompleted={isCompleted}
          handleChangeIsCompleted={handleChangeIsCompleted}
        />
      </Modal>
    </>
  );
}

export default Task;
