export default function DoneTask({ updateTasks, task }) {
  function doTask(id) {
    updateTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
      return updatedTasks;
    });
  }
  return (
    <button className="done-button" onClick={() => doTask(task.id)}>
      ✔️
    </button>
  );
}
