import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [textVal, setTextVal] = useState("");
  const inputRef = useRef();
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = textVal;
  }, [textVal]);

  return (
    <div className="App">
      <input
        ref={inputRef}
        value={textVal}
        onChange={(e) => setTextVal(e.target.value)}
      />
      <h1>
        My name is: {textVal} and it used to be {prevName.current}
      </h1>
    </div>
  );
}

export default App;
