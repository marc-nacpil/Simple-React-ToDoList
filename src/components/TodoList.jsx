import React, { useState } from "react";

const TodoList = ({ tasks, onToggleComplete, onToggleDelete }) => {
  const [state, setState] = useState(true);

  const changeState = () => {};

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        List of Tasks
      </h2>

      <div>
        {/* 1. Checks if the array is empty, it will display the p tag */}
        {!tasks.length ? (
          <p className="text-gray-500 text-center">No tasks added yet</p> // If the tasks is empty
        ) : (
          // 2. If the array is not empty, then it will display the task text.
          tasks.map((task) => (
            <div key={task.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 mt-3">

              {/* Displays the name of the task */}
              <span>{task.text}</span>

              <div className="flex items-center gap-2">
                {/* Condition Statment for the color fo the test*/}
                <span className={task.completed ? "text-green-800" : "text-red-800"} >
                  {task.completed ? "Accomplished" : "Not accomplished"}
                </span>

                {/* 3. if task not completed, it will show the done button*/}
                {!task.completed ? (
                  <button
                    // This send the id of the task to the onToggleComplete
                    onClick={() => onToggleComplete(task.id)}
                    className="px-3 py-1 rounded-md text-white transition-colors bg-blue-500 hover:bg-blue-600"
                  >
                    Done
                  </button>
                ) : (
                  // 4. If the task is completed, it will show the X or close button
                  <div>
                    <button
                      onClick={() => onToggleDelete(task.id)}
                      // This send the id of the task to the onToggleComplete
                      className="px-3 py-1 rounded-md text-white transition-colors bg-red-500 hover:bg-red-600"
                    >
                      X
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
