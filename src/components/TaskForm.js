// TaskForm.js (for task creation)
import "../styles/TaskFrom.css"
import { getDatabase, set, ref, push } from "firebase/database"; // Correct import statements
import React, { useState } from "react";
import { app } from "../firebase"; // Assuming you have a Firebase configuration in this file

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const db = getDatabase(app);

  const handleCreateTask = () => {
    // Use the "push" function to generate a new child node with a unique key
    const tasksRef = ref(db, "tasks");
    const newTaskRef = push(tasksRef);

    set(newTaskRef, {
      title,
      description,
      dueDate,
      completed: false,
    });

    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div className="task-form">
        <h1>Task form</h1>
      <div className="title">
       
        <label>Title</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="description">
        <label>Description</label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="time">
        {" "}
        <label>Time</label>
        <input
          type="date"
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
}

export default TaskForm;
