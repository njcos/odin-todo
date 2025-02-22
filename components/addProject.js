import { NewProject } from "./addProjectPanel"

const addButton = document.createElement('button')
const buttonText = document.createElement('p')
buttonText.textContent="New Project"
addButton.className="add-button"
addButton.appendChild(buttonText)


addButton.addEventListener('click', () => {
    NewProject()
    
})


export {addButton}