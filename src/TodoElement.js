import MoveButtons from "./MoveButtons";

export default function TodoElement({
  task,
  index,
  deleteTask,
  doTask,
  moveTaskUp,
  moveTaskDown,
}) {
  return (
    <li key={index} className={task.isDone ? "done" : ""}>
      <span className="text">{task.text}</span>
      <button className="done-button" onClick={() => doTask(index)}>
        ✔️
      </button>
      <button className="delete-button" onClick={() => deleteTask(index)}>
        ❌
      </button>
      <MoveButtons
        index={index}
        moveTaskUp={moveTaskUp}
        moveTaskDown={moveTaskDown}
      />
    </li>
  );
}
