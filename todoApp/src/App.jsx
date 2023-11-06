import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todos from "./components/Todos";
import { useDispatch } from "react-redux";
import { addTodo } from "./actions/todoSlice";

function App() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const [err, setErr] = useState();

  const addHandler = (e) => {
    if (input == "") {
      setErr("Empty field");
    } else {
      e.preventDefault();
      dispatch(addTodo(input));
      setInput("");
      setErr("");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="uppercase">My TodoApp</h1>
        <span className="text-red-600 font-semibold text-2xl">{err}</span>
        <div className="flex flex-col">
          <div className="flex flex-grow">
            <input type="text" placeholder="Enter task" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={addHandler}>Add</button>
          </div>
          <Todos/>
        </div>
      </div>
    </>
  );
}

export default App;
