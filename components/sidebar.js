import { logo } from "./logo"
import { addButton } from "./addProject";
import { List } from "./project";



const sideBarContainer = document.querySelector('.sidebar');
const titleContainer = document.createElement('div')
const allLists = document.createElement('h2')
allLists.textContent="All Lists"
allLists.className="list-button"
allLists.classList.add("all")
allLists.id = "selected"
titleContainer.className="title-container"
titleContainer.appendChild(allLists)



titleContainer.addEventListener('click', (e) => {
    const target = e.target
    const previouslySelected = document.querySelector('#selected')
  

    const selected = e.target.textContent.split(" ").join("-")
    const allLists = document.querySelectorAll('.all-lists')
    const selectedList = document.querySelector("#" + selected)
    
        if(e.target.className === "title-container"){

        }else if(selected === "All-Lists") {
            for(let i = 0; i<allLists.length; i++) {
            allLists[i].style.display = "flex"
            }
            List.project = undefined
            previouslySelected.removeAttribute('id')
            target.id="selected"
        } else {
            for(let i = 0; i<allLists.length; i++) {
                allLists[i].style.display = "none"
            }
            selectedList.style.display="flex"
            List.project = e.target.textContent
            previouslySelected.removeAttribute('id')
            target.id="selected"
        }
})



const sidebar = () => {
    
    sideBarContainer.appendChild(logo())
    sideBarContainer.appendChild(titleContainer)
    sideBarContainer.appendChild(addButton)
}


export {sidebar}