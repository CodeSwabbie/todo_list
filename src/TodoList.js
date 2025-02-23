import React, {useState, useEffect} from 'react'
import "./TodoList.css"

export default function TodoList() {
	
	const [tasks, updateTasks] = useState(() => {
		const savedTasks = localStorage.getItem('tasks');
		return savedTasks ? JSON.parse(savedTasks) : [];
	});
	const [newTask, setNewTask] = useState("");
	
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	},[tasks]);
	
	function handleInputChange(event){
		setNewTask(event.target.value);
	}
	
	function handleKeyPress(event){
		if (event.key === 'Enter'){
			addTask();
		}
	}
	
	function addTask(){
		if(newTask.trim() !== ''){
			updateTasks(t => [...t, newTask]);
			setNewTask("");
		}
	}
	
	function deleteTask(index){
		const updatedTasks = tasks.filter((_,i) => i !== index);
		updateTasks(updatedTasks);
	}
	
	return (<div className="to-do-list">

		<h1>To Do List</h1>

		<div>
			<input
			type="text"
			value={newTask}
			onChange={handleInputChange}
			placeholder="Enter task..."
			onKeyDown={handleKeyPress}/>
			<button
			className="add-button"
			onClick={addTask}>Add</button>
		</div>

		<ol>
			{tasks.map((task, index) =>
			<li key={index}>
				<span className="text">{task}</span>
				<button
				className="delete-button"
				onClick={() => deleteTask(index)}
				>❌</button>
			</li>)}
		</ol>
	</div>)
}
