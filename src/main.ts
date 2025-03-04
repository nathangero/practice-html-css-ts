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
  input.value = "";
})

function addListItem(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"

  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
}