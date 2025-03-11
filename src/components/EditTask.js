export default function EditTask({ tasks, task, updateTasks }) {
  function edit() {
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
      <button className="edit-button" onClick={() => edit(task.id)}>
        ✏️
      </button>
    </div>
  );
}
