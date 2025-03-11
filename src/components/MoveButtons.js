export default function MoveButtons({ index, updateTasks, tasks }) {
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index - 1];
      updatedTasks[index - 1] = updatedTasks[index];
      updatedTasks[index] = temp;
      updateTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index + 1];
      updatedTasks[index + 1] = updatedTasks[index];
      updatedTasks[index] = temp;
      updateTasks(updatedTasks);
    }
  }
  return (
    <div>
      <button className="move-button" onClick={() => moveTaskUp(index)}>
        ☝
      </button>
      <button className="move-button" onClick={() => moveTaskDown(index)}>
        👇
      </button>
    </div>
  );
}
