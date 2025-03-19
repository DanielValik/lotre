import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import Input from "../../ui/Input";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { fakeCard } from "../../fakeData/fakeCard";
import Button from "../../ui/Button";

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const OpenLabelsButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const StyledLabels = styled.div`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 5px;
  width: 250px;
  height: 420px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 7px;
  border: none;
  background: none;
  cursor: pointer;
`;

const Title = styled.h3`
  text-align: center;
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const LabelRow = styled.div`
  margin: 10px 0;
  padding: 0 20px;
  display: flex;
  justify-items: baseline;
`;

const LabelElement = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 12px;

  width: 180px;
  height: 25px;
  background-color: ${(props) => props.color};
  filter: contrast(0.7);
  border-radius: 5px;
  margin: 0 10px;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.7);
  }
`;

function Labels({ children, task }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const labelsRef = useRef(null);
  const [toggleCreateEditLabel, setToggleCreateEditLabel] = useState(false);
  const [editableLabel, setEditableLabel] = useState(null);

  function handleClick(e) {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top,
    });
    setIsOpen(true);
  }

  useClickOutside(labelsRef, () => handleClose());

  function handleClose() {
    setIsOpen(false);
    setToggleCreateEditLabel(false);
  }

  function handleEditLabel(label) {
    setToggleCreateEditLabel(true);
    setEditableLabel(label);
  }

  return (
    <Container ref={containerRef}>
      <OpenLabelsButton onClick={handleClick}>{children}</OpenLabelsButton>
      {isOpen &&
        (!toggleCreateEditLabel ? (
          <StyledLabels ref={labelsRef} x={position.x - 40} y={position.y - 40}>
            <CloseButton onClick={() => handleClose()}>
              <IoClose />
            </CloseButton>
            <Title>Labels</Title>
            <ContentWrapper>
              <Input placeholder={"Search labels..."} />

              {fakeCard.labels.map((label) => (
                <LabelRow key={label.color}>
                  {label.isActive ? (
                    <MdOutlineCheckBox />
                  ) : (
                    <MdOutlineCheckBoxOutlineBlank />
                  )}
                  <LabelElement color={label.color}>
                    {label.description}
                  </LabelElement>
                  <FaPencil onClick={() => handleEditLabel(label)} />
                </LabelRow>
              ))}

              <Button>Create new label</Button>
            </ContentWrapper>
          </StyledLabels>
        ) : (
          <StyledLabels ref={labelsRef} x={position.x - 40} y={position.y - 40}>
            <CloseButton onClick={() => handleClose()}>
              <IoClose />
            </CloseButton>

            <ContentWrapper>
              <Input value={editableLabel.description} />

              <Button>Save changes</Button>
            </ContentWrapper>
          </StyledLabels>
        ))}
    </Container>
  );
}

export default Labels;
