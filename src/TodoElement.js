export default function TodoElement({
  task,
  index,
  deleteTask,
  doTask,
  doneTasks,
}) {
  return (
    <li key={index} className={doneTasks.includes(index) ? "done" : ""}>
      <span className="text">{task}</span>
      <button className="done-button" onClick={() => doTask(index)}>
        ✔️
      </button>
      <button className="delete-button" onClick={() => deleteTask(index)}>
        ❌
      </button>
    </li>
  );
}
