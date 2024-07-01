import { useState } from "react";
import { InputElement } from "./InputElement";
export function EducationInput() {
  const [educationData, setEducationData] = useState({});
  const pushData = (data: object) => {
    const nextData = { ...educationData, ...data };
    setEducationData(nextData);
  };
  return (
    <>
      <InputElement label="School" childToParent={pushData}></InputElement>
      <InputElement label="Degree" childToParent={pushData}></InputElement>
    </>
  );
}
