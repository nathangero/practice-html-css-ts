import { v4 as uuidV4 } from "uuid";
import { Task, tasks } from "../utils/tasks";
import { saveTasks } from "../utils/storage";
import { renderTasks } from "../main";

export function TaskForm(): HTMLDivElement {
  const container = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "Todo List";

  const form = document.createElement("form");
  form.id = "new-task-form";

  const input = document.createElement("input");
  input.type = "text";
  input.id = "new-task-title";

  const button = document.createElement("button");
  button.type = "submit";
  button.innerText = "Add";

  const alert = document.createElement("h3");
  alert.setAttribute("class", "input-error");
  alert.textContent = "Input field can't be blank"
  alert.setAttribute("class", "input-error hidden");

  form.append(input, button);

  form?.addEventListener("submit", event => {
    event.preventDefault();
    const userInput = input?.value.trim();

    // Make sure the input isn't empty
    if (userInput == "" || userInput == null) {
      // console.log("blank input");
      input.value = ""; // Reset the input
      alert.setAttribute("class", "input-error visible");
      return;
    } else {
      alert.setAttribute("class", "input-error hidden");
    }



    const newTask: Task = {
      id: uuidV4(),
      title: userInput,
      completed: false,
      createdAt: new Date()
    }

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    input.value = "";
  })

  container.append(h1, form, alert);
  return container;
}