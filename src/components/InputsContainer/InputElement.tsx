//TODO: Move the Input value from the input component to the parent component
import { useState } from "react";

interface InputElementProps {
  label: string;
}

export function InputElement({ label, childToParent }: InputElementProps) {
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState("");
  const validSwitch = () => {
    setValid(!valid);
  };
  const inputChange = (inputVal: string) => {
    setValue(inputVal);
  };
  return (
    <div className="grow flex align-middle gap-1 ">
      <label className="self-center" htmlFor={label.split(" ").join("")}>
        {label}
      </label>
      <input
        onChange={(e) => inputChange(e.target.value)}
        className="grow"
        id={label.split(" ").join("")}
        type="text"
      />
      <button onClick={validSwitch}>
        {valid ? <div>✔️</div> : <div>✖️</div>}
      </button>
    </div>
  );
}
