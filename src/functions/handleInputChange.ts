export default function handleInputChange(
  event: Event,
  setNewTask: (value: string) => void
): void {
  setNewTask((event.target as HTMLInputElement).value);
}
