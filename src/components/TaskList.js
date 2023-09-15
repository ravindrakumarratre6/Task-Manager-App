
import "../styles/TaskList.css"
import React, { useEffect, useState } from "react";
import { app } from "../firebase";
import { getFirestore, collection, getDocs, addDoc, doc } from "firebase/firestore/lite";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const db = getFirestore(app);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      const updatedTasks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error fetching tasks: ", error);
    }
  };

  useEffect(() => {
    // Create a variable to track if the component is mounted
    let isMounted = true;

    fetchData(); // Initial fetch

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

  const addTask = async () => {
    try {
      const newTaskData = {
        title: "New Task",
        description: "This is a new task",
        dueDate: "2023-09-30",
      };

      // Add a new document to the "tasks" collection
      const docRef = await addDoc(collection(db, "tasks"), newTaskData);

      // After successfully adding a new task, fetch and update the tasks list
      fetchData();
    } catch (error) {
      console.error("Error adding a new task: ", error);
    }
  };

  return (
    <div className="tasklist">
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
        </div>
      ))}
      <button onClick={addTask} className="add-button">Add Task</button>
    </div>
  );
}

export default TaskList;
