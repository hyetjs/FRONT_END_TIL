import { useParams, useSearchParams } from "react-router-dom";

function Todopage(){
  const urlParams = useParams()
  const [params, setParams] = useSearchParams()

  console.log(urlParams.todoId)
  console.log(params.get('page')) // 2
  // http://localhost:3000/todo/3?page=2

  console.log(params.get('colors')) // red
  // http://localhost:3000/todo/3?page=2&colors=red
  // 주소의 히스토리를 남기기 위해 url에 data를 기록

  // /todo -> /todo (let a=3, let a=5, let a=7), 뒤로가기 누르면 초기값으로 초기화
  // 초기화를 방지하고 뒤로가기를 가능하게 하려면 어디에다가 남겨놔야죠

  return (
    <div>
      {/*jsx 문법안에서 html안에 {}를 사용하여 js 사용 가능 */}
      {urlParams.todoId}
    </div>
  )
}
export default Todopage;