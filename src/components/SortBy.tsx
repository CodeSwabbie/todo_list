import { useEffect, useRef } from "react";
import * as _ from "lodash";
import { TodoElementProps, Task } from "../interfaces";

type SortByProps = Omit<TodoElementProps, "index" | "task">;

export default function SortBy({ tasks, updateTasks }: SortByProps) {
  const prevTasksRef = useRef<Task[] | null>(null);
  useEffect(() => {
    const prevTasks = prevTasksRef.current;
    if (prevTasks && !_.isEqual(prevTasks, tasks)) {
      const selectElement = document.querySelector(
        'select[name="selectedSort"]'
      ) as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = "sortBy";
      }
    }
    prevTasksRef.current = tasks;
  }, [tasks]);

  const options = [
    {
      label: "Sort by",
      value: "sortBy",
    },
    {
      label: "Task Name Z-A",
      value: "alphabeticalDesc",
    },
    {
      label: "Task Name A-Z",
      value: "alphabeticalAsc",
    },
    {
      label: "Undone - Done",
      value: "undoneDone",
    },
    {
      label: "Done - Undone",
      value: "doneUndone",
    },
    {
      label: "Creation Time ↓",
      value: "creationTimeDesc",
    },
    {
      label: "Creation Time ↑",
      value: "creationTimeAsc",
    },
  ];

  function sortTodos(value: string) {
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
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
