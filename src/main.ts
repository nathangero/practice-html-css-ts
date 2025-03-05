import './style.css'
import { TaskItem } from "./components/TaskItem";
import { TaskForm } from "./components/TaskForm";
import { setTasks, tasks } from "./utils/tasks";
import { loadTasks } from "./utils/storage";


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
  tasks.forEach(task => list.appendChild(TaskItem(task)));
}
