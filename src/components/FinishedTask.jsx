import React from "react";
import TodoItem from "./TodoItem";
import Button from "./Button";

const FinishedTask = ({ finishedTasks, itemToDelete, clearTask }) => {
  return (
    <div className="base-card">
      <h2>Finished Tasks</h2>

      {/* 1. It checks if there are tasks store in the array. */}
      {!finishedTasks.length ? (
        <p className="text-gray-500 text-center mt-10 mb-5">
          No tasks added yet
        </p> // If the tasks is empty
      ) : (
        <>
          {finishedTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onToggleDelete={itemToDelete}
            ></TodoItem>
          ))}

          {finishedTasks.length >= 2 && (
            <Button buttonName="Clear" action={clearTask}></Button>
          )}
        </>
      )}
    </div>
  );
};

export default FinishedTask;
