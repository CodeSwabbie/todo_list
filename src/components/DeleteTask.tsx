import { TodoElementProps } from "../interfaces";

type DeleteTaskProps = Omit<TodoElementProps, "index">;

export default function DeleteTask({
  updateTasks,
  task,
  tasks,
}: DeleteTaskProps) {
  function deleteTask() {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    updateTasks(updatedTasks);
  }

  return (
    <button className="delete-button" onClick={() => deleteTask()}>
      ❌
    </button>
  );
}
