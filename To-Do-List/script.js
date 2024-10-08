const todoInput = document.querySelector("#inputBox");
const addTask = document.querySelector("#submit");
const todoResult = document.querySelector("#todoResult");

addTask.addEventListener("click", function () {
  if (todoInput.value === "") {
    alert("enterTask");
  } else {
    const listItem = document.createElement("li");

    listItem.innerHTML = todoInput.value;
    todoResult.appendChild(listItem);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listItem.appendChild(span);
  }
  todoInput.value = "";
  saveData();
});

todoResult.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
);

// saveData to localStorage

function saveData() {
  localStorage.setItem('data', todoResult.innerHTML);
}

function showData () {
  todoResult.innerHTML = localStorage.getItem('data');
}

showData();
