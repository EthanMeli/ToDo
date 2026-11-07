import "./assets/css/styles.css";
import { createTodoCard } from "./components/view/todoCard.js";
import { TodoItem } from "./components/data/todoItem.js"
import { Project } from "./components/data/project.js";

const itemDisplay = document.querySelector(".item-display");
const todoItems = [];
createItem("Study", "Study Blender", new Date(2026, 10, 1));
createItem("Game Dev", "Make fun game", new Date(2026, 10, 2));

function createItem(title, description, date) {
  const todoItem = new TodoItem(title, description, date);
  const todoCard = createTodoCard(todoItem);

  todoItems.push(todoItem);
  itemDisplay.appendChild(todoCard);

  todoItem.deleteButton.addEventListener("click", () => {
    removeItem(todoItem.id);
  });
}

function removeItem(itemId) {
  const itemIndex = todoItems.findIndex(item => item.id === itemId);
  todoItems.splice(itemIndex, 1);
  refreshItems();
}

function refreshItems() {
  itemDisplay.innerHTML = ''
  todoItems.forEach((todoItem) => {
    const todoCard = createTodoCard(todoItem);
    itemDisplay.appendChild(todoCard);
    todoItem.deleteButton.addEventListener("click", () => {
      removeItem(todoItem.id);
    });
  });
}