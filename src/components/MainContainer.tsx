import { useState } from "react";
import InputDetails from "./InputDetails";

export default function MainContainer() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputDetails
        inputValue={inputValue}
        setInputValue={setInputValue}
      ></InputDetails>
      <p>{inputValue}</p>
    </>
  );
}
