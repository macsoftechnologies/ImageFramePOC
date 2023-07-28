import React, { useState } from "react";
import Draggable from "react-draggable";
import "./DraggableTextBox";

const ResizableDraggableInput = () => {
    const [width, setWidth] = useState(300); // Initial width of the input box
    const [height, setHeight] = useState(100); // Initial height of the input box
  
    const handleResize = (deltaX, deltaY) => {
      // Update the width and height based on the resizing delta
      setWidth((prevWidth) => prevWidth + deltaX);
      setHeight((prevHeight) => prevHeight + deltaY);
    };
  
    return (
      <Draggable>
        <div className="resizable-draggable-container">
          <textarea
            className="resizable-draggable-input"
            style={{ width: `${width}px`, height: `${height}px` }}
            rows="4"
            cols="50"
            draggable="true"
            onDragStart={(event) => event.preventDefault()}
          />
          <div
            className="resizable-handle"
            onMouseDown={(event) => {
              event.preventDefault();
              const startX = event.clientX;
              const startY = event.clientY;
              const initialWidth = width;
              const initialHeight = height;
  
              const handleMouseMove = (event) => {
                const deltaX = event.clientX - startX;
                const deltaY = event.clientY - startY;
                handleResize(deltaX, deltaY);
              };
  
              const handleMouseUp = () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
              };
  
              window.addEventListener('mousemove', handleMouseMove);
              window.addEventListener('mouseup', handleMouseUp);
            }}
          />
        </div>
      </Draggable>
    );
  };
  
  export default ResizableDraggableInput;
