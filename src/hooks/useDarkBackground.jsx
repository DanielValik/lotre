import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

function useDarkenBackground(excludeRef) {
  const [isDark, setIsDark] = useState(false);
  const overlayRef = useRef(null);

  const handleClickOutside = useCallback(
    (e) => {
      if (excludeRef.current && !excludeRef.current.contains(e.target)) {
        setIsDark(false);
      }
    },
    [excludeRef]
  );

  useEffect(() => {
    if (isDark) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDark, handleClickOutside]);

  const DarkenComponent = isDark ? (
    <Overlay isVisible={isDark} ref={overlayRef} />
  ) : null;

  return { DarkenComponent, setIsDark };
}

export default useDarkenBackground;
