import {useRef, useState} from "react"

// useRef는 리렌더가 되도 값이 변경되지 않고 값이 변경되도 리렌더 되지 않는다 상태가 변경되는것이 아니여서
// 그래서 렌더링과 관련없이 컴포넌트 간에 값을 공유하고 유지할 수 있다.
const UseRef = ()=>{
    const count = useRef(5)
    const divRef = useRef()

    const [isForceRender, setIsForceRender] = useState(false)

    const onClickPlusBtn = ()=>{
        count.current += 1
        console.log(count.current)
    }
    const onClickForceRender = () =>{
        setIsForceRender((prev)=>!prev)
        // isForceRender의 초기값을 useState로 false를 주고 클릭하면 prev가 아닌것이니까 true로 바뀐다
        // 한마디로 클릭할때마다 f-t-f-t-f... 클릭할때마다 계속 값을 바꿔주는것
        // useRef는 값이 변해도 리렌더되지 않고 useState는 값이 바뀌면 상태가 바뀌는 것이니까 무조건 리렌더된다
        // 둘을 같이 사용해서 원하는 시점에 리렌더 되게 만든 것 
    }
    const onClickChangeColor = ()=>{
        divRef.current.style.color = "red"
        // 리액트 컴포넌트의 렌더링과는 상관없이 DOM 직접적으로 스타일 속성을 변경하는 것이기 때문에
        // 브라우저는 DOM 요소의 스타일을 바로 업데이트해서 바로 변경되는게 보이는것
    }
    return (
        <>
        <div ref={divRef}>
            {count.current}
        </div>
        <button onClick={onClickPlusBtn}>+</button>
        <button onClick={onClickForceRender}>force-render</button>
        <button onClick={onClickChangeColor}>change-color</button>
        </>
    )
}
export default UseRef