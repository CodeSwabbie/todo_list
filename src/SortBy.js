export default function SortBy({ tasks, updateTasks }) {
  function sortTodos(value) {
    const sortedList = tasks.slice();
    if (value === "undoneDone") {
      updateTasks(
        sortedList.sort((a, b) => Number(a.isDone) - Number(b.isDone))
      );
    } else if (value === "doneUndone") {
      updateTasks(
        sortedList.sort((a, b) => Number(b.isDone) - Number(a.isDone))
      );
    } else if (value === "alphabeticalAsc") {
      updateTasks(sortedList.sort((a, b) => a.text.localeCompare(b.text)));
    } else if (value === "alphabeticalDesc") {
      updateTasks(sortedList.sort((a, b) => b.text.localeCompare(a.text)));
    } else if (value === "creationTimeAsc") {
      updateTasks(
        sortedList.sort((a, b) => new Date(a.date) - new Date(b.date))
      );
    } else if (value === "creationTimeDesc") {
      updateTasks(
        sortedList.sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    }
  }
  return (
    <select
      className="select-button"
      defaultValue={"sortBy"}
      name="selectedSort"
      onChange={(e) => sortTodos(e.target.value)}
    >
      <option value="sortBy"> Sort by</option>
      <option value="alphabeticalDesc"> Task Name Z-A</option>
      <option value="alphabeticalAsc"> Task Name A-Z</option>
      <option value="undoneDone"> Undone - Done</option>
      <option value="doneUndone"> Done - Undone</option>
      <option value="creationTimeDesc"> Creation Time ↓</option>
      <option value="creationTimeAsc"> Creation Time ↑</option>
    </select>
  );
}
