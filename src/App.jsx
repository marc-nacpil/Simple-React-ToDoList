import React, { useEffect, useState } from "react";
import ToDoForm from "./components/ToDoForm";
import TodoList from "./components/TodoList";
import FinishedTask from "./components/FinishedTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);

  // Function to add a task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  // Function to move the task to the finishedTasks array and delete it from the tasks array
  const moveTask = (taskId) => {
    const taskToDelete = tasks.find((task) => task.id === taskId);
    setFinishedTasks([...finishedTasks, taskToDelete]);
    deleteTask(taskId);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    // the .filter() create a new set of array
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const clearTasks = (data) => {
    {
      data === tasks ? setTasks([]) : setFinishedTasks([]);
    }
  };

  // Function to delete a task
  const deleteFinishedTask = (taskId) => {
    // the .filter() create a new set of array
    setFinishedTasks(finishedTasks.filter((task) => task.id !== taskId));
  };

  // Function to change the task status (Accomplished or Not Accomplished)
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // State to display the pending and finished tasks on the browser's console
  useEffect(() => {
    console.log("Pending Tasks : ", tasks);
  }, [tasks]);

  useEffect(() => {
    console.log("Finished Tasks : ", finishedTasks);
  }, [finishedTasks]);

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <ToDoForm onAddTask={handleAddTask} />
          <TodoList
            tasks={tasks}
            onToggleComplete={toggleTaskCompletion}
            onToggleDelete={moveTask}
            clearTask={() => clearTasks(tasks)}
          />
        </div>

        <div className="flex-1">
          <FinishedTask
            finishedTasks={finishedTasks}
            itemToDelete={deleteFinishedTask}
            clearTask={() => clearTasks(finishedTasks)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
