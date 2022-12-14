const todo = () => {
    const todoForm = document.querySelector('.todo-form');
    const todoInput = document.querySelector('.todo-input');
    const todoList = document.querySelector('.todo-list');
    
    const paintTodo = (todo) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.id = todo.id;

        const todoText = document.createElement('span');
        todoText.className = 'todo-text';
        todoText.textContent = todo.todo;
        
        const removeBtn = document.createElement('span');
        removeBtn.className = 'todo-remove';
        removeBtn.innerText = "❌";
        removeBtn.addEventListener('click', removeTodo);

        todoItem.appendChild(removeBtn);
        todoItem.appendChild(todoText);
        todoList.appendChild(todoItem);
    }

    const addTodo = () => {
        const todoText = todoInput.value;
        const todo = {
            id: Date.now(),
            todo: todoText
        }
        paintTodo(todo);
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const removeTodo = (e) => {
        const todoItem = e.target.parentElement;
        const id = todoItem.id;
        todoList.removeChild(todoItem);
        todos = todos.filter((item) => item.id != id);
        localStorage.setItem('todos', JSON.stringify(todos));
    }


    let todos = localStorage.getItem('todos');
    if(todos) {
        todos = JSON.parse(todos);
        todos.map((todo) => paintTodo(todo));
    }
    else todos = [];

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
        todoInput.value='';
    });
}

todo();