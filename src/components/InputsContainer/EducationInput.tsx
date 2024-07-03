import { useState } from "react";
import { InputElement } from "./InputElement";
interface EducationInputProps {
  changeLocalData: (data: unknown) => void;
  refresh: boolean;
}
export function EducationInput({
  changeLocalData,
  refresh,
}: EducationInputProps) {
  const [educationData, setEducationData] = useState({});
  const pushData = (data: object) => {
    const nextData = { ...educationData, ...data };
    setEducationData(nextData);
  };
  return (
    <>
      <InputElement
        refresh={refresh}
        label="School"
        childToParent={pushData}
      ></InputElement>
      <InputElement
        refresh={refresh}
        label="Degree"
        childToParent={pushData}
      ></InputElement>
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
