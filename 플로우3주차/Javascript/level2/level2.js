import { RESERVATION_LIST } from "./reservation .js";

const inputName = document.querySelector('p>input')
const inputPhone = document.getElementById("user-phone");
const button = document.getElementById("a");
const $form = document.getElementById("form");


// RESERVATION_LIST.forEach((reservation) => {
//   console.log(reservation.name)
// });
$form.addEventListener("submit", (e) => {
  e.preventDefault();
});

button.addEventListener("click", () => {
//   const name = RESERVATION_LIST.find((list) =)> {
//     list.name === inputName.value;
inputName.setAttribute('name',inputName.value)
 
  });
// });


//   for(let reservation of RESERVATION_LIST){
//     name = reservation.name
//   }

// console.log(name)
/* 
예약 고객확인하기


*/
