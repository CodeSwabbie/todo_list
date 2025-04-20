import { TodoElementProps } from "../interfaces";

type DoneTaskProps = Omit<TodoElementProps, "index" | "tasks">;

export default function DoneTask({ updateTasks, task }: DoneTaskProps) {
  function doTask() {
    updateTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((t) => {
        if (task.id === t.id) {
          return { ...t, isDone: !t.isDone };
        }
        return t;
      });
      return updatedTasks;
    });
  }
  return (
    <button className="done-button" onClick={doTask}>
      ✔️
    </button>
  );
}
