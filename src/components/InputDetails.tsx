import { useState } from "react";

export default function InputDetails() {
  const [inputValue, setInputValue] = useState("");
  function changeToInput(e) {
    setInputValue(e.target.value);
  }
  return (
    <>
      <input></input>
    </>
  );
}
