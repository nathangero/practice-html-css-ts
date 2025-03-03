import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <ul id="list"></ul>
    <form id="new-task-form">
      <input type="text" id="new-task-title">
      <button type="submit">Add</button>
    </form>
  </div>
`

