export class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.todoItems = [];
  }

  addItem(todoItem) {
    this.todoItems.push(todoItem);
  }

  // testing purposes
  printItems() {
    this.todoItems.forEach(item => console.log(item.title));
  }
}