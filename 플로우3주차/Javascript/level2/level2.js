import { RESERVATION_LIST } from "./reservation.js";
console.log(RESERVATION_LIST);

const form = document.querySelector("form");
const body = document.querySelector("body");
const button = document.querySelector("button");
const div = document.createElement("div");
const nameInput = document.querySelector('input[name="user-name"]');
const phoneInput = document.querySelector('input[name="user-phone"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// 번호 입력할때 '-' 자동으로 입력되게 하고싶어서 넣었는데 아직 손을 많이봐야되는...
phoneInput.addEventListener("input", (event) => {
  const cleanedValue = event.target.value.replace(/\s|-/g, "");

  if (cleanedValue.length === 3) {
    event.target.value =
      cleanedValue.substr(0, 3) + "-" + cleanedValue.substr(3);
    console.log(event.target.value);
  } else if (cleanedValue.length === 7) {
    event.target.value =
      cleanedValue.substr(0, 3) +
      "-" +
      cleanedValue.substr(3, 4) +
      "-" +
      cleanedValue.substr(7);
  }
});

function findReservation() {
  const userName = nameInput.value;
  const userPhone = phoneInput.value;
  // 이름이나 전화번호 중 하나라도 배열에 없을 때
  if (!userName || !userPhone) {
    alert("이름과 전화번호를 모두 입력해주세요.");
    return;
  }

  const foundReservation = RESERVATION_LIST.find((reservation) => {
    return reservation.name === userName && reservation.phone === userPhone;
  });

  if (foundReservation) {
    div.innerText = foundReservation.number;
    body.append(div);
    nameInput.value = "";
    phoneInput.value = "";
  } else {
    alert("일치하는 예약 정보를 찾을 수 없습니다.");
    div.innerText = "일치하는 예약 정보를 찾을 수 없습니다.";
    body.append(div);
    nameInput.value = "";
    phoneInput.value = "";
  }
}

button.addEventListener("click", findReservation);
