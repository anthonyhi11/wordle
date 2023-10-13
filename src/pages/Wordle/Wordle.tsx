import { useMemo, useState } from "react";
import WorldeGrid from "../../components/WordleGrid";
import TextForm from "../../components/TextForm";
import "./wordle.css";

function Wordle() {
  const [guesses, setGuesses] = useState<string[]>(["", "", "", "", ""]);
  const [winner, setWinner] = useState<boolean>(false);
  const answer = "HELLO";

  const guessCount = useMemo(() => {
    return winner ? 5 : guesses.filter((g) => g.length > 1).length;
  }, [guesses, winner]);

  const checkAnswer = (guess: string) => {
    if (guess.toUpperCase() === answer) {
      setWinner(true);
    }

    const nextGuesses = [...guesses];
    nextGuesses[guessCount] = guess;
    setGuesses(nextGuesses);
  };

  return (
    <>
      <header className="header">
        <h1>Wordle</h1>
      </header>
      <div className="game-container">
        <WorldeGrid
          guesses={guesses}
          answer={answer}
          checkAnswer={checkAnswer}
        />
        {guessCount < 5 ? (
          <TextForm checkAnswer={checkAnswer} />
        ) : winner ? (
          <div>you win!</div>
        ) : (
          <div>loser</div>
        )}
      </div>
    </>
  );
}

export default Wordle;
