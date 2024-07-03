import { useEffect, useState } from "react";

interface InputElementProps {
  label: string;
  childToParent: (data: { [key: string]: string }) => void;
  refresh: boolean;
}

export function InputElement({
  label,
  childToParent,
  refresh,
}: InputElementProps) {
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState({});

  const validSwitch = () => {
    setValid(!valid);
  };
  const transferToParent = () => {
    console.log("works");
    console.log(refresh);

    validSwitch();
    if (childToParent) {
      childToParent(value);
    }
  };
  useEffect(() => {
    childToParent(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);
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
