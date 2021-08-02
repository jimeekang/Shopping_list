const upBtn = document.querySelector(".upbtn");
const downBtn = document.querySelector(".downbtn");
const items = document.querySelector(".items");
const footerInput = document.querySelector(".footer__input");

// 완성된 아이템
function onAdd(itemlist) {
  //1. input 값 가져오기
  const text = footerInput.value;
  if (text === "") {
    footerInput.focus();
    return;
  }
  //2. item 태크 만들기
  const itme = createItem(text, itemlist);

  //3. items안에 item태그 넣기
  itemlist.appendChild(itme);

  //4. input 커서 리셋
  footerInput.value = "";
  footerInput.focus();
}

// item 태그들 만들기
function createItem(text, itemlist) {
  const items = document.createElement("ul");
  items.setAttribute("class", "items");

  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerText = text;

  const deletBtn = document.createElement("button");
  deletBtn.setAttribute("class", "deletBtn");
  deletBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  deletBtn.addEventListener("click", () => {
    itemlist.removeChild(itemRow);
  });

  const itemDevider = document.createElement("div");
  itemDevider.setAttribute("class", "item__devider");

  items.appendChild(itemRow);
  itemRow.appendChild(item);
  itemRow.appendChild(itemDevider);
  item.appendChild(name);
  item.appendChild(deletBtn);

  return items;
}

// woolworth 리스트에 추가
const itemList1 = document.querySelector(".itme__list1");
itemList1.innerHTML = ` <div class="market__name woolworth">Woolworths😀</div>`;

upBtn.addEventListener("click", () => {
  onAdd(itemList1);
});

// korean market 리스트에 추가
const itemList2 = document.querySelector(".itme__list2");
itemList2.innerHTML = `<div class="market__name korean-market">Korean Market😀</div>`;

downBtn.addEventListener("click", () => {
  onAdd(itemList2);
});

// 지정키에 따라 지정 list에 추가
footerInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd(itemList1);
  } else if (event.key === "/") {
    onAdd(itemList2);
  }
});
