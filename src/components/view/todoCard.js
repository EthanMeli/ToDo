import { format } from "date-fns";

export function createTodoCard(todoItem) {
  const todoCard = document.createElement("div");
  todoCard.classList.add("todoCard")

  const title = document.createElement("h3");
  title.textContent = todoItem.title;

  const priority = document.createElement("span");
  priority.textContent = todoItem.priority;

  const description = document.createElement("p");
  description.textContent = todoItem.description;

  const dueDate = document.createElement("div");
  const formattedDueDate = format(todoItem.dueDate, "MMM d, yyyy");
  dueDate.textContent = formattedDueDate;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";

  todoCard.appendChild(title);
  todoCard.appendChild(priority);
  todoCard.appendChild(description);
  todoCard.appendChild(dueDate);
  todoCard.appendChild(deleteButton);
  todoCard.appendChild(editButton);

  return todoCard;
}