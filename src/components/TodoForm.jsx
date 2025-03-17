import React, { useState } from "react";

const ToDoForm = ({onAddTask}) => {

    // State
    const [task, setTask] = useState("");

    // Function to pass the information to the parent
    const handleSubmit = () => {
        if (task.trim()) {
            onAddTask(task) 
            console.log(`${task} is successfully stored`);
            setTask(""); 
        }
    }

    // Function for the Enter Key
    const enterKey = (e) => {
        if(e.enterKey = 'Enter'){
            handleSubmit();
        }
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Task</h2>

            <div className="space-y-4">
                <div className="flex flex-col">
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition-all"
                        type="text"
                        placeholder="Add task here..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </div>

                <button
                    type="button"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-200"
                    onClick={handleSubmit}
                >
                    Add Task
                </button>
            </div>
        </div>
    );
};

export default ToDoForm;

// import React, { useState } from "react";

// const ToDoForm = () => {
//   const [task, setTask] = useState("");

//   const handleSubmission = (props) => {
//     if (task.trim()){
//         setTask()
//     } 

//   }

//   return (
//     <div>
//       <h1>Enter a Task Here</h1>

//       <div>
//         <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
//         <button> </button>
//       </div>
//     </div>
//   );
// };

// export default ToDoForm;
