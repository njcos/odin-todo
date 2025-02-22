function localSidebar (project) {
    const titleContainer = document.querySelector('.title-container')
    const lists = document.createElement('h2')
    lists.textContent=project
    lists.className="list-button"
    titleContainer.appendChild(lists)
}

export {localSidebar}