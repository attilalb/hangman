const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export default function Keyboard() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr)',
        gap: '.5rem',
      }}
      className="mt-5 mx-3"
    >
      {KEYS.map((key) => {
        return (
          <button
            key={key}
            className="button is-info is-uppercase has-text-bold"
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
