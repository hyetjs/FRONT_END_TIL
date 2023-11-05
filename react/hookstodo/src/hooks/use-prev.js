// 11 customhook은 반드시 use로 시작해야합니다.

import { useState } from "react";

const usePrev = (initalValue = false) => {
  const [state, setState] = useState(initalValue);
  const onPrev = () => {
    setState((prev) => !prev);
  };

  return [state, onPrev, setState];
  return { state, setState, onPrev };
  // 구조 분해 할당과 관련된 반환 값
};
export default usePrev;

// const a = usePrev()
//[state, onPrev, setState]

// const [isModalOpen, (비어있는 인덱스), setIsModalOpen] = usePrev()
// const {state:isModalOpen, setState} = usePrev()
