Todo List app functionality

1. **Initializing the `tasks` state**  
   The `tasks` state stores a list of tasks based on data saved in the browser's Local Storage.  
   During the first rendering of the `TodoList` component, the function `localStorage.getItem("tasks")` attempts to read data from Local Storage using the key "tasks".  
   If the data exists, it is parsed from JSON format into an array of objects (`Task[]`). Otherwise, the `tasks` state is initialized as an empty array.

2. **Initializing the `newTask` state**  
   The `newTask` state is responsible for storing and updating the value of the text written by the user in the input box for adding new tasks.  
   `useState<string>("")` initializes `newTask` as an empty string (`""`). The `setNewTask` function allows updating the value of `newTask`.

3. **Saving tasks to Local Storage**  
   Every time the `tasks` state changes, the app saves the updated list to Local Storage.  
   The `useEffect` hook listens for changes in the `tasks` state. When `tasks` changes, `localStorage.setItem("tasks", JSON.stringify(tasks))` saves the data in Local Storage in JSON format.

4. **Adding a new task**  
   The `addTask` function checks if the task text (`newTask`) is not empty. The `findMaxId` function searches for the highest ID in the existing list of tasks.  
   A new task object (`newTaskObject`) is created with a unique ID, task text, creation date, and boolean values (`false`) for `isDone` (task completion status) and `isEdit` (editing mode).  
   The new task is added to the `tasks` list using the `updateTasks` function. The input box is cleared (`setNewTask("")`).  
   The user can add a task by clicking the green "Add" button or pressing the "Enter" key.

5. **Displaying the task list**  
   The app displays the list of tasks in an ordered list (`<ol>`).  
   The `tasks` list is iterated using the `.map()` method. Each task is rendered as a `TodoElement` component, which displays task details (e.g., text, completion status) and enables interactions (editing, deleting).

6. **Sorting tasks**  
   The `SortBy` component provides a dropdown menu (`<select>`) that allows the user to choose a sorting criterion.  
   When the user selects an option, the `tasks` list is sorted using the `_.orderBy` function from the `lodash` library.

- **In the `SortBy` component**:

  1.  `prevTaskRef` stores the previous value of `tasks` to compare the current state with the previous one.
  2.  A `useEffect` hook checks for changes in the `tasks` state. If changes are detected, the `<select>` value resets to the default option ("Sort by").
  3.  The `sortTodos` function creates a copy of the `tasks` list (`tasks.slice()`) to avoid modifying the original list. It sorts the tasks based on the selected criterion and updates the `tasks` state using `updateTasks`.
  4.  The component renders a `<select>` element with sorting options. The `defaultValue={"sortBy"}` sets the default value to "Sort by". The `onChange` handler calls the `sortTodos` function with the selected value (`e.target.value`).

  **In `TodoElement` component**:

1. Components like `DoneTask`, `DeleteTask`, `MoveButtons`, `EditTask`, and `IsEdit` are imported, each with unique functionality:
   - If the task is not done (`!task.isDone`), the `EditTask` component is rendered, enabling task editing.
   - If the task is in edit mode (`task.isEdit`), the `IsEdit` component is rendered, allowing the user to save changes.
   - If the task is not in edit mode, additional components are rendered:
   - `DoneTask` marks the task as done.
   - `DeleteTask` deletes the task.
   - `MoveButtons` moves the task up or down the list.
   2. Each task is rendered as a list item (`<li>`).

**In `EditTask` component**:
The `EditTask` component handles the edit mode for a single task. The `edit` function is called when the edit button is pressed:

1.  The `tasks` list is iterated using the `.map()` method.
2.  For the task whose `id` matches the edited task's `id`, the `isEdit` attribute is toggled (`!t.isEdit`). Other tasks remain unchanged.
3.  A new updated list of tasks (`updatedTasks`) is created.
4.  The `updateTasks` function updates the `tasks` state.

**In `IsEdit` component**:
The `IsEdit` component handles the task's edit mode. When a task is in edit mode, only the "Done" and pencil buttons are available, allowing the user to save changes or exit edit mode.  
 The `acceptEdit` function saves changes:

1.  The `tasks` list is iterated using the `.map()` method to find the task with the matching `id`.
2.  If the task text is not empty, the new value is assigned, and `task.isEdit` is set to `false`.

**In `DoneTask` component**:
This component marks a task as done or undone. When the tick mark button is clicked, the `doTask` function is called:

1.  The `tasks` list is iterated using `.map()` to find the task with the matching `id`.
2.  The `t.isDone` value is toggled.
3.  The list is updated.

**In `DeleteTask` component**:
This component deletes a task from the list. When the red cross button is clicked, the `deleteTask` function is called:

1.  The `tasks.filter(...)` method creates a new array (`updatedTasks`) excluding the task with the matching `id`.
2.  The `updateTasks` function updates the `tasks` state.

**In `MoveButton` component**:
This component moves a task up or down the list.  
 - The `moveTaskUp` function:  
 1. Checks if the task is not at the top of the list (`index > 0`).  
 2. Creates a copy of the `tasks` array using the spread operator (`...`).  
 3. Swaps the task at the `index` position with the task at `index - 1`.  
 4. Calls `updateTasks` with the updated array.  
 - The `moveTaskDown` function works similarly but checks if the task is not at the bottom of the list (`index < tasks.length - 1`).
