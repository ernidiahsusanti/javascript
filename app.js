const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
clearButton.addEventListener("click", clearTodos);
filterInput.addEventListener("click", filterTodos);

function addTodo(e) {
    e.preventDefault();
    if (todoInput.value ){
    // membuat li element
    const li = document.createElement("li")

    // memnambahkan class pada element li 
    li.className = "list-group-item d-flex justify-content-between align-items-center mb-1";

    // menambahkan children ke dalam element li 
    li.appendChild(document.createTextNode(todoInput.value));

    // membuat delete bautton 
    const a = document.createElement("a");
    a.href = "#";
    a.className = "badge badge-danger delete-todo"
    a.innerHTML= ("Delete");

    // menyelipkan element a ke dalam element li
    li.appendChild(a);
    
    // memasukan elemen li yang telah dibuat dengan javascript
    // kedalam element todolist
    todoList.appendChild(li)
    todoInput.value = "";

} else {
    alert("silahkan tulis sebuah kalimat/pesan")
}
}

function deleteTodo(e) {
    e.preventDefault();

    if (e.target.classList.contains("delete-todo")) {
        if (confirm("Are you sure?")) {
        const parent = e.target.parentElement;
        parent.remove();

    }
    }
}

function clearTodos(e){
    todoList.innerHTML =""
}