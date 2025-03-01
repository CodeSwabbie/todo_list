import DeleteTask from "./DeleteTask";
import MoveButtons from "./MoveButtons";

export default function TodoElement({
  task,
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
      <DeleteTask updateTasks={updateTasks} tasks={tasks} task={task} />
      <MoveButtons index={index} tasks={tasks} updateTasks={updateTasks} />
    </li>
  );
}
