import "./assets/css/styles.css";
import { todoCards } from "./components/view/todoCard.js";

const items = document.querySelector(".items");
todoCards.forEach((todoItem) => {
  items.appendChild(todoItem);
})

console.log("Hello World");