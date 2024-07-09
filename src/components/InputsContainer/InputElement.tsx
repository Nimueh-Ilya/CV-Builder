import { useState, useEffect } from "react";

interface InputElementProps {
  label: string;
  childToParent: (data: { [key: string]: string }) => void;
  reset: boolean;
}

export function InputElement({
  label,
  childToParent,
  reset,
}: InputElementProps) {
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValid(false);
    setValue("");
  }, [reset]);

  const validSwitch = () => {
    setValid(!valid);
  };

  const transferToParent = () => {
    validSwitch();
    if (childToParent && !valid) {
      childToParent({ [label.split(" ").join("")]: value });
    }
  };

  const inputChange = (inputVal: string) => {
    setValue(inputVal);
  };

  return (
    <div className="grow flex align-middle gap-1">
      <label className="self-center w-1/5" htmlFor={label.split(" ").join("")}>
        {label}:
      </label>
      <input
        onChange={(e) => inputChange(e.target.value)}
        className="grow"
        id={label.split(" ").join("")}
        type="text"
        value={value}
      />
      <button onClick={transferToParent}>
        {valid ? <div>✔️</div> : <div>✖️</div>}
      </button>
    </div>
  );
}
