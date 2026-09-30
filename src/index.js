import "./assets/css/styles.css";
import { createTodoCard } from "./components/view/todoCard.js";
import { todoItem } from "./components/data/todoItem.js"

const items = document.querySelector(".items");
const todoItem1 = new todoItem("Study", "Study Blender", new Date(2026, 10, 1));
const todoItem2 = new todoItem("Game Dev", "Make fun game", new Date(2026, 10, 2));
const todoItems = [todoItem1, todoItem2];

todoItems.forEach((todoItem) => {
  const todoCard = createTodoCard(todoItem);
  items.appendChild(todoCard);
})

console.log("Hello World");