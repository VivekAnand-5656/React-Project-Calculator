import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
      setResult("0");
    } else if (value === "Del") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setResult(eval(input));
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="cla w-[25%] rounded-[0.5rem] h-auto border-2 p-2 flex flex-col bg-[#2B2C36] gap-3">
      <input
        type="text"
        value={input}
        placeholder="0"
        disabled
        className="text-white border-b-1  w-full p-3 text-[1.5rem]"
      />
      <p className="text-right text-white text-lg font-semibold">  {result}</p>

      <div className="calcul flex justify-evenly w-[100%]">
        <button className="bg-[#F4A021]" onClick={() => handleClick("AC")}>AC</button>
        <button className="bg-[#F4A021]" onClick={() => handleClick("(")}>(</button>
        <button className="bg-[#F4A021]" onClick={() => handleClick(")")}>)</button>
        <button className="bg-[#F4A021]" onClick={() => handleClick("/")}>/</button>
      </div>

      <div className="calcul flex justify-evenly w-[100%]">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className="bg-[#F4A021]" onClick={() => handleClick("*")}>*</button>
      </div>

      <div className="calcul flex justify-evenly w-[100%]">
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button className="bg-[#F4A021]" onClick={() => handleClick("-")}>-</button>
      </div>

      <div className="calcul flex justify-evenly w-[100%]">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className="bg-[#F4A021]" onClick={() => handleClick("+")}>+</button>
      </div>

      <div className="calcul flex justify-evenly w-[100%]">
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("Del")}>Del</button>
        <button className="bg-[#F4A021]" onClick={() => handleClick("=")}>=</button>
      </div>
    </div>
  );
}

export default App;
