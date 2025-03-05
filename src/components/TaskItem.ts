import { renderTasks, updateTaskOrder } from "../main";
import { deleteTask, saveTasks } from "../utils/storage";
import { Task } from "../utils/tasks";

export function TaskItem(task: Task, index: number): HTMLLIElement {
  const item = document.createElement("li");
  item.setAttribute("draggable", "true");
  item.dataset.index = index.toString();

  // Create a div that will evenly space the elements
  const taskItem = document.createElement("div");
  taskItem.setAttribute("class", "column");

  // Create the checkbox
  const checkbox = document.createElement("input");
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
    saveTasks();
  });
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  // Create the title of the todo task
  const title = document.createElement("p");
  title.innerHTML = task.title;

  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", task.id);

  deleteButton.addEventListener("click", () => {
    deleteTask(deleteButton.id);
    saveTasks();
    renderTasks();
  });

  // Allow for Drag and Drop
  item.addEventListener("dragstart", event => {
    event.dataTransfer?.setData("text/plain", index.toString());
    item.classList.add("dragging");
  });

  item.addEventListener("dragover", event => {
    event.preventDefault();
  });

  item.addEventListener("drop", event => {
    event.preventDefault();
    const prevIndex = Number(event.dataTransfer?.getData("text/plain"));
    const newIndex = Number(item.dataset.index);
    updateTaskOrder(prevIndex, newIndex);
  });

  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });

  // Append everything to the list element
  taskItem.append(checkbox, title, deleteButton);
  item.append(taskItem);

  return item;
}