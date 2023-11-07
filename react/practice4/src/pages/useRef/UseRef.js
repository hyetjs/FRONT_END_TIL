import React, { useRef } from "react";
import usePrev from "../../hooks/use-prev";

function UseRef() {
  const array = useRef([]);
  const { setState } = usePrev();

  const trueClick = () => {
    setState((prev) => !prev);
    array.current.push("true");
    trueCount();
  };

  const falseClick = () => {
    setState((prev) => !prev);
    array.current.push("false");
    trueCount();
  };

  const trueCount = () => {
    const count = array.current.filter((arr) => arr === "true").length;
    if (count >= 3) {
      alert("테스트가 종료되었습니다.");
      array.current = [];
    }
  };

  return (
    <div>
      <button onClick={trueClick}>알아요</button>
      <button onClick={falseClick}>몰라요</button>
      <div>
        <div>
          {array.current.map((arr, index) => (
            <p key={index}>{arr} </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UseRef;
