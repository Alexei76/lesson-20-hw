const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('todo-add');
const todoList = document.getElementById('todolist');
const inputCount = document.getElementById('input-count');
const totalToDos = document.getElementById('total');

addButton.addEventListener('click', addItemToList);
todoList.addEventListener('click', handleItemClick);
todoInput.addEventListener('keydown', handleInputCount);

function handleInputCount(event) {
    const count = event.target.value.length;

    if(count === 0) {
        inputCount.innerText = '';
        return;
    }

    inputCount.innerText = 'Characters count: ' + count;
}

function handleItemClick(event) {
    if(event.target.dataset.action === 'remove') {
        event.target.closest('li').remove();
    }
    if(event.target.dataset.action === 'status') {
        event.target.closest('li').classList.toggle('complete');
    }
}


function addItemToList() {
    if(!todoInput.value) return;

    const listItem = document.createElement('li');
    const listItemRemoveBtn = document.createElement('button');
    const listCheckboxStatus = document.createElement('input');
    const listTextSpan = document.createElement('span');

    listItem.classList.add('todolist__item');

    listItemRemoveBtn.innerText = 'x';
    // added this meta attributes
    listItemRemoveBtn.setAttribute('data-action', 'remove');
    listTextSpan.innerText = todoInput.value;
    listCheckboxStatus.type = 'checkbox';
    // added this meta attributes
    listCheckboxStatus.setAttribute('data-action', 'status')

    listItem.append(listCheckboxStatus)
    listItem.append(listTextSpan)
    listItem.append(listItemRemoveBtn)

 
    todoInput.value = '';
    inputCount.innerText = '';
    todoList.append(listItem);
    if (event.target === addButton) {
       
        totalToDos.innerText = "Total TODO's: " + todoList.childNodes.length;
        return;
    }
}



