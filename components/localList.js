import { formatDistanceToNowStrict } from "date-fns"
import trashIcon from "../imgs/trash.svg"
import { localSidebar } from "./localSidebar"



function localList(project) {
    const titleContainer = document.querySelector('.title-container')
    const main = document.querySelector('.main-panel')
    const listID = project.split(' ').join('-')
    const ul = document.createElement('ul')
    ul.className='all-lists'
    ul.id = listID
    const title = document.createElement('h2')
    const header = document.createElement('div')
    header.className = "list-header"
    const trash = document.createElement('img')
    trash.src = trashIcon
    trash.className = "trash-icon"
    title.textContent= project
    header.appendChild(title)
    header.appendChild(trash)
    ul.appendChild(header)
    main.appendChild(ul)
    localSidebar(project)

    trash.addEventListener("click", (e) => {
        const listItemToRemove = e.target.previousSibling.textContent
        const domItemToRemove = e.target.parentNode.parentNode
        const storage = localStorage.getItem('listItem')
        const storageArray = JSON.parse(storage)
        const sidebarItems = document.getElementsByClassName('.list-button')
        for(let i = 0; i < storageArray.length; i++){
            console.log(storageArray[i])

            if(listItemToRemove === `${storageArray[i].project}`){
                console.log(storageArray.indexOf(storageArray[i]))
                storageArray.splice(storageArray.indexOf(storageArray[i]), 1)
                    localStorage.setItem('listItem', JSON.stringify(storageArray))
                    
                }
            }
            console.log(domItemToRemove)
            main.removeChild(domItemToRemove)
            // location.reload()

    })
}

export {localList}