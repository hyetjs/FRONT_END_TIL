import Timer from "./components/Timer";
import { useState } from "react";
import usePrev from "../../hooks/use-prev";

const UseEffect = () => {
  const { state, onPrev } = usePrev();

  return (
    <div>
      <button onClick={onPrev}>
        {state ? "타이머 숨기기" : "타이머 보이기"}
      </button>
      {state && <Timer />}
    </div>
  );
};
export default UseEffect;
