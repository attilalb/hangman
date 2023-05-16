export default function WinnerPopup() {
  return (
    <div className="modal-content">
      <div
        className="box is-flex is-flex-direction-column mt-6"
        id="winner-popup"
      >
        <h2 className="title has-text-primary has-text-centered">
          Congratulations! You won!
        </h2>

        <button className="button is-primary">Press Enter to Play Again</button>
      </div>
    </div>
  );
}
