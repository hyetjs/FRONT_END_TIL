import { styled } from "styled-components";
import TDButton from "../../../components/Button";
import { flexAlignCetner, flexCenter } from "../../../styles/common";

const AddTodoModal = ({ onClose, handleAddTodo }) => {
  //8
  const onAddTodo = (e) => {
    e.preventDefault();
    handleAddTodo(e.target.title.value, e.target.content.value);
    onClose();
  };

  return (
    <Styled.Modal>
      <Styled.Form onSubmit={onAddTodo}>
        <Styled.Title>
          <h1>ADD TODO LIST</h1>
          {/*5*/}
          <button type="button" onClick={onClose}>
            {" "}
            x{" "}
          </button>
        </Styled.Title>
        <Styled.Content>
          <input placeholder="제목을 입력해주세요" name="title" />
          <textarea placeholder="할 일을 입력해주세요" name="content" />
        </Styled.Content>
        <TDButton variant={"primary"} size={"full"}>
          ADD
        </TDButton>
      </Styled.Form>
    </Styled.Modal>
  );
};
export default AddTodoModal;

const Modal = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const Form = styled.form`
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 32px;
`;

const Title = styled.div`
  font-size: 24px;
  ${flexAlignCetner};
  justify-content: space-between;

  & > button {
    border: none;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Content = styled.div`
  ${flexCenter};
  margin-top: 16px;
  flex-direction: column;

  & > input {
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 0 16px;
    margin-bottom: 16px;
  }

  & > textarea {
    width: 100%;
    height: 200px;
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 16px;
  }
`;

const Styled = {
  Modal,
  Form,
  Content,
  Title,
};
