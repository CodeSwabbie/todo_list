export default function TodoElement({ task, index, deleteTask }) {
  return (
    <li key={index}>
      <span className="text">{task}</span>
      <button className="delete-button" onClick={() => deleteTask(index)}>
        ❌
      </button>
    </li>
  );
}
