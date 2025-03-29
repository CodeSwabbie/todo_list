import { Task } from "../interfaces";

export default function acceptEdit(tasks: Task[], id: number, inputId: string) {
  return tasks.map((task) => {
    if (task.id === id) {
      const inputElemenet = document.getElementById(
        inputId
      ) as HTMLInputElement;
      if (inputElemenet.value !== "") {
        task.text = inputElemenet.value;
        task.isEdit = false;
      }
    }
    return task;
  });
}
