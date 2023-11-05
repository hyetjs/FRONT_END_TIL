import { styled } from "styled-components";
import { flexAlignCetner } from "../../../styles/common";
import Box from "../../../components/Box";
import { useRef, useState } from "react";

/**
 * @param {todo} todos의 각각의 요소인 todo
 */
const OneTodo = ({ todo, handleDeleteTodo, handleEditTodo }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  // 18
  const editTextArea = useRef(null);

  // 11
  const onDeleteTodo = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      handleDeleteTodo(todo.id);
    }
  };

  //12
  //생각해보기
  //실제 백엔드 서버가 있다고 가정하고 editMdoe와 state는 모두 백엔드에 저장되어야할까?
  //editMode -> client side state
  //state -> server side state

  //13
  //Optimistic Update
  //원래는 백엔드와 date 소통이 이루어진 후의 변화는 다시 호출 -> 데이터의 일관성
  //사용자에게 조금이라도 빠른 긍정적인 화면을 보여주기 state 먼저 업데이트하고 다시 백엔드 데이터를 호출
  //백엔드와 소통하기 전에 state를 바꾸고 백엔드에서 데이터 다시 재호출 후 성공 여부에 따라 다시 화면을 보여주는 것

  //14
  //const onEditState = () => {
  // 정상
  // title, content, state -> backend
  // then -> state update

  // 낙관적업데이트
  // setLocalState(prev => !prev)
  // title, content, state -> backend
  // then -> state update
  // }

  //17
  const onEditTodo = () => {
    if (!isEditMode) return setIsEditMode(true);
    // 1. useInput을 사용한다 (x)  // useInput 값이 입력될때마다 리렌더 예를들면 이메일형식이아니다,비밀번호와 비밀번호확인값이 일치하지않다
    // 2. ref를 사용하여 접근한다 
    // dom api 접근
    handleEditTodo(todo.id, { content: editTextArea.current.value });
    setIsEditMode(false);
    // 3. form으로 변경해준다
    // 구조 개선 + enter event
  };

  //16
  const onEditState = () => {
    handleEditTodo(todo.id, { state: !todo.state });
  };

  return (
    <Styled.Wrapper $state={todo.state}>
      <Styled.Header>
        <div onClick={onEditState}>
          {todo.state ? "완료" : "미완료"}
          <Box x={4} />
          {todo.title}
        </div>
        <div>
          <button onClick={onEditTodo}>{isEditMode ? "완료" : "수정"}</button>
          <button onClick={onDeleteTodo}>삭제</button>
        </div>
      </Styled.Header>
      <Styled.Content $state={todo.state}>
        {isEditMode ? (
          <textarea defaultValue={todo.content} ref={editTextArea}></textarea>
        ) : (
          todo.content
        )}
      </Styled.Content>
    </Styled.Wrapper>
  );
};
export default OneTodo;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #999;
  margin: 16px 0;
  border-radius: 8px;
  background-color: ${({ $state, theme }) =>
    $state ? theme.colors.gray[100] : theme.colors.white};
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexAlignCetner};
  justify-content: space-between;
  padding: 8px 16px;
  height: 48px;
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ $state }) => ($state ? "line-through" : "none")};
`;

const Styled = {
  Wrapper,
  Header,
  Content,
};
