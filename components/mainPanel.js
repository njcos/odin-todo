import { List } from "./project";


function mainPanel () {
    const main = document.querySelector('.main-panel')
    const list = document.createElement('ul')
    list.id = "All-Items"
    list.className="all-lists"
    main.appendChild(list)


}

export {mainPanel}