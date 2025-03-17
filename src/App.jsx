import React, { useEffect, useState } from 'react'
import ToDoForm from './components/ToDoForm'
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  useEffect(() => {
    console.log("List of tasks : ", tasks)
  }, [tasks])

  return (
    <div>
      <h1 className='mb-20 text-center'>This is a To Do List App</h1>

      <ToDoForm onAddTask={handleAddTask} />
      <TodoList tasks={tasks} onToggleComplete={toggleTaskCompletion} />
    </div>
  )
}

export default App