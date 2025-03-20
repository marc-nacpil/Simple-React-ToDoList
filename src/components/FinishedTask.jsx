import React from "react";

const FinishedTask = ({ finishedTasks }) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        List of Accomplished Tasks
      </h2>

      {/* 1. It checks if there are tasks store in the array. */}
      {!finishedTasks.length ? (
        <p className="text-gray-500 text-center">No tasks added yet</p> // If the tasks is empty
      ) : (
        // If there is, it will use the map() function to display each task according to its ID.
        finishedTasks.map((task) => (
          <div key={task.id}>
            <li>{task.text}</li>
          </div>
        ))
      )}
    </div>
  );
};

export default FinishedTask;
