import React, { useEffect, useState } from 'react'
import ToDoForm from './components/ToDoForm'
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    // the .filter() create a new set of array
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Function to change the task status (Accomplished or Not Accomplished)
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  // State to display the task on the browser's console
  useEffect(() => {
    console.log("List of tasks : ", tasks)
  }, [tasks])

  return (
    <div>
      <h1 className='mb-20 text-center'>This is a To Do List App</h1>

      <ToDoForm onAddTask={handleAddTask} />
      <TodoList tasks={tasks} onToggleComplete={toggleTaskCompletion} onToggleDelete={deleteTask}/> 
    </div>
  )
}

export default App