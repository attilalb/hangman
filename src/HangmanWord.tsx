type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      className="is-flex is-size-1 has-text-weight-bold is-uppercase is-monospace"
      style={{ gap: '1rem' }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span
          style={{ borderBottom: '.1em solid black', minWidth: '2rem' }}
          key={index}
          className="has-text-centered"
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
            }}
            className={
              !guessedLetters.includes(letter) && reveal
                ? 'has-text-danger'
                : 'has-text-primary'
            }
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
