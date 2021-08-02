const addBtn = document.querySelector(".footer__plusBtn");
const itmeInput = document.querySelector(".footer__input");
const items = document.querySelector(".items");

function onAdd() {
  //1. input text 값 가져오기 (사용자가 입력한 텍스트를 받아옴)
  const text = itmeInput.value;

  //2. 새로운 아이템 만들기
  const item = createItem(text);

  //3. items 안에 새로운 아이템 추가하기
  items.appendChild(item);

  // 4. 아이템이 추가될 때 스크롤링
  item.scrollIntoView({ block: "center" });

  // 4. 인풋 초기화 (인풋값이 빈칸이면 focus)
  itmeInput.value = "";
  itmeInput.focus();
}

// 추가할 node 만들기 (HTMl 의 추가 할 list 부분)
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerText = text; // input값 아이템으로 추가

  const deletBtn = document.createElement("button");
  deletBtn.setAttribute("class", "item__deletBtn");
  deletBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  // item 지우기
  deletBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const itmeDevide = document.createElement("div");
  itmeDevide.setAttribute("class", "item__devider");

  itemRow.appendChild(item);
  itemRow.appendChild(itmeDevide);
  item.appendChild(name);
  item.appendChild(deletBtn);

  // item을 반환해야 하니까
  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

// enter 치면 input 값 입력
itmeInput.addEventListener("keypress", (evnt) => {
  // 누르는 key(event.key)가 enter
  if (evnt.key === "Enter") {
    onAdd();
  }
});
