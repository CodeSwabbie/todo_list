import MoveButtons from "./MoveButtons";

export default function TodoElement({
  task,
  deleteTask,
  doTask,
  updateTasks,
  tasks,
  index,
}) {
  return (
    <li className={task.isDone ? "done" : ""}>
      <span className="text">{task.text}</span>
      <button className="done-button" onClick={() => doTask(task.id)}>
        ✔️
      </button>
      <button className="delete-button" onClick={() => deleteTask(task.id)}>
        ❌
      </button>
      <MoveButtons index={index} tasks={tasks} updateTasks={updateTasks} />
    </li>
  );
}
