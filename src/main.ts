import './style.css'
import { v4 as uuidV4 } from "uuid";

type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <form id="new-task-form">
      <input type="text" id="new-task-title">
      <button type="submit">Add</button>
    </form>
    <ul id="list"></ul>
  </div>
`

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector<HTMLFormElement>("#new-task-form")
const input = document.querySelector<HTMLInputElement>("#new-task-title")
let tasks: Task[] = loadTasks()
renderTasks();

form?.addEventListener("submit", event => {
  event.preventDefault();

  // Make sure the input isn't empty
  if (input?.value == "" || input?.value == null) return

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  addListItem(newTask)
  tasks.push(newTask);
  saveTasks()
  input.value = "";
})

/// Refreshes the list of tasks
function renderTasks() {
  if (list) { list.innerHTML = ""; }
  tasks.forEach(addListItem);
}


function addListItem(task: Task) {
  // Create a list item
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
  list?.append(item);
}

/// Deletes a task from `tasks`
function deleteTask(id: string) {
  tasks = tasks.filter(task => task.id !== id);
}

/// Saves `tasks` into local storage
function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
}

/// Fetchs `tasks` from local storage
function loadTasks(): Task[] {
  const tasks = localStorage.getItem("TASKS");
  console.log("no tasks found");
  // If no tasks, return an empty array
  if (tasks == null) return []

  return JSON.parse(tasks);
}