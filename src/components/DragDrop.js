import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import ResizableDraggableInput from "./DraggableTextBox";

const pictureList = [
  {
    id: 1,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wGa26vfM-GZNOVHzfIfIzNDH7pOvDe3WLhLWrY2r&s",
  },

  {
    id: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXPfvTxXBeJhQBiFTeokkpwVqKkxmgguzpjlok1Lr&s",
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=1024x1024&w=is&k=20&c=96MkVCuqUWOcMZ7vO5nG41rPufiSWlayTac_nsxXUTw=",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
const DragDrop = () => {
  const [board, setBoard] = useState([]);
  const [numResizableComponents, setNumResizableComponents] = useState(0);

  let uniqState = [];
  const [, drop] = useDrop(() => {
    return {
      accept: "image",
      drop: (item) => {
        addImageToBoard(item);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    };
  });

  const addImageToBoard = (item) => {
    const index = uniqState.findIndex((todo) => todo.id === item.id);
    if (index === -1) {
      uniqState = [...uniqState, item];
      setBoard((prev) => [...prev, item]);
    } else {
      setBoard((prev) => [...prev]);
    }
  };

  const addResizableComponent = () => {
    setNumResizableComponents((prev) => prev + 1);
  };

  return (
    <>
      <div className="Pictures">
        {pictureList.map((picture) => {
          return <Picture key={picture.id} url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture key={picture.id} url={picture.url} id={picture.id} />;
        })}
        {Array.from({ length: numResizableComponents }).map((_, index) => (
          <ResizableDraggableInput key={index} />
        ))}
      </div>
      <button onClick={addResizableComponent}>Add Description</button>
    </>
  );
};

export default DragDrop;
