console.log("Todo")

let input = document.querySelector(".input");
let todoList = document.querySelector(".container");
let button = document.querySelector(".add");

button.addEventListener('click', () => {
    console.log("Click");

    //Box für Eintrag
    let newItem = document.createElement("Div")
    newItem.classList.add("item")
    todoList.appendChild(newItem)

    let newText = document.createElement("Div")
    newText.classList.add("item_input")
    newText.innerHTML = input.value;
    newItem.appendChild(newText);

    let removeButton = document.createElement("Button");
    removeButton.classList.add("remove");
    newItem.appendChild(removeButton);

    let icon = document.createElement("i");
    icon.classList.add("fa-minus");
    icon.classList.add("fa");
    removeButton.appendChild(icon);

    removeButton.addEventListener('click', () =>{
        newItem.remove()
    })


    // EDIT
    // Button, Eventlistener, innerHTML von newText ändern
    let editButton = document.createElement("Button");
    editButton.classList.add("edit");
    newItem.appendChild(editButton);

    let icon2 = document.createElement("i");
    icon2.classList.add("fa-plus");
    icon2.classList.add("fa");
    editButton.appendChild(icon2);

    editButton.addEventListener('click', () =>{
    newItem.edit()
    })





});