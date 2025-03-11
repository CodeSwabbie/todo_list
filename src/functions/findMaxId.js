export default function findMaxId(tasks) {
  const maxId = Math.max(...tasks.map((task) => task.id));
  return maxId;
}
