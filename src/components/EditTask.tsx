import { TodoElementProps } from "../interfaces";

type EditTaskProps = Omit<TodoElementProps, "index">;

export default function EditTask({ tasks, task, updateTasks }: EditTaskProps) {
  function edit(): void {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, isEdit: !t.isEdit };
      }
      return t;
    });
    updateTasks(updatedTasks);
  }

  return (
    <div>
      <button className="edit-button" onClick={edit}>
        ✏️
      </button>
    </div>
  );
}
