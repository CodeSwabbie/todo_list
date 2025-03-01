import React, { useState, useEffect } from "react";
import "./TodoList.css";
import TodoElement from "./TodoElement";
import handleKeyPress from "./handleKeyPress";
import handleInputChange from "./handleInputChange";

export default function TodoList() {
  const [tasks, updateTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (newTask.trim() !== "") {
      const maxId =
        tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) : -1;
      const creationDate = new Date();
      const newTaskObject = {
        id: maxId + 1,
        text: newTask,
        isDone: false,
        date: creationDate,
      };
      updateTasks((t) => [...t, newTaskObject]);
      setNewTask("");
    }
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={(event) => handleInputChange(event, setNewTask)}
          placeholder="Enter task..."
          onKeyDown={(event) => handleKeyPress(event, addTask)}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <TodoElement
            key={task.id}
            tasks={tasks}
            updateTasks={updateTasks}
            task={task}
            id={task.id}
            index={index}
            // doTask={doTask}
          />
        ))}
      </ol>
    </div>
  );
}
