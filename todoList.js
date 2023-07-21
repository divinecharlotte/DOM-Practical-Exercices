const inputBox = document.getElementById("inputB");
const todosContsainer = document.getElementById("todoList");

const addTodo = () => {
    if (inputBox.value === '') {
        alert("can't submit empty todo");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        todosContsainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "<button onclick='removeTodo(this)'>remove</button>";
        li.appendChild(span);
    }
    inputBox.value = '';
}

const removeTodo = (button) => {
    let listItem = button.parentElement.parentElement;
    listItem.remove();
}