import { List } from "../components/project"
import checkImg from "../imgs/check.svg"
let listStorage = []


function addItem (project, nameInput, dateInput, priorityInput, notesInput, inputID) {
        const selectedName = "#" + project.split(" ").join("-")  
        const selected = document.querySelector(selectedName)
        const li = document.createElement('li');
        const item = document.createElement('div')
        item.className="item-container"
        const name = document.createElement('p')
        const date = document.createElement('p')
        const priority = document.createElement('p')
        const notes = document.createElement('p')
        const check = document.createElement('img')
        const identify = document.createElement('p')
        identify.style.display="none"
        identify.id = inputID
        check.src = checkImg
        check.id = "complete"
        date.textContent = dateInput
        priority.textContent = priorityInput
        notes.textContent = notesInput
        name.textContent = nameInput;
        item.appendChild(identify)
        item.appendChild(check)
        item.appendChild(name)
        item.appendChild(date)
        item.appendChild(priority)
        item.appendChild(notes)
        li.appendChild(item)
        selected.appendChild(li)
        
        check.addEventListener('click', (e) => {
            const parent = e.target.parentNode.parentNode.parentNode
            const listItemToRemove = e.target.parentNode.parentNode
            const nameToRemove = e.target.previousSibling.id
            const storage = localStorage.getItem('listItem')
            const storageArray = JSON.parse(storage)
            for(let i = 0; i < storageArray.length; i++){   
                if(nameToRemove === `${storageArray[i].id}`){
                   storageArray.splice(storageArray[i], 1)
                    localStorage.setItem('listItem', JSON.stringify(storageArray))
                    parent.removeChild(listItemToRemove)
                }
            }
        })

        // console.log(List)
        
        List.name = ""
        List.priority = ""
        List.notes = ""

}

export {addItem}