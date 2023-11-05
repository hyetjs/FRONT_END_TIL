import styled from "styled-components";
import TDButton from "../../components/Button";
import { flexAlignCetner, flexCenter } from "../../styles/common";
import AddTodoModal from "./components/AddTodoModal";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { OneExample, TwoExample } from "../../components/Barrel";

const TodoPage = () => {
  // 1
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);

  // 2
  const [todos, setTodos] = useState([
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
  ]);

  //3
  const onClickOpenAddTodoModal = () => {
    setIsOpenAddTodoModal(true);
  };
  const onClickCloseAddTodoModal = () => {
    setIsOpenAddTodoModal(false);
  };

  //6
  //todo를 추가하는 함수는 AddTodoModal과 index.js 중 어디에 있어야 하는가
  //index.js는 entry file로 해당 컴포넌트의 가장 첫번째 진입점
  const handleAddTodo = (title, content) => {
    const newTodo = {
      id: Math.floor(Math.random() * 100000),
      title,
      content,
      state: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  //7
  //index.js는 언제 쓰느냐 import문을 단축
  //Barrel
  OneExample();
  TwoExample();

  //9
  const handleDeleteTodo = (id) => {
    const deleteTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodos);
    // state의 불변성
    // filter의 반환값
  };

  //15
  const handleEditTodo = (id, todo) => {
    // handleEditTodo(todo.id, { content: editTextArea.current.value });
    // 복사본, 실제 원본 데이터가 수정, 불변성을 어기는 것
    const _todos = [...todos];
    // 내가 바꾸고 싶은 요소를 찾음
    let selectTodoIndex = _todos.findIndex((todo) => todo.id === id);
    // 해당 요소의 데이터를 새로운 todo로 교환하는데, 필요한 데이터가 왔을 때 해당 데이터만 수정

    _todos[selectTodoIndex] = { ..._todos[selectTodoIndex], ...todo };
    setTodos(_todos);
  };

  return (
    <>
      {/*4*/}
      {/* <AddTodoModal { ...{onClickCloseAddTodoModal} } /> */}
      {isOpenAddTodoModal && (
        <AddTodoModal
          onClose={onClickCloseAddTodoModal}
          {...{ handleAddTodo }}
        />
      )}
      <Styled.Wrapper>
        <Styled.Container>
          <Styled.Title>TODOLIST</Styled.Title>
          {/*10 props drilling*/}
          {/*<TodoList />, index page에서 map이 돌아가는 것을 허용하지 않는다, 추상화 레벨 같게한다*/}
          {/* 인덱스는 모이는 곳? */}
          {/* 앞뒤 같은 뜻 */}
          <TodoList todos={todos} {...{ handleDeleteTodo, handleEditTodo }} />
          <TDButton
            size={"full"}
            variant={"primary"}
            onClick={onClickOpenAddTodoModal}
          >
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
