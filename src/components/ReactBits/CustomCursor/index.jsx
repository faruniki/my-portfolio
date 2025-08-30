// src/components/ReactBits/CustomCursor.js

import React, { useState, useEffect } from "react";
import "./CustomCursor.css"; // We will create this CSS file next

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch device on component mount
    const onTouch = () => {
      setIsTouchDevice(true);
      // Remove event listeners if touch is detected
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
    };

    // Check if the primary input mechanism is coarse (like a finger)
    if (window.matchMedia("(pointer: coarse)").matches) {
      onTouch();
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      // Check if the hovered element or its parent is a link or button
      if (e.target.closest("a, button, [role='button'], .cursor-pointer")) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("touchstart", onTouch);
    };
  }, []);

  // Don't render the cursor on touch devices
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
