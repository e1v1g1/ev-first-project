import { useEffect, useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect did mount");
  }, [counter]);

  const handleClickPlus = () => {
    setCounter(counter + 1);
  };

  const handleClickMin = () => {
    setCounter(counter - 1);
  };

  const handleClickReset = () => {
    setCounter(0);
  };

  return (
    <div className="Counter">
      <span>{counter}</span>
      <div>
        <button onClick={handleClickPlus} className="Counter-button">
          Plus
        </button>
        <button onClick={handleClickMin} className="Counter-button">
          Minus
        </button>
        <button onClick={handleClickReset} className="Counter-button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
