import DoneTask from "./components/DoneTask";
import DeleteTask from "./components/DeleteTask";
import MoveButtons from "./components/MoveButtons";
import EditTask from "./components/EditTask";
import IsEdit from "./components/IsEdit";

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
