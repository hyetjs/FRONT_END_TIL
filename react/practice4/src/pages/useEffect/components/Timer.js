import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const stop = () => {
    clearInterval(timer.current);
  };

  const restart = () => {
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const reset = () => {
    clearInterval(timer.current);
    setCount(0);
  };

  return (
    <>
      <div>{count}초 </div>
      <button onClick={stop}>중지</button>
      <button onClick={restart}>재시작</button>
      <button onClick={reset}>리셋</button>
    </>
  );
};
export default Timer;
