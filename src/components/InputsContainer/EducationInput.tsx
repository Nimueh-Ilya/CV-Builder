import { useState } from "react";
import { InputElement } from "./InputElement";
interface EducationInputProps {
  changeLocalData: (data: unknown) => void;
}
export function EducationInput({ changeLocalData }: EducationInputProps) {
  const [educationData, setEducationData] = useState({});
  const pushData = (data: object) => {
    const nextData = { ...educationData, ...data };
    setEducationData(nextData);
  };
  return (
    <>
      <InputElement label="School" childToParent={pushData}></InputElement>
      <InputElement label="Degree" childToParent={pushData}></InputElement>
      <div>
        <button
          onClick={() => {
            changeLocalData(educationData);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
