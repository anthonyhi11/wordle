import WordleRow from "./WordleRow";

interface WorldeGridProps {
  answer: string;
  guesses: string[];
  checkAnswer: (guess: string) => void;
}

function WorldeGrid(props: WorldeGridProps) {
  return (
    <div className="grid-parent">
      <WordleRow guess={props.guesses[0]} answer={props.answer} />
      <WordleRow guess={props.guesses[1]} answer={props.answer} />
      <WordleRow guess={props.guesses[2]} answer={props.answer} />
      <WordleRow guess={props.guesses[3]} answer={props.answer} />
      <WordleRow guess={props.guesses[4]} answer={props.answer} />
    </div>
  );
}

export default WorldeGrid;
