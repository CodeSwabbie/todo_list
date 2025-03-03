export default function EditTask({ tasks, task, updateTasks }) {
  function edit(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isEdit: !task.isEdit };
      }
      return task;
    });
    updateTasks(updatedTasks);
  }

  return (
    <div>
      <button className="edit-button" onClick={() => edit(task.id)}>
        ✏️
      </button>
    </div>
  );
}
