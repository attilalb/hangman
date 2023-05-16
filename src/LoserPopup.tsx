export default function LoserPopup() {
  return (
    <div className="box is-flex is-flex-direction-column" id="loser-popup">
      <h2 className="title has-text-danger has-text-centered">
        You've been hung!
      </h2>
      <div className="section"></div>

      <button className="button is-danger">Press Enter to Play Again</button>
    </div>
  );
}
