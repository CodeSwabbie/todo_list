export default function TodoElement({ task, index, deleteTask, doTask }) {
  return (
    <li key={index} className={task.isDone ? "done" : ""}>
      <span className="text">{task.text}</span>
      <button className="done-button" onClick={() => doTask(index)}>
        ✔️
      </button>
      <button className="delete-button" onClick={() => deleteTask(index)}>
        ❌
      </button>
    </li>
  );
}
