export default function MoveButtons({ index, moveTaskDown, moveTaskUp }) {
  return (
    <div>
      <button className="move-button" onClick={() => moveTaskUp(index)}>
        ☝
      </button>
      <button className="move-button" onClick={() => moveTaskDown(index)}>
        👇
      </button>
    </div>
  );
}
