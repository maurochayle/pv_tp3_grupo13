import { useState } from 'react'
import TaskInput from './TaskInput'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }])
    }
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskInput onAddTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
