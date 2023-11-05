import { styled } from "styled-components";
import OneTodo from "./OneTodo";

const TodoList = ({ todos, handleDeleteTodo, handleEditTodo }) => {
  return (
    <Styled.Wrapper>
      {todos.map((todo, index) => (
        // 고유한 id가 진짜로 없을 때 index -> 예외 상황이 발생할 수 있음
        <OneTodo
          key={todo.id}
          todo={todo}
          {...{ handleDeleteTodo, handleEditTodo }}
        />
      ))}
    </Styled.Wrapper>
  );
};
export default TodoList;

const Wrapper = styled.div`
  padding: 32px 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Styled = {
  Wrapper,
};
