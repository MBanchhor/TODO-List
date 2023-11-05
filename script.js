const textInput = document.querySelector('#text-input');
const addButton = document.querySelector('#add-button');
const todosContainer = document.querySelector('.todos-container');

addButton.addEventListener('click', () => {
    if (textInput.value.trim().length == '')
        return;

    // create div add class todo-item-container 
    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');

    todosContainer.appendChild(todoItemContainer);

    // create event element add id = todo-text
    const todoText = document.createElement('event');
    todoText.id = 'todo-text';
    todoText.innerText = textInput.value;
    todoItemContainer.appendChild(todoText);

    // add  click to todoText 
    todoText.addEventListener('click', () => {
        todoText.classList.add('line-through');
        
    })

    // create buton and add id = deleteButton
    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete-button';
    // create img add it to delete-button
    const deleteImage = document.createElement('img');
    deleteImage.src = 'delete.svg';
    deleteButton.appendChild(deleteImage);
    todoItemContainer.appendChild(deleteButton);

    // add click event for deleteButton
    deleteButton.addEventListener('click', () => {
        const parent = deleteButton.parentElement;
        parent.parentElement.removeChild(parent);
    });


    textInput.value = "";

});