import { useState } from "react";

// 말 그대로 상태를 변경하는 함수라 값이 변경되면 리렌더된다
const UseState = () => {
  // count 변수에 useState로 5라는 값을 준다
  // setCount는 상태를 업데이트 하는 함수이다 count의 값을 변경하려면 setCount를 사용해야한다
  // 리렌더된다는것은 함수가 다시 실행하는 것
  // 같은 시점에 리렌더 되는것은 같이 묶어주는게 좋다 
  const [count, setCount] = useState(5);
  const onClickPlusBtn = () => {
    setCount(count+ 1);
    console.log(count);
  };
  return (
    <div>
      {count}
      <button onClick={onClickPlusBtn}>+</button>
    </div>
  );
};
export default UseState;
