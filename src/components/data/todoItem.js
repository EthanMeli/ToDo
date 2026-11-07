export class TodoItem {
  constructor(title, description, dueDate, project) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = false;
    this.project = project | null;
  }

  deleteButton = null;

  set deleteButton(button) {
    this.deleteButton = button;
  }
}