const inputNew = document.querySelector(".new_input");
const buttonNew = document.querySelector(".new_btn");

inputNew.addEventListener("keydown", event => {
  if (event.keyCode === 13 && inputNew.value) {
    render(inputNew.value);
  }
});

buttonNew.addEventListener("click", () => {
  if (inputNew.value === "") {
    alert("You can't add a null list!");
  } else render(inputNew.value);
});

function render(text) {
  var listDiv = document.createElement("div");
  var checkDiv = document.createElement("div");
  var list = document.querySelector(".list");
  var key = list.childNodes.length / 2 + 1;
  var checkclass = `check${key}`;
  var listclass = `listchild${key}`;

  checkDiv.className = checkclass;
  checkDiv.innerHTML = `<input class="checkbox${key}" type="checkbox" >`;
  listDiv.className = listclass;
  listDiv.innerHTML = `<input class="input${key}" disabled type="text" value="${text}" /><button class="edit_btn${key}">edit</button>`;
  list.appendChild(checkDiv);
  list.appendChild(listDiv);
  inputNew.value = "";

  const editBtn = document.querySelector(`.edit_btn${key}`);
  const inputItem = document.querySelector(`.input${key}`);
  const checkbox = document.querySelector(`.checkbox${key}`);
  const checkitem = document.querySelector(`.check${key}`);
  const listitem = document.querySelector(`.listchild${key}`);

  editBtn.addEventListener("click", () => {
    if (editBtn.innerHTML === "edit") {
      inputItem.removeAttribute("disabled");
      inputItem.focus();
      editBtn.innerHTML = "done";
    } else if (editBtn.innerHTML === "done") {
      inputItem.setAttribute("disabled", true);
      editBtn.innerHTML = "edit";
    } else if (editBtn.innerHTML === "delete") {
      checkitem.parentNode.removeChild(checkitem);
      listitem.parentNode.removeChild(listitem);
    }
  });

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      editBtn.innerHTML = "delete";
      inputItem.setAttribute("disabled", "");
      inputItem.style.textDecoration = "line-through";
    } else {
      editBtn.innerHTML = "edit";
      inputItem.style.textDecoration = "";
    }
  });
}
