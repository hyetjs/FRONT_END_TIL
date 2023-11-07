import styled from "styled-components";

const Modal = () => {
  return (
    <Styled.Div>
      <p>모달창입니다</p>
    </Styled.Div>
  );
};

const Div = styled.div`
  border: 1px solid black;
`;
const Styled = {
  Div,
};

export default Modal;
