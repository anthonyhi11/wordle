export interface WordleRowProps {
  guess: string;
  answer: string;
}

function WordleRow(props: WordleRowProps) {
  const answerObj = props.answer
    .split("")
    .reduce((acc: { [key: string]: number }, key: string) => {
      if (acc[key]) {
        acc[key] += 1;
      } else {
        acc[key] = 1;
      }

      return acc;
    }, {} as { [key: string]: number });

  let guessArray = ["", "", "", "", ""];
  if (props.guess.length > 1) {
    guessArray = props.guess.split("");
  }

  const guessRow = guessArray.map((g, i) => {
    let borderColor = "normal";
    if (props.guess.length > 1) {
      if (
        props.answer[i] === g.toUpperCase() &&
        answerObj[g.toUpperCase()] > 0
      ) {
        borderColor = "green";
        answerObj[g.toUpperCase()] -= 1;
      } else if (
        props.answer.includes(g.toUpperCase()) &&
        answerObj[g.toUpperCase()] > 0
      ) {
        borderColor = "yellow";
      } else {
        borderColor = "red";
      }
    }
    return (
      <div className={`box ${borderColor}`} key={Math.random()}>
        {g}
      </div>
    );
  });
  return (
    <div className="row-parent" key={Math.random()}>
      {guessRow}
    </div>
  );
}

export default WordleRow;
