import React, { useState } from "react";

const TodoList = ({ tasks, onToggleComplete }) => {

    const [state, setState] = useState(true);

    const changeState = () => {
        
    }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        List of Tasks
      </h2>

      <div>
        {!tasks.length ? (
          <p className="text-gray-500 text-center">No tasks added yet</p> // If the tasks is empty
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 mt-3"
            >
              <span>{task.text}</span>
              
              <div className="flex items-center gap-2">
                <span className={task.completed ? "text-green-800" : "text-red-800"}>
                  {task.completed ? "Accomplished" : "Not accomplished"}
                </span>
                <button 
                  onClick={() => onToggleComplete(task.id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Toggle
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
