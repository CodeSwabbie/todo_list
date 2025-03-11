export default function DeleteTask({ updateTasks, task, tasks }) {
  function deleteTask() {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    updateTasks(updatedTasks);
  }

  return (
    <button className="delete-button" onClick={() => deleteTask(task.id)}>
      ❌
    </button>
  );
}
