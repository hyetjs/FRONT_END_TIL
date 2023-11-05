import { Link, useNavigate } from "react-router-dom";

// 화살표 함수 컴포넌트
const MainPage = () => {
  const navigate = useNavigate();
  let isToggled = true;

  const onClickChangedColor = () => {
    isToggled = false;
    // 1. isToggeld의 값은 바뀔까요?
    console.log(isToggled); //false
    // 2. html 요소 ":)"의 색상이 바뀔까요?
    // UI는 바뀌지 않았습니다.

    // 상태라는 값을 갖고 있고, 해당 상태가 변경되어야만 UI를 리랜더합니다.
    // const [state, setState] = useState()

    // react는 일반 변수 값이 바뀐다고 화면을 다시 그리지 않고
    // 상태가 변경되어야만 화면을 다시 그린다(리랜더링)
  };

  const navigateToTodoPage = () => {
    // window.location.href = '/todo'
    navigate("/todo");
  };

  return (
    <div
      // style = (변수사용을 위한){(스타일객체){ }} -> 객체 중괄호 두개
      // 자바스크립트의 변수값으로 DOM을 컨트롤 할 수 있기 때문에 접근을 최소화 (리엑트에서 지양)
      // 접근을 아예 안하는 것은 아님, 특정 이벤트에 한해서는 돔 접근 허용
      // addEventListner 대신 요소에 직접 이벤트 부여가 가능합니다. 돔 접근 최소화
      style={{
        color: isToggled ? "red" : "blue",
      }}
    >
      :)
      <button onClick={onClickChangedColor}>색상 변경</button>
      {/* 바닐라js -> 
        1. <button onclick="onClickChangedColor">색상 변경</button> 
        2. $button.addEventLister('click,()=>{})  
      */}
      {/* <a href="/todo"><button>a TodoPage로 이동</button></a>
      <Link to="/todo"><button>Link TodoPage로 이동</button></Link> */}
      <button onClick={navigateToTodoPage}>TodoPage로 이동</button>
    </div>
  );
};
export default MainPage;
