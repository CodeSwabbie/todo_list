import DoneTask from "./DoneTask";
import DeleteTask from "./DeleteTask";
import MoveButtons from "./MoveButtons";
import EditTask from "./EditTask";
import IsEdit from "./IsEdit";
import { TodoElementProps } from "../interfaces";

export default function TodoElement({
  task,
  updateTasks,
  tasks,
  index,
  setNewTask,
}: TodoElementProps) {
  return (
    <li className={task.isDone ? "done" : ""}>
      {!task.isDone && (
        <EditTask
          tasks={tasks}
          task={task}
          updateTasks={updateTasks}
          setNewTask={setNewTask}
        />
      )}
      {task.isEdit ? (
        <>
          <IsEdit
            tasks={tasks}
            task={task}
            updateTasks={updateTasks}
            setNewTask={setNewTask}
          />
        </>
      ) : (
        <>
          <span className="text">{task.text}</span>
          <DoneTask
            updateTasks={updateTasks}
            task={task}
            setNewTask={setNewTask}
          />
          <DeleteTask
            updateTasks={updateTasks}
            tasks={tasks}
            task={task}
            setNewTask={setNewTask}
          />
          <MoveButtons
            index={index}
            tasks={tasks}
            updateTasks={updateTasks}
            setNewTask={setNewTask}
          />
        </>
      )}
    </li>
  );
}
