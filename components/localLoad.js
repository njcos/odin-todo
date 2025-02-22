import { localList } from "./localList"
import { localSidebar } from "./localSidebar"
import { addItem } from "./listItem"




function load () {



    const storage = localStorage.getItem('listItem')
    const storageArray = JSON.parse(storage)
    const main = document.querySelector('.main-container')


    for(let i =0; i<storageArray.length; i++){
        const searchName = "#" + storageArray[i].project.split(' ').join("-")
        const existing = document. querySelector(searchName)
        if(!existing) {
            const project = storageArray[i]
            // console.log(storageArray[i])
            localList(`${project.project}`)
        }
        addItem(storageArray[i].project, storageArray[i].name, storageArray[i].date, storageArray[i].priority, storageArray[i].notes, storageArray[i].id)
    }

}



export {load}