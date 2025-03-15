import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledLabels = styled.div`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  padding: 12px;
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 5px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: none;
  cursor: pointer;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
`;

function Labels({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const labelsRef = useRef(null);

  function handleClick(e) {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top,
    });
    setIsOpen(true);
  }

  useClickOutside(labelsRef, () => {
    setIsOpen(false);
  });

  return (
    <Container ref={containerRef}>
      <Button onClick={handleClick}>{children}</Button>
      {isOpen && (
        <StyledLabels ref={labelsRef} x={position.x - 40} y={position.y - 40}>
          <CloseButton>
            <IoClose />
          </CloseButton>
          Label test Label test Label test Label test Label test Label test
          Label test Label test
        </StyledLabels>
      )}
    </Container>
  );
}

export default Labels;
