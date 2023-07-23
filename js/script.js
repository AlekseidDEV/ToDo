"use strict";

const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");

const todoData = [];

const render = () => {
  todoList.innerHTML = "";
  todoCompleted.innerHTML = "";
  todoData.forEach((item, index) => {
    const li = document.createElement("li");

    li.classList.add("todo-item");

    li.innerHTML =
      '<span class="text-todo">' +
      item.text +
      "</span>" +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      "</div>";

    if (item.completed === false) {
      todoList.append(li);
    } else {
      todoCompleted.append(li);
    }

    li.querySelector('.todo-complete').addEventListener('click', () => {
        item.completed = !item.completed
        render()
    })

    li.querySelector('.todo-remove').addEventListener('click', (f) => {
        li.parentNode.removeChild(li)
        todoData.splice(index, 1)
        console.log(todoData);
    })
  });
};

todoControl.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTodo = {
    text: headerInput.value,
    completed: false,
  };

  if(headerInput.value === ''){
    alert('введи хоть чо нибудь')
  } else {
     todoData.push(newTodo);
     headerInput.value = "";
     render();
  }
});







