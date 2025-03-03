export default function acceptEdit(tasks, id, inputId) {
  return tasks.map((task) => {
    if (task.id === id) {
      const inputElemenet = document.getElementById(inputId);
      if (inputElemenet.value !== "") {
        task.text = inputElemenet.value;
        task.isEdit = false;
      }
    }
    return task;
  });
}
