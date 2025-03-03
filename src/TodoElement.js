import DoneTask from "./DoneTask";
import DeleteTask from "./DeleteTask";
import MoveButtons from "./MoveButtons";
import EditTask from "./EditTask";

export default function TodoElement({
  task,
  updateTasks,
  tasks,
  index,
  acceptEdit,
}) {
  return (
    <li className={task.isDone ? "done" : ""}>
      <EditTask tasks={tasks} task={task} updateTasks={updateTasks} />
      {task.isEdit ? (
        <>
          <input
            className="edit-input"
            placeholder={task.text}
            id="input-edit"
          ></input>
          <button
            className="edit-done"
            onClick={() =>
              updateTasks(acceptEdit(tasks, task.id, "input-edit"))
            }
          >
            Done
          </button>
        </>
      ) : (
        <>
          <span className="text">{task.text}</span>
          <DoneTask updateTasks={updateTasks} task={task} />
          <DeleteTask updateTasks={updateTasks} tasks={tasks} task={task} />
          <MoveButtons index={index} tasks={tasks} updateTasks={updateTasks} />
        </>
      )}
    </li>
  );
}
