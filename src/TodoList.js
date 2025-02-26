import React, { useState, useEffect } from "react";
import "./TodoList.css";
import TodoElement from "./TodoElement";

export default function TodoList() {
  const [tasks, updateTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  function addTask() {
    if (newTask.trim() !== "") {
      const newTaskObject = { text: newTask, isDone: false };
      updateTasks((t) => [...t, newTaskObject]);
      setNewTask("");
    }
  }

  function doTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    updateTasks(updatedTasks);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    updateTasks(updatedTasks);
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index + 1];
      updatedTasks[index + 1] = updatedTasks[index];
      updatedTasks[index] = temp;
      updateTasks(updatedTasks);
    }
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index - 1];
      updatedTasks[index - 1] = updatedTasks[index];
      updatedTasks[index] = temp;
      updateTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter task..."
          onKeyDown={handleKeyPress}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <TodoElement
            key={index}
            index={index}
            task={task}
            deleteTask={deleteTask}
            doTask={doTask}
            moveTaskDown={moveTaskDown}
            moveTaskUp={moveTaskUp}
          />
        ))}
      </ol>
    </div>
  );
}
