function localSidebar (project) {
    const titleContainer = document.querySelector('.title-container')
    const lists = document.createElement('h2')
    lists.textContent=project
    lists.className="list-button"
    lists.classList.add(project.split(' ').join('-'))
    titleContainer.appendChild(lists)
    
}

export {localSidebar}