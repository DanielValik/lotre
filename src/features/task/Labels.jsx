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
import { IoIosArrowBack } from "react-icons/io";

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

const BackButton = styled.button`
  position: absolute;
  top: 12px;
  left: 7px;
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

const SelectedColor = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--hover);
  margin: 20px 0 10px 0;
  padding: 20px 0;
`;

const PalitraElement = styled.div`
  width: 50px;
  height: 20px;
  background-color: ${(props) => props.color};
  filter: contrast(0.7);
  border-radius: 5px;
  transition: filter 0.3s;

  margin: 0 5px;
  cursor: pointer;

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
                    <MdOutlineCheckBox style={{ cursor: "pointer" }} />
                  ) : (
                    <MdOutlineCheckBoxOutlineBlank
                      style={{ cursor: "pointer" }}
                    />
                  )}
                  <LabelElement color={label.color}>
                    {label.description}
                  </LabelElement>
                  <FaPencil
                    onClick={() => handleEditLabel(label)}
                    style={{ cursor: "pointer" }}
                  />
                </LabelRow>
              ))}

              <Button>Create new label</Button>
            </ContentWrapper>
          </StyledLabels>
        ) : (
          <StyledLabels ref={labelsRef} x={position.x - 40} y={position.y - 40}>
            <BackButton onClick={() => setToggleCreateEditLabel(false)}>
              <IoIosArrowBack />
            </BackButton>
            <Title>Edit label</Title>
            <CloseButton onClick={() => handleClose()}>
              <IoClose />
            </CloseButton>

            <SelectedColor>
              <LabelElement color={editableLabel.color} />
            </SelectedColor>

            <ContentWrapper>
              <Input value={editableLabel.description} />

              <LabelRow>
                <PalitraElement color="darkred"></PalitraElement>
                <PalitraElement color="red"></PalitraElement>
                <PalitraElement color="tomato"></PalitraElement>
                <PalitraElement color="orange"></PalitraElement>
                <PalitraElement color="gold"></PalitraElement>
              </LabelRow>

              <LabelRow>
                <PalitraElement color="yellow"></PalitraElement>
                <PalitraElement color="greenyellow"></PalitraElement>
                <PalitraElement color="lime"></PalitraElement>
                <PalitraElement color="green"></PalitraElement>
                <PalitraElement color="darkgreen"></PalitraElement>
              </LabelRow>

              <LabelRow>
                <PalitraElement color="teal"></PalitraElement>
                <PalitraElement color="cyan"></PalitraElement>
                <PalitraElement color="deepskyblue"></PalitraElement>
                <PalitraElement color="blue"></PalitraElement>
                <PalitraElement color="darkblue"></PalitraElement>
              </LabelRow>

              <LabelRow>
                <PalitraElement color="navy"></PalitraElement>
                <PalitraElement color="indigo"></PalitraElement>
                <PalitraElement color="purple"></PalitraElement>
                <PalitraElement color="darkmagenta"></PalitraElement>
                <PalitraElement color="violet"></PalitraElement>
              </LabelRow>

              <LabelRow>
                <PalitraElement color="brown"></PalitraElement>
                <PalitraElement color="saddlebrown"></PalitraElement>
                <PalitraElement color="gray"></PalitraElement>
                <PalitraElement color="silver"></PalitraElement>
                <PalitraElement color="white"></PalitraElement>
              </LabelRow>

              <Button>Save </Button>
            </ContentWrapper>
          </StyledLabels>
        ))}
    </Container>
  );
}

export default Labels;
