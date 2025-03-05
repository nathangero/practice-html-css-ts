import './style.css'
import { TaskItem } from "./components/TaskItem";
import { TaskForm } from "./components/TaskForm";
import { setTasks, tasks } from "./utils/tasks";
import { loadTasks, saveTasks } from "./utils/storage";


const app = document.querySelector<HTMLDivElement>('#app')!;
app.append(TaskForm());

const list = document.createElement("ul");
list.id = "list";
app.appendChild(list);

setTasks(loadTasks());
renderTasks();

/// Refreshes the list of tasks
export function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => list.appendChild(TaskItem(task, index)));
}

export function updateTaskOrder(prevIndex: number, newIndex: number) {
  const task = tasks.splice(prevIndex, 1)[0]; // Get the task we're moving
  tasks.splice(newIndex, 0, task); // Insert at new position
  saveTasks();
  renderTasks();
}
