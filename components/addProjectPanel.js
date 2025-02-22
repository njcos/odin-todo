import closeIcon from "../imgs/close.svg"
import { List } from "./project"
// import { CreateList } from "./createList"
// import { addItem } from "./listItem"
import { localList } from "./localList"

const overlay = document.createElement('div')
const panel = document.createElement('div')
const title = document.createElement('h1')
const input = document.createElement('input')
const button = document.createElement('button')
const closeButton = document.createElement('img')
const headerSection = document.createElement('div')
headerSection.classList.add("new-project-panel-header")
overlay.classList.add('overlay')
panel.classList.add('new-project-panel')
title.textContent="New Project"
button.textContent="Submit"
closeButton.src=closeIcon
headerSection.appendChild(title)
headerSection.appendChild(closeButton)
panel.appendChild(headerSection)
panel.appendChild(input)
panel.appendChild(button)
overlay.appendChild(panel)
document.body.appendChild(overlay)
closeButton.addEventListener('click', () => {
    overlay.style.display="none"
})

let outputString = ""
input.addEventListener('input', (e) => {
    outputString = e.target.value;
})

input.addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
        button.click()
    }
})
button.addEventListener('click', () => {
    List.project = outputString
    // List.id = Math.floor(Math.random()*1000)
    localList(outputString)
    // CreateList()
    // SidebarProjectButtons()
    overlay.style.display="none"
    input.value="";
})

overlay.addEventListener('click', (e) => {
    if(e.target.classList.contains('overlay')){
        // console.log(e.target)
        overlay.style.display="none"
    }
})

function NewProject () {
    overlay.style.display="flex"

}

export {NewProject}