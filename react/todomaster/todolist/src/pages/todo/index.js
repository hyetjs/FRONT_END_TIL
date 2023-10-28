import styled from "styled-components";
import TDButton from "../../components/Button";
import { flexAlignCetner, flexCenter } from "../../styles/common";
import AddTodoModal from "./components/AddTodoModal";
import TodoList from "./components/TodoList";

const TodoPage = () => {
  let isOpenAddTodoModal = false;
  // 할 일 목록들
  const todos = [
    {
      id: 1,
      title: "example-1",
      content: "example-1",
      state: true,
    },
    {
      id: 2,
      title: "example-2",
      content: "example-2",
      state: false,
    },
  ];

  // 변수 혹은 함수 또는 상태 == 어떠한 값의 위치를 잘 생각해야한다
  // 만약 자식 컴포넌트들에게 전달해야한다면 부모가 가지고 있어야함
  // 반드시 부모가 알고 있어야하는지 확인할 것

  /**
   * 생각해봅시다.
   * <TodoList/> (todos)
   * map
   *
   * <OneTodo/> (todos - todo)
   * find, filter
   *
   * <AddTodoModal/> (todos)
   * push, unshift
   *
   */

  return (
    <>
      {isOpenAddTodoModal && <AddTodoModal />}
      <Styled.Wrapper>
        <Styled.Container>
          <Styled.Title>TODOLIST</Styled.Title>
          <TodoList todos={todos} />
          <TDButton size={"full"} variant={"primary"}>
            추가
          </TDButton>
        </Styled.Container>
      </Styled.Wrapper>
    </>
  );
};
export default TodoPage;

const Wrapper = styled.div`
  height: 100vh;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.white};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCetner};
`;

const Styled = {
  Wrapper,
  Container,
  Title,
};
