import MoveButtons from "./MoveButtons";
// import TaskEditor from "./TaskEditor";

export default function TodoElement({
  task,
  deleteTask,
  doTask,
  moveTaskUp,
  moveTaskDown,
}) {
  return (
    <li key={task.id} className={task.isDone ? "done" : ""}>
      <span className="text">{task.text}</span>
      <button className="done-button" onClick={() => doTask(task.id)}>
        ✔️
      </button>
      <button className="delete-button" onClick={() => deleteTask(task.id)}>
        ❌
      </button>
      <MoveButtons
        task={task}
        moveTaskUp={moveTaskUp}
        moveTaskDown={moveTaskDown}
      />
    </li>
  );
}
