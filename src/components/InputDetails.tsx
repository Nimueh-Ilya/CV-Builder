import { ChangeEvent } from "react";
interface InputDetailsProps {
  type: "input" | "textarea";
  label: string;
  inputValue: string;
  onChange: (key: string, value: string) => void;
}

export default function InputDetails({
  type,
  label,
  inputValue,
  onChange,
}: InputDetailsProps) {
  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    onChange(label, e.target.value);
  }
  function handleChangeTextarea(e: ChangeEvent<HTMLTextAreaElement>) {
    onChange(label, e.target.value);
  }
  if (type == "textarea") {
    return (
      <div className="flex flex-row gap-1 justify-between">
        <div>
          <label>{label}:</label>
        </div>
        <div>
          <textarea
            className="text-white ml-3"
            value={inputValue}
            onChange={handleChangeTextarea}
          ></textarea>
        </div>
      </div>
    );
  } else if (type == "input") {
    return (
      <div className="flex flex-row gap-1 justify-between">
        <div>
          <label>{label}:</label>
        </div>
        <div>
          <input
            className="text-white ml-3"
            value={inputValue}
            onChange={handleChangeInput}
          ></input>
        </div>
      </div>
    );
  }
}
