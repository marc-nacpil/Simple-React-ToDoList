import React from "react";

const TodoItem = ({ task, onToggleDelete }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border my-4 border-gray-200 hover:bg-gray-100 mt-3">
      {task.text}
      <button
        onClick={() => onToggleDelete(task.id)}
        className="px-3 py-1 rounded-md text-white transition-colors bg-red-500 hover:bg-red-600"
      >
        {/* Placeholder for SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;
