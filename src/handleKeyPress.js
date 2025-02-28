export default function handleKeyPress(event, addTask) {
  if (event.key === "Enter") {
    addTask();
  }
}
