const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
// find the first input inside the toDoForm.
const toDoInput = toDoForm.querySelector("input");

function deleteToDo(event) {
   // get the parentNode of a button and delete.
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

   paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handletoDoSubmit);
