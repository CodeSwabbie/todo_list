export default function handleInputChange(
  event: React.ChangeEvent<HTMLInputElement>,
  setNewTask: React.Dispatch<React.SetStateAction<string>>
): void {
  setNewTask(event.target.value);
}
