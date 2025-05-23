import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }])
    }
  }

  const onToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={onDelete} onToggleComplete={onToggleComplete}/>
    </div>
  )
}

export default App
