// 12 useInput -> input의 value가 onChange되었을 때마다 name을 통해 객체의 키 값속성
// input의 value를 객체로서 갖고 관리하기 위함

import { useState } from "react"

// 13 initalValue는 custom의 매개변수로 useState의 기본값
export const useInputs = (initalValue) => {
    const [value, setValue] = useState(initalValue)

    // 15. onChange는 input에 달릴 것 e.target = input
    const onChange = (e) => {
        setValue((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
        // input의 name을 객체의 key로 활용하여 해당 key에 input의 value 설정
        // { email: "test@test.com", password: ""}
    }

    return [value, onChange, setValue]
    // 14 state의 불변성
    // react state는 같은 값이면 리랜더링을 하지 않습니다.
    // 따라서 다른 값을 주어야 steate의 변경이 되는데,
    // *객체*
    // 객체는 참조값으로 안에 있는 속성이나 요소의 값이 변해도 참조하는 주소 값이
    // 바뀌지 않습니다.

    // 따라서 깊은 복사를 활용하여 state를 변경해줄 필요가 있다
    // 주의사항 ...은 완벽한 깊은 복사가 아닙니다.
    // ...(전개 연산자)는/은 중첩 객체 배열의 참조 값을 그대로 복사합니다.

    /* 
    ex)

    const post = { // 123
        id: 1,
        title: 'examile'
        email: '123
    }

    const a = post // 123 (얕은 복사)
    const b = { ...post } // 456 (깊은 복사)

    깊은 복사, 내용물은 똑같은데 주소 값이 달라진 경우
    얕은 복사, 내용물과 주소값이 똑같은 것 
    

    const post = { // 123
        id: 1,
        title: 'examile'
        email: '123'
        User: { // 789
        }
    }


    // #1 lodash
    // a.sort -> a가 바뀌죠
    // [...a].sort // lodash 미리 함수 생성

    // ...연산자를 중첩 사용
    const a = { // 456
        ...post
        User: { // 000
            ...post.User
        }
    }
    */
}

