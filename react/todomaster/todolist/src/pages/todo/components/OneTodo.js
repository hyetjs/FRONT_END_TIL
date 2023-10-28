import { styled } from "styled-components";
import { flexAlignCetner } from "../../../styles/common";
import Box from "../../../components/Box";

/**
 * @param {todo} todos의 각각의 요소인 todo 
 */
const OneTodo = ({todo}) => {
    return (
    <Styled.Wrapper state={todo.state}>
        <Styled.Header>
            <div>
                {todo.state ? "완료" : "미완료"}
                <Box x={4}/>
                {todo.title}
            </div>
            <div>
                <button>수정</button>
                <button>삭제</button>
            </div>
        </Styled.Header>
        <Styled.Content state={todo.state}>
            {todo.content}
        </Styled.Content>
    </Styled.Wrapper>
    )
}
export default OneTodo

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #999;
  margin: 16px 0;
  border-radius: 8px;
  background-color: ${({ state, theme }) =>
    state ? theme.colors.gray[100] : theme.colors.white};
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
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};
`;

const Styled = {
  Wrapper,
  Header,
  Content,
};