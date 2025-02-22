
function itemObject (id, project, name, date, priority, notes) {
    this.id = id;
    this.project = project;
    this.name = name;
    this.date = date;
    this.priority = priority;
    this.notes = notes;        

}

let List = new itemObject()

export {  List }