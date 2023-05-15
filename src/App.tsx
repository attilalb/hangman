import * as React from 'react';
import { useState } from 'react';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';
import words from './wordList.json';

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const mistakes = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  return (
    <div className="container is-flex is-flex-direction-column is-align-items-center">
      <div className="text is-size-3 has-text-centered">Lose Win</div>
      <HangmanDrawing guessCount={mistakes.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
