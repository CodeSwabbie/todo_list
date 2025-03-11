export default function handleKeyPress(event, job) {
  if (event.key === "Enter") {
    job();
  }
}
