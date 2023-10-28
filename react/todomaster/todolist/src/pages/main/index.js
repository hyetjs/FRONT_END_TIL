import styled from "styled-components";
import { flexCenter } from "../../styles/common";
import SignForm from "./components/SignForm";

// 컴포넌트 함수는 앞글자가 반드시 대문자
const MainPage = () => {
  let signFormState = "SIGN-IN";
  const tabsArray = [
    {
      title: "SIGN-IN",
      isSelected: signFormState === "SIGN-IN",
    },
    {
      title: "SIGN-UP",
      isSelected: signFormState === "SIGN-UP",
    },
  ];

  const onClickTab = (title) => {
    // onClick={함수}
    // title === event

    // onCLick={ (event)=>함수(tab.title) }
    // title === tab.title
    signFormState = title;
  };

  return (
    <Styeld.Wrapper>
      <Styeld.Container>
        <Styeld.Header>
          {tabsArray.map(({ isSelected, title }) => (
            <Styeld.Tab $isSelected={isSelected} onClick={() => onClickTab(title)}>
              {title}
            </Styeld.Tab>
          ))}
        </Styeld.Header>
        {/** import 된 component는 반드시 태그 형태를 띄워야한다. 속성을 통해 props 전달 가능 */}
        <SignForm isFromLogin={signFormState === 'SIGN-IN'} />
      </Styeld.Container>
    </Styeld.Wrapper>
  );
};
export default MainPage;

// styled-components도 앞글자가 반드시 대문자
const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter}
  flex-direction: column;
`;

const Container = styled.h1`
  width: 360px;
  border: 1px solid #999;
`;

const Header = styled.header`
  background-color: #00c7ae;
  display: flex;
`;

const Tab = styled.div`
  width: 50%;
  cursor: pointer;
  // 자바스크립트 변수 사용을 위해 $를 감싸고 내부에 콜백함수
  // 스타일드 컴포넌트의 콜백함수에는 스타일드 컴포넌트에 전달된 값을 인자로 받아올 수 있다
  background-color: ${({ $isSelected }) => $isSelected && "#e0e0e0"};
  ${flexCenter}
  &:hover {
    background-color: #e0e0e0;
  }
`;

// Styled Components와 일반 Components를 구분하기 위해 객체 선언
const Styeld = {
  Wrapper,
  Container,
  Header,
  Tab
}