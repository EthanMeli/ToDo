import { format } from "date-fns";

export function createTodoCard(todoItem) {
  const todoCard = document.createElement("div");
  todoCard.classList.add("todoCard")

  const title = document.createElement("h3");
  title.textContent = todoItem.title;

  const priority = document.createElement("span");
  priority.textContent = todoItem.priority;

  const header = document.createElement("div");
  header.appendChild(title);
  header.appendChild(priority);

  const description = document.createElement("p");
  description.textContent = todoItem.description;

  const dueDate = document.createElement("div");
  const formattedDueDate = format(todoItem.dueDate, "MMM d, yyyy");
  dueDate.textContent = `Due: ${formattedDueDate}`;

  const body = document.createElement("div");
  body.appendChild(description);
  body.appendChild(dueDate);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";

  const footer = document.createElement("div");
  footer.appendChild(deleteButton);
  footer.appendChild(editButton);

  todoCard.appendChild(header);
  todoCard.appendChild(body);
  todoCard.appendChild(footer);

  return todoCard;
}