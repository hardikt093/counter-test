import { useState } from "react";
import "../assets/css/Counter.scss";
import { GrPowerReset } from "react-icons/gr";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Counter = () => {
  const [counterValue, setCounterValue] = useState<number>(0);

  const handleIncrement = () => {
    setCounterValue(counterValue + 1);
  };

  const handleDecrement = () => {
    setCounterValue(counterValue - 1);
  };

  const handleReset = () => {
    setCounterValue(0);
  };

  return (
    <>
      <div className="container">
        <h1>Counter : {counterValue}</h1>
        <div className="inner-container">
          <button
            className="button"
            disabled={counterValue <= 0}
            onClick={handleDecrement}
            data-testid="decrement-button"
          >
            <AiOutlineMinus />
          </button>
          <button
            className="button"
            onClick={handleIncrement}
            data-testid="increment-button"
          >
            <AiOutlinePlus />
          </button>
          <button
            className="button"
            onClick={handleReset}
            data-testid="reset-button"
            disabled={counterValue <= 0}
          >
            <GrPowerReset />
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
