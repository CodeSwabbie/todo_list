import { Task } from "../interfaces";

export default function findMaxId(tasks: Task[]) {
  const maxId = Math.max(...tasks.map((task) => task.id));
  return maxId;
}
