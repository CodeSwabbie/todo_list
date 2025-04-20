export default function handleKeyPress(
  event: KeyboardEvent,
  job: () => void
): void {
  if (event.key === "Enter") {
    job();
  }
}
