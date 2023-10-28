import { styled } from "styled-components"
import OneTodo from "./OneTodo"

const TodoList = ({todos}) => {
    return (
        <Styled.Wrapper>
            {todos.map((todo)=>(
                <OneTodo todo={todo}/>
            ))}
        </Styled.Wrapper>
    )
}
export default TodoList

const Wrapper = styled.div`
    padding: 32px 0;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`
const Styled = {
    Wrapper
}