import React, { useState } from "react";
import Button from "./Button";

const ToDoForm = ({ onAddTask }) => {
  // State
  const [task, setTask] = useState("");

  // Function to pass the information to the parent
  const handleSubmit = () => {
    if (task.trim()) {
      onAddTask(task);
      console.log(`${task} is successfully stored`);
      setTask("");
    }
  };

  // Function for the Enter Key
  const enterKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="base-card">
      <h2>Add New Task</h2>

      <div className="space-y-4">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="What do you need to do?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={enterKey}
          />
        </div>

        <Button buttonName="Add Task" action={handleSubmit}></Button>
      </div>
    </div>
  );
};

export default ToDoForm;
