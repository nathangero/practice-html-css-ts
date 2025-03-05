export type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

export let tasks: Task[] = []

export function setTasks(newTasks: Task[]) {
  tasks = newTasks;
}