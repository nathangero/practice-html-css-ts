import { v4 as uuidV4 } from "uuid";
import { Task, tasks } from "../utils/tasks";
import { saveTasks } from "../utils/storage";

export function TaskForm(): HTMLFormElement {
  const form = document.createElement("form");
  form.id = "new-task-form";

  const input = document.createElement("input");
  input.type = "text";
  input.id = "new-task-title";

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

    tasks.push(newTask);
    saveTasks();

    input.value = "";
  })

  return form;
}