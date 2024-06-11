import { ChangeEvent } from "react";
interface InputDetailsProps {
  label: string;
  inputValue: string;
  onChange: (key: string, value: string) => void;
}

export default function InputDetails({
  label,
  inputValue,
  onChange,
}: InputDetailsProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(label, e.target.value);
  }
  return (
    <>
      <div>
        <label>
          {label}
          <input
            className="text-white ml-3"
            value={inputValue}
            onChange={handleChange}
          ></input>
        </label>
      </div>
    </>
  );
}
