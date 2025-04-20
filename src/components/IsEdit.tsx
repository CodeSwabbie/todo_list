import handleKeyPress from "../functions/handleKeyPress";
import acceptEdit from "../functions/acceptEdit";
import { TodoElementProps } from "../interfaces";

type IsEditProps = Omit<TodoElementProps, "index">;

export default function IsEdit({ task, updateTasks, tasks }: IsEditProps) {
  return (
    <div>
      <input
        className="edit-input"
        placeholder={task.text}
        id={`input-edit-${task.id}`}
        onKeyDown={(event) =>
          handleKeyPress(event as unknown as KeyboardEvent, () =>
            updateTasks(acceptEdit(tasks, task.id, `input-edit-${task.id}`))
          )
        }
      ></input>
      <button
        className="edit-done"
        onClick={() =>
          updateTasks(acceptEdit(tasks, task.id, `input-edit-${task.id}`))
        }
      >
        Done
      </button>
    </div>
  );
}
