const addBtn = document.querySelector(".footer__plusBtn");
const itmeInput = document.querySelector(".footer__input");
const items = document.querySelector(".items");

function onAdd() {
  //1. input text 값 가져오기 (사용자가 입력한 텍스트를 받아옴)
  const text = itmeInput.value;
  if (text === "") {
    itmeInput.focus();
    return;
  }

  //2. 새로운 아이템 만들기
  const item = createItem(text);

  //3. items 안에 새로운 아이템 추가하기
  // node를 return 해야지 appendchild 실행가능 / item 이 node 여야함
  items.appendChild(item);

  // 4. 아이템이 추가될 때 스크롤링
  item.scrollIntoView({ block: "center" });

  // 4. 인풋 초기화 (인풋값이 빈칸이면 focus)
  itmeInput.value = "";
  itmeInput.focus();
}

let id = 0; //UUID
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
      <div class="item">
        <span class="itme__name">${text}</span>
        <button class="item__deletBtn">
          <i class="fas fa-trash-alt" data-id=${id}></i> 
        </button>
      </div>
      <div class="item__devider"></div>`;
  // 해당 item 과 delet-button 에 고유 id 추가

  id++; // item 이 새로 만들어질 때마다 증가

  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

// enter 치면 input 값 입력
itmeInput.addEventListener("keypress", (event) => {
  // 누르는 key(event.key)가 enter
  if (event.key === "Enter") {
    onAdd();
  }
});

// event 위임
// 부모 container 에서 원하는 target 이 click 이 되었을 때 해당하는 아이템을 삭제해줌
// item 과 icon 마다 고유한 id를 지정해줌 (attribute : data-id) => HTML
items.addEventListener("click", (event) => {
  // if(event.target.nodeName === 'I') => 만약 다른 icon 이 있다면 실행이 안될 수 있음

  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id='${id}']`); //  data-id 가 event.target.dataset.id 같아야함
    toBeDeleted.remove();
  }
});
