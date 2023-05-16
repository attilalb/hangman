export default function WinnerPopup() {
  return (
    <div
      className="box is-flex is-flex-direction-column"
      style={{ zIndex: '100 ' }}
    >
      <h2 className="title has-text-primary has-text-centered">
        Congratulations! You won!
      </h2>
      <div className="section"></div>
      <button className="button is-primary">Press Enter to Play Again</button>
    </div>
  );
}
