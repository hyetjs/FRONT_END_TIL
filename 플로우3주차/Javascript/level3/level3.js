const ingredientForm = document.getElementById("ingredient-form");
const ingredientInput = document.querySelector('input[name="ingredient"]');
const weightInput = document.querySelector('input[name="weight"]');
const table = document.querySelector("table");
const ingredientList = document.getElementById("ingredient-list");
const ingredientResult = document.getElementById("submit_button");

// 재료명과 무게값을 넣을 객체 생성
const ingredientRecipe = {}; 

ingredientForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const ingredientValue = ingredientInput.value;
  const weightValue = weightInput.value;

  if (ingredientValue && weightValue) {
    // 객체에 재료를 key, 무게를 value로 넣어준다
    ingredientRecipe[ingredientValue] = weightValue;
    // 테이블에 추가해준다
    const newRecipe = document.createElement("tr");
    newRecipe.className = "thead";

    const ingredientTh = document.createElement("th");
    ingredientTh.innerText = ingredientValue;

    const weightTh = document.createElement("th");
    weightTh.innerText = weightValue;

    const deleteTh = document.createElement("th");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "삭제";

    deleteBtn.addEventListener("click", () => {
      newRecipe.remove();
    });

    deleteTh.appendChild(deleteBtn);
    newRecipe.appendChild(ingredientTh);
    newRecipe.appendChild(weightTh);
    newRecipe.appendChild(deleteTh);
    table.appendChild(newRecipe);

    ingredientInput.value = "";
    weightInput.value = "";
  } else {
    ingredientInput.value = "";
    weightInput.value = "";
    alert("재료명과, 무게 모두 입력해주세요");
  }
});

// 제출 버튼 클릭 시 리스트를 화면에 나오게하는
ingredientResult.addEventListener("click", () => {
  // 리스트 초기화하기
  ingredientList.innerHTML = "";

  // ingredientRecipe를 순회해서 리스트 key,value값을 li에 넣어 생성
  for (const [ingredient, weight] of Object.entries(ingredientRecipe)) {
    const listItem = document.createElement("li");
    listItem.innerText = `${ingredient} : ${weight}`;
    ingredientList.appendChild(listItem);
  }
});
