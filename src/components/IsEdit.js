import handleKeyPress from "./../functions/handleKeyPress";
import acceptEdit from "./../functions/acceptEdit";

export default function IsEdit({ task, updateTasks, tasks }) {
  return (
    <div>
      <input
        className="edit-input"
        placeholder={task.text}
        id={`input-edit-${task.id}`}
        onKeyDown={(event) =>
          handleKeyPress(event, () =>
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
