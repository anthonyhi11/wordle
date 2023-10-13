import { FormEvent, useState } from "react";

export interface TextFormProps {
  checkAnswer: (guess: string) => void;
}
function TextForm(props: TextFormProps) {
  const [guess, setGuess] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    props.checkAnswer(guess);
    setGuess("");
  };

  return (
    <form className="text-form-container" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        maxLength={5}
        minLength={5}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        required
        value={guess}
      />
      <button>Guess</button>
    </form>
  );
}

export default TextForm;
