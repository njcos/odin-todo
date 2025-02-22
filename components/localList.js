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
    // const allLists = document.querySelectorAll('.all-lists')
    // for(let i = 0; i<allLists.length; i++) {
    //     allLists[i].style.display = "none"
    // }
    // const
    // selectedList.style.display="flex"
    // previouslySelected.removeAttribute('id')
    // target.id="selected"


    trash.addEventListener("click", (e) => {
        const storage = localStorage.getItem('listItem')
        const storageArray = JSON.parse(storage)
        console.log(storageArray)
        const listItemToRemove = e.target.previousSibling.textContent
        const listIndex = []
        const domItemToRemove = e.target.parentNode.parentNode
        const sidebarItems = document.querySelectorAll('.list-button')
        storageArray.forEach((item)=>{
            if(item.project === listItemToRemove){
                listIndex.push(storageArray.indexOf(item))
            }
        })
        listIndex.reverse()
        for(let i = 0; i<listIndex.length; i++){
            storageArray.splice(listIndex[i], 1)
        }
        localStorage.setItem('listItem', JSON.stringify(storageArray))
        main.removeChild(domItemToRemove)
        console.log(titleContainer)
        sidebarItems.forEach((item) => {
            if(item.textContent === listItemToRemove){
                console.log(item.textContent)
                console.log(listItemToRemove)
                titleContainer.removeChild(item)
            }
            item.removeAttribute('id')
            const allLists = document.querySelectorAll('.all-lists')
            const all = document.querySelector('.all')
            all.id="selected"
            for(let i = 0; i<allLists.length; i++) {
                allLists[i].style.display = "flex"
                }
    
        })

    })
}

export {localList}