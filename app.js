
// kumpulan ui element
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

// kumpulan event listener
ImmediateLoadEventListener();

function ImmediateLoadEventListener(){

    // mendapatkan todos dari localstorage dan memunculkannya di browser.
    document.addEventListener("DOMContentLoaded", getTodos);
    // ini adalah event untuk menambah todos
    todoForm.addEventListener("submit", addTodo);
    // ini adalah event untuk mengahpus satu todos
    todoList.addEventListener("click", deleteTodo);
    // ini adalah event untuk mengahpus semua todos
    clearButton.addEventListener("click", clearTodos);
    // ini adalah events untuk memfilter todos
    filterInput.addEventListener("keyup", filterTodos);
}


// reuesable code 
function createTodoElement(value){
       // membuat li element
       const li = document.createElement("li")

       // memnambahkan class pada element li 
       li.className = "todo-item list-group-item d-flex justify-content-between align-items-center mb-1";
   
       // menambahkan children ke dalam element li 
       li.appendChild(document.createTextNode(value));
   
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

}

function getItemFromLocalStorage(){
    let todos;
    if (localStorage.getItem("todos")== null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;

}

function getTodos(){
    const todos = getItemFromLocalStorage();

    todos.forEach((todo)=>{
        createTodoElement(todo)

    })
}
// kumpulan DOM Function
function addTodo(e) {
    e.preventDefault();
    if (todoInput.value ){
        createTodoElement(todoInput.value);

        addTodoLocalStorage(todoInput.value);
        todoInput.value = "";
} else {
    alert("silahkan tulis sebuah kalimat/pesan")
}
}
// membuat local storage agar tulisan tersimpan di local. 
function addTodoLocalStorage(todoInputValue){
    const todos = getItemFromLocalStorage();
    todos.push(todoInputValue)
    localStorage.setItem("todos", JSON.stringify(todos));

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

function clearTodos(){
    todoList.innerHTML =""
}

function filterTodos(e) {
    const filterText = e.target.value.toLowerCase();
    const todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach((item) => {
        const itemText = item.firstChild.textContent.toLowerCase();
        if (itemText.indexOf(filterText) !== -1) {
            item.setAttribute("style", "display: block;");
        } else {
            item.setAttribute("style", "display: none !important;");
        }
        console.log(itemText);
    });
}

