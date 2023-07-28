import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import DragDrop from "./components/DragDrop";
import ResizableDraggableInput from "./components/DraggableTextBox";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DragDrop />
        {/* <ResizableDraggableInput /> */}
      </div>
    </DndProvider>
  );
}

export default App;
