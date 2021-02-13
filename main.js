console.log("Todo")

let input = document.querySelector(".input");
let todoList = document.querySelector(".container");
let button = document.querySelector(".add");


button.addEventListener('click', () => {
    console.log("ADD");

    // Wenn input leer, nichts machen
    if (input.value == ""){
        alert("Kein Text")
        return
    }

    //1. Variablen erstellen, 2. Stylen 3. Positionieren



    //BOX FÜR EINTRAG

    // Variable , Element erstellen (DIV)
    let newItem = document.createElement("Div")

    // Stylen: Klasse dafür zuweisen (siehe CSS)
    newItem.classList.add("item")

    // Item Positionieren...das Kindelement von todolist
    todoList.appendChild(newItem)




    // TEXT / EINFÜGEN

    // Variable, Element erstellen
    let newText = document.createElement("Div")

    // Klasse dafür zuweisen (siehe CSS)
    newText.classList.add("item_input")

    // Text hinein schreiben, wenn Input leer ist, newItem löschen

    newText.innerHTML = input.value;


    // Item Positionieren
    newItem.appendChild(newText);

    //console.log("Eintrag : " + newText.innerHTML)


    //Input Feld Leeren nach dem Eintragen
    input.value = "";





    // BUTTON ERSTELLEN

    // Remove Button
    let removeButton = document.createElement("Button");
    removeButton.classList.add("remove");
    newItem.appendChild(removeButton);

    let icon = document.createElement("i");
    icon.classList.add("fa-trash-alt");
    icon.classList.add("fa");
    removeButton.appendChild(icon);


    // Edit Button
    let editButton = document.createElement("Button");
    editButton.classList.add("edit");
    newItem.appendChild(editButton);

    let icon2 = document.createElement("i");
    icon2.classList.add("fa-edit");
    icon2.classList.add("far");
    editButton.appendChild(icon2);


    // Edit Funktion
    removeButton.addEventListener('click', () =>{
        console.log("Delete")
        newItem.remove()
    })

    //EDIT
    let editable = newText.contentEditable


    editButton.addEventListener('click', () =>{
    console.log("EDIT")
    // EDIT
    newText.contentEditable = "true"
    })
})
