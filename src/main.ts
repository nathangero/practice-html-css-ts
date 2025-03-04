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
    <ul id="list"></ul>
    <form id="new-task-form">
      <input type="text" id="new-task-title">
      <button type="submit">Add</button>
    </form>
  </div>
`

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector<HTMLFormElement>("#new-task-form")
const input = document.querySelector<HTMLInputElement>("#new-task-title")
const tasks: Task[] = loadTasks()
tasks.forEach(addListItem)

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


function addListItem(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
    saveTasks()
  });
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
}

function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const tasks = localStorage.getItem("TASKS");

  // If no tasks, return an empty array
  if (tasks == null) return []

  return JSON.parse(tasks);
}