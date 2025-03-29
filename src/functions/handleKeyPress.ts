export default function handleKeyPress(
  event: React.KeyboardEvent<HTMLInputElement>,
  job: () => void
): void {
  if (event.key === "Enter") {
    job();
  }
}
