import { project, List} from "./project"
import closeIcon from "../imgs/close.svg"

const main = document.querySelector('.main-panel')
const button = document.createElement('button')
const addItemDiv =document.createElement('div')
const overlay = document.createElement('div')
const panel = document.createElement('div')
overlay.className = "add-item-overlay"
panel.className = "add-item-panel"
const title = document.createElement('h1')
const input = document.createElement('input')
const inputLabel = document.createElement('p')
const submitButton = document.createElement('button')
const closeButton = document.createElement('img')
const headerSection = document.createElement('div')
const date = document.createElement('input')
const select = document.createElement('select')
const option1 = document.createElement('option')
const option2 = document.createElement('option')
const option3 = document.createElement('option')
const notes = document.createElement('textarea')
const notesLabel = document.createElement('p')
const dateLabel = document.createElement('p')
const priorityLabel = document.createElement('p')
dateLabel.className = "add-item-input-label"
dateLabel.textContent="Date"
priorityLabel.className = "add-item-input-label"
priorityLabel.textContent="Priority"
notesLabel.className = "add-item-input-label"
notesLabel.textContent="Notes"
option1.textContent="Low"
option2.textContent="Medium"
option3.textContent="High"
select.appendChild(option1)
select.appendChild(option2)
select.appendChild(option3)
date.setAttribute("type", "date")
headerSection.classList.add("add-item-panel-header")
title.textContent="New Item"
inputLabel.textContent="Item Name"
inputLabel.className = "add-item-input-label"
submitButton.textContent="Submit"
closeButton.src=closeIcon
headerSection.appendChild(title)
headerSection.appendChild(closeButton)
panel.appendChild(headerSection)
panel.appendChild(inputLabel)
panel.appendChild(input)
panel.appendChild(dateLabel)
panel.appendChild(date)
panel.appendChild(priorityLabel)
panel.appendChild(select)
panel.appendChild(notesLabel)
panel.appendChild(notes)
panel.appendChild(submitButton)
overlay.appendChild(panel)
document.body.appendChild(overlay)
overlay.appendChild(panel)
document.body.appendChild(overlay)
addItemDiv.classList.add("add-item-div")
button.className="add-item-button"
button.textContent="Add Item"

//module open close
button.addEventListener('click', () => {
    overlay.style.display = "flex"
    // project.addItem(pick)
}
)
overlay.addEventListener('click', (e) => {
    if(e.target.classList.contains("add-item-overlay")){
        overlay.style.display = "none"
    }
})


// module controls

let itemName = ""
let itemNote = ""



input.addEventListener('input', (e) => {
    itemName = e.target.value;

})

notes.addEventListener('input', (e) => {
    itemNote = e.target.value
})

submitButton.addEventListener('click', () => {
    overlay.style.display = "none"
    List.name = itemName
    List.date = date.value
    List.priority = select.value
    List.notes = itemNote
    console.log(List)

    project.addItem(itemName, date.value, select.value, itemNote)
    input.value = ""
    notes.value = ""
    date.value = ""
    select.value = select.options[0].value
})


function AddItem () {

        addItemDiv.appendChild(button)
        main.appendChild(addItemDiv)
    
}

export {AddItem}