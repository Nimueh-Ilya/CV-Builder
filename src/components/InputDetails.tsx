import { ChangeEvent } from "react";

interface InputDetailsProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}
export default function InputDetails({
  inputValue,
  setInputValue,
}: InputDetailsProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }
  return (
    <>
      <input value={inputValue} onChange={handleChange}></input>
    </>
  );
}
