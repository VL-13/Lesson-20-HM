const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('todo-add');
const todoList = document.getElementById('todolist');
const inputCount = document.getElementById('input-count');
const listItemCount = document.getElementById('total');
const doneItemCount = document.getElementById('total-done');

addButton.addEventListener('click', addItemToList);
todoList.addEventListener('click', handleItemClick);
todoInput.addEventListener('keydown', handleInputCount);
addButton.addEventListener('click', handleListItemCount);
todoList.addEventListener('click', handleListItemCount);
todoList.addEventListener('change', handleDoneItemCount);


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
    listItemRemoveBtn.setAttribute('data-action', 'remove');
    listTextSpan.innerText = todoInput.value;
    listCheckboxStatus.type = 'checkbox';
    listCheckboxStatus.setAttribute('data-action', 'status');

    listItem.append(listCheckboxStatus)
    listItem.append(listTextSpan)
    listItem.append(listItemRemoveBtn)

    todoInput.value = '';
    inputCount.innerText = '';
    todoList.append(listItem);
}

function handleDoneItemCount(event) {
    const doneItems = this.querySelectorAll('input[type="checkbox"]:checked').length;

    doneItemCount.innerText = 'Done tasks: ' + doneItems;
}

function handleListItemCount(event) {
    const listCount = todoList.childElementCount;

    if (listCount >= 0) {
        listItemCount.innerText = 'Total tasks: ' + listCount;
    }
}