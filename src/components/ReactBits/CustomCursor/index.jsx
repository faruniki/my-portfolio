import React, { useState, useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      if (e.target.closest("a, button, [role='button'], .cursor-pointer")) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onTouch = () => {
      setIsTouchDevice(true);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
    };

    if (window.matchMedia("(pointer: coarse)").matches) {
      onTouch();
    }

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${isPointer ? "pointer" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
