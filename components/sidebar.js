import { logo } from "./logo"
import { addButton } from "./addProject";



const sideBarContainer = document.querySelector('.sidebar');
const titleContainer = document.createElement('div')
titleContainer.className="title-container"


const sidebar = () => {
    sideBarContainer.appendChild(logo())
    sideBarContainer.appendChild(titleContainer)
    sideBarContainer.appendChild(addButton)
}


export {sidebar}