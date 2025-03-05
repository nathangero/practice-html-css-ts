import { setTasks, Task, tasks } from "./tasks";

/// Deletes a task from `tasks`
export function deleteTask(id: string) {
  setTasks(tasks.filter(task => task.id !== id))
}

/// Saves `tasks` into local storage
export function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
}

/// Fetchs `tasks` from local storage
export function loadTasks(): Task[] {
  const tasks = localStorage.getItem("TASKS");
  console.log("no tasks found");
  // If no tasks, return an empty array
  if (tasks == null) return []

  return JSON.parse(tasks);
}