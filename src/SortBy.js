import { useEffect, useRef } from "react";
import _ from "lodash";

export default function SortBy({ tasks, updateTasks }) {
  const prevTasksRef = useRef();
  useEffect(() => {
    const prevTasks = prevTasksRef.current;
    if (prevTasks && !_.isEqual(prevTasks, tasks)) {
      const selectElement = document.querySelector(
        'select[name="selectedSort"]'
      );
      if (selectElement) {
        selectElement.value = "sortBy";
      }
    }
    prevTasksRef.current = tasks;
  }, [tasks]);

  function sortTodos(value) {
    let unsortedList = tasks.slice();
    if (value === "undoneDone") {
      unsortedList = _.orderBy(unsortedList, ["isDone"], ["asc"]);
    } else if (value === "doneUndone") {
      unsortedList = _.orderBy(unsortedList, ["isDone"], ["desc"]);
    } else if (value === "alphabeticalAsc") {
      unsortedList = _.orderBy(unsortedList, ["text"], ["asc"]);
    } else if (value === "alphabeticalDesc") {
      unsortedList = _.orderBy(unsortedList, ["text"], ["desc"]);
    } else if (value === "creationTimeAsc") {
      unsortedList = _.orderBy(unsortedList, ["date"], ["asc"]);
    } else if (value === "creationTimeDesc") {
      unsortedList = _.orderBy(unsortedList, ["date"], ["desc"]);
    }
    prevTasksRef.current = unsortedList;
    updateTasks(unsortedList);
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
