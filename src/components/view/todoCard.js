import { todoItem } from "../data/todoItem.js"

const item1 = new todoItem("Item1", "Description");
const todoCard = document.createElement("div");
todoCard.textContent = `Title: ${item1.title}, Description: ${item1.description}`;

export const todoCards = [todoCard]

console.log(item1.title + " " + item1.description);