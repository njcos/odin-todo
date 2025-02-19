import { all } from "axios";

const main = document.querySelector('.main-panel')
let selector = document.querySelector("#All-Items")

let listStorage = []



function itemObject (project, name, date, priority, notes) {
    this.project = project;
    this.name = name;
    this.date = date;
    this.priority = priority;
    this.notes = notes;        

}

let List = new itemObject()


class project {

    static projectList = [];
    constructor(title){
        this.title = title;
        this.list = document.querySelector("#"+this.title.split(" ").join("-"))
        if(!this.list){
            this.list = document.createElement('ul');
            this.list.id = this.title.split(" ").join("-");
            this.list.className = "all-lists"
            main.appendChild(this.list)
            project.projectList.push(this.title)
            this.addToSideBar()

        }
    }

    addToSideBar() {
        const sidebar = document.querySelector('.title-container')
        const name = document.createElement('h2');
        name.className="project-select"
        const listTitle = document.createElement('h1')
        main.appendChild(listTitle)
        name.textContent = this.title;
        sidebar.appendChild(name)
        name.addEventListener('click', () => {
            const selected = document.querySelector(`#${name.textContent.split(" ").join("-")}`)
            selector = selected;
            const allLists = document.querySelectorAll('.all-lists')
            if(name.textContent === "All Items"){
                for(let i =0; i<allLists.length; i++){
                    allLists[i].style.display = "flex"
                }
            } else {

                for(let i =0; i<allLists.length; i++){
                    allLists[i].style.display = "none"
                }
                selected.style.display = "flex"

            }
           

        })
        name.click()
    }

    static addItem (nameInput, dateInput, priorityInput, notesInput) {        
        const selected = selector
        const li = document.createElement('li');
        const item = document.createElement('div')
        item.className="item-container"
        const name = document.createElement('p')
        const date = document.createElement('p')
        const priority = document.createElement('p')
        const notes = document.createElement('p')
        const completeContainer = document.createElement('div')
        completeContainer.className="complete-container"
        const check = document.createElement('input')
        const checkLabel = document.createElement('p')
        check.setAttribute('type', 'checkbox')
        checkLabel.textContent="Complete"
        date.textContent = dateInput
        priority.textContent = priorityInput
        notes.textContent = notesInput
        name.textContent = nameInput;
        completeContainer.appendChild(checkLabel)
        completeContainer.appendChild(check)
        item.appendChild(completeContainer)
        item.appendChild(name)
        item.appendChild(date)
        item.appendChild(priority)
        item.appendChild(notes)
        li.appendChild(item)
        selected.appendChild(li)
        listStorage.push(List)
        localStorage.setItem('listItem', JSON.stringify(listStorage))
        List = new itemObject()
        console.log(List)

    }
}



export { project, List }