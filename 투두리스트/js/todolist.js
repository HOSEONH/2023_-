const todoForm = document.querySelector("#todo-form");
const ul = document.querySelector("#todo-list");

//전체할일 / 완료한 할일
const count = document.querySelector("#count");
    
function todoAdd(e) {
    e.preventDefault();
    
    ul.classList.remove("hidden");
    count.classList.remove("hidden");

    const todoValue = todoForm.firstElementChild.value;
    const li = document.createElement("li");

    const check = document.createElement("input");
    check.type = "checkbox";
    const text = document.createTextNode(todoValue);

    const time = document.createElement("span");
    time.innerHTML = getClock();
    const button = document.createElement("button");
    button.innerHTML = "x";

    li.classList.add('on')
    
    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(time);
    li.appendChild(button);
    ul.appendChild(li);

    todoForm.firstElementChild.value = "";

    check.addEventListener("click", todoCheck);
    button.addEventListener("click", todoDelete);
    checkTodo();
}

function todoCheck(e) {
    const check = e.target;
    let li = check.parentNode;
    if(check.checked){
        li.style.color = "gray";
        li.style.textDecoration = "line-through";
    } else{
        li.style.color = "";
        li.style.textDecoration = "";
    }
    checkTodo();
}

function todoDelete(e) {
    let button = e.target;
    let li = button.parentNode;
    li.remove("click");
    checkTodo();
}

function checkTodo() {
    const liLength = document.querySelectorAll("li");
    const checked = document.querySelectorAll("li input:checked");

    count.innerHTML = `🍴 전체 할일 ${liLength.length} / 완료한 할일 ${checked.length}`;
}

todoForm.addEventListener("submit", todoAdd);