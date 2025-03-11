import DoneTask from "./DoneTask";
import DeleteTask from "./DeleteTask";
import MoveButtons from "./MoveButtons";
import EditTask from "./EditTask";
import IsEdit from "./IsEdit";

export default function TodoElement({ task, updateTasks, tasks, index }) {
  return (
    <li className={task.isDone ? "done" : ""}>
      {!task.isDone && (
        <EditTask tasks={tasks} task={task} updateTasks={updateTasks} />
      )}
      {task.isEdit ? (
        <>
          <IsEdit tasks={tasks} task={task} updateTasks={updateTasks} />
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
