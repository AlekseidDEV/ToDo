"use strict";

const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");


let todoData = [];

const token = () => {
    const saveToken = localStorage.getItem('token')
    const deployedToken = JSON.parse(saveToken)
    if(deployedToken === null){
      return deployedToken 
    } else {
      deployedToken.forEach((item) => {
        todoData.push(item)
    })
    }
    render()
}

const render = () => {
  const saveData = JSON.stringify(todoData)
  localStorage.setItem('token', saveData)
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

    li.querySelector('.todo-remove').addEventListener('click', () => {
        li.parentNode.removeChild(li)
        todoData.splice(index, 1)
        render()
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

token()






