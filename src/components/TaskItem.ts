import { renderTasks } from "../main";
import { deleteTask, saveTasks } from "../utils/storage";
import { Task } from "../utils/tasks";

export function TaskItem(task: Task): HTMLLIElement {
  const item = document.createElement("li");

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

  // Append everything to the list element
  taskItem.append(checkbox, title, deleteButton);
  item.append(taskItem);

  return item;
}