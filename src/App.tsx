import * as React from 'react';
import { useState } from 'react';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';
import words from './wordList.json';

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const mistakes = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = mistakes.length >= 6;
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = React.useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key!=="Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord())
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);
  return (
    <div className="container is-flex is-flex-direction-column is-align-items-center">
      <div
        className={
          'modal is-size-3 has-text-centered ' + (isWinner || isLoser)
            ? 'is-active'
            : ''
        }>
        <div className="modal-content">
          <div className="box">
            {isWinner && (
              <div>
                <h2 className="title has-text-primary has-text-centered">
                  Congratulations! You won!
                </h2>
                <button className="button is-primary">Play again</button>
              </div>
            )}
            {isLoser && (
              <div>
                <h2 className="title has-text-danger has-text-centered">
                  You didn't guess the word this time!
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <HangmanDrawing guessCount={mistakes.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          disabled={isLoser || isWinner}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={mistakes}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
