import { useState } from "react";

interface InputElementProps {
  label: string;
  childToParent?: (data: { [key: string]: string }) => void;
}

export function InputElement({ label, childToParent }: InputElementProps) {
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState({});
  const validSwitch = () => {
    setValid(!valid);
  };
  const transferToParent = () => {
    validSwitch();
    if (childToParent) {
      childToParent(value);
    }
  };
  const inputChange = (inputVal: string) => {
    const nextVal = { [label.split(" ").join("")]: inputVal };
    setValue(nextVal);
  };
  return (
    <div className="grow flex align-middle gap-1 ">
      <label className="self-center w-1/5" htmlFor={label.split(" ").join("")}>
        {label}:
      </label>
      <input
        onChange={(e) => inputChange(e.target.value)}
        className="grow"
        id={label.split(" ").join("")}
        type="text"
      />
      <button onClick={transferToParent}>
        {valid ? <div>✔️</div> : <div>✖️</div>}
      </button>
    </div>
  );
}
