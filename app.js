const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

// find the first input inside the toDoForm.
const toDoInput = toDoForm.querySelector("input");
const toDos = [];

// saves the toDos array into the localStorage of a browser. (NOTE: it takes in "todos" as a key and array of string values as a whole string delimited by commas.)
function saveToDos() {
   localStorage.setItem("todos", JSON.stringify(toDos));
   // save the value as an array format yet still it is a string.
}

function deleteToDo(event) {
   // Get the parentNode of a button and delete.
   const li = event.target.parentElement;
   li.remove();
}

function paintToDo(newTodo) {
   // create a new HTML element (li and span) with the text parameter newTodo.
   const li = document.createElement("li");
   const span = document.createElement("span");
   span.innerText = newTodo;
   const deleteButton = document.createElement("button");
   deleteButton.innerText = "❌";
   deleteButton.addEventListener("click", deleteToDo);
   li.appendChild(span);
   li.appendChild(deleteButton);

   // append to the toDoList
   toDoList.appendChild(li);
}

function handletoDoSubmit(event) {
   // enter does not refresh
   event.preventDefault();

   // TEST: success in return input value: console.log(toDoInput.value);

   // Assign the input value to a constant newTodo and delete the input value.
   const newTodo = toDoInput.value;
   toDoInput.value = "";
   // push the value of a textbox to the array.
   toDos.push(newTodo);
   paintToDo(newTodo);
   saveToDos();
}

toDoForm.addEventListener("submit", handletoDoSubmit);

const savedToDos = localStorage.getItem();
