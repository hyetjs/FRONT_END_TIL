import React from "react";
import Modal from "./components/Modal";
import Active from "./components/Active";
import NonActive from "./components/NonActive";
import usePrev from "../../hooks/use-prev";

const UseState = () => {
  //   const [modalVisible, toggleModal, setModalVisible] = usePrev();
  //   const { state, onPrev } = usePrev();
  const { state: modalVisible, onPrev: toggleModal } = usePrev();
  const { state: activeVisible, onPrev: activeChange } = usePrev(true);

  return (
    <>
      <button onClick={toggleModal}>
        {modalVisible ? "숨기기" : "보이기"}
      </button>
      <button onClick={activeChange}>
        {activeVisible ? <Active /> : <NonActive />}
      </button>
      {modalVisible && <Modal />}
      <div style={{ color: modalVisible ? "green" : "red" }}>
        모달이{" "}
        {modalVisible
          ? "모달이 보여지고 있습니다"
          : "모달이 보여지지 않고 있습니다"}
      </div>
    </>
  );
};

export default UseState;
