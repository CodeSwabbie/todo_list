export default function DeleteTask({ updateTasks, task, tasks }) {
  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => id !== task.id);
    updateTasks(updatedTasks);
  }

  return (
    <button className="delete-button" onClick={() => deleteTask(task.id)}>
      ❌
    </button>
  );
}
