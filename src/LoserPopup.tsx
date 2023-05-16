export default function LoserPopup() {
  return (
    <div className="modal-content">
      <div
        className="box is-flex is-flex-direction-column mt-6"
        id="loser-popup"
      >
        <h2 className="title has-text-danger has-text-centered">
          You've been hung!
        </h2>
        <button className="button is-danger is-outlined">
          Press Enter to Play Again
        </button>
      </div>
    </div>
  );
}
