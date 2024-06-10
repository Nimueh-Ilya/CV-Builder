import { useState } from "react";
import InputDetails from "./InputDetails";

export default function MainContainer() {
  const [cvInfo, setcvInfo] = useState({});
  function handleCvInfo(key: string, value: string) {
    const newCvInfo = { ...cvInfo, [key]: value };
    setcvInfo(newCvInfo);
  }
  return (
    <>
      <InputDetails
        label="FirstName"
        inputValue={""}
        onChange={handleCvInfo}
      ></InputDetails>
    </>
  );
}
