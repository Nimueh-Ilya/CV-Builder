import { useState } from "react";
import InputDetails from "./InputDetails";
interface cvInfo {
  [key: string]: string;
}

export default function MainContainer() {
  const [cvInfo, setcvInfo] = useState<cvInfo>({});
  const handleCvInfo = (key: string, value: string) => {
    const newCvInfo = { ...cvInfo, [key]: value };
    setcvInfo(newCvInfo);
    console.log(cvInfo);
  };
  return (
    <>
      <InputDetails
        label="FirstName"
        inputValue={cvInfo["FirstName"] || ""}
        onChange={handleCvInfo}
      ></InputDetails>
      <InputDetails
        label="LastName"
        inputValue={cvInfo["LastName"] || ""}
        onChange={handleCvInfo}
      ></InputDetails>
    </>
  );
}
