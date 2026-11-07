import "./assets/css/styles.css";
import { createTodoCard } from "./components/view/todoCard.js";
import { TodoItem } from "./components/data/todoItem.js"
import { Project } from "./components/data/project.js";

const items = document.querySelector(".items");
const todoItem1 = new TodoItem("Study", "Study Blender", new Date(2026, 10, 1));
const todoItem2 = new TodoItem("Game Dev", "Make fun game", new Date(2026, 10, 2));
const todoItems = [todoItem1, todoItem2];

todoItems.forEach((todoItem) => {
  const todoCard = createTodoCard(todoItem);
  items.appendChild(todoCard);
})