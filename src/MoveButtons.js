export default function MoveButtons({ task, moveTaskDown, moveTaskUp }) {
  return (
    <div>
      <button className="move-button" onClick={() => moveTaskUp(task.id)}>
        ☝
      </button>
      <button className="move-button" onClick={() => moveTaskDown(task.id)}>
        👇
      </button>
    </div>
  );
}
