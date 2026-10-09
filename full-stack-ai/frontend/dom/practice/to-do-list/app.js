const input = document.querySelector("input");
const addBtn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");

addBtn.addEventListener("click", () => {
  const value = input.value;
  if(value.trim( ) == "") return;
  todoBox.innerHTML += `<div class="li">
          <h3>${value}</h3>
          <div>
            <button id="edit">Edit</button>
            <button id="del">Delete</button>
          </div>
        </div>`;

  input.value = "";
});
