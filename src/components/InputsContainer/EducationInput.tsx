import { useState } from "react";
import { InputElement } from "./InputElement";

interface EducationInputProps {
  changeLocalData: (data: object) => void;
}

export function EducationInput({ changeLocalData }: EducationInputProps) {
  const [educationData, setEducationData] = useState({});
  const [reset, setReset] = useState(false);
  const pushData = (data: object) => {
    const nextData = { ...educationData, ...data };
    setEducationData(nextData);
  };
  const switchReset = () => {
    setReset((prevReset) => !prevReset);
  };

  return (
    <>
      <InputElement
        label="School"
        childToParent={pushData}
        reset={reset}
      ></InputElement>
      <InputElement
        label="Degree"
        childToParent={pushData}
        reset={reset}
      ></InputElement>
      <div>
        <button
          onClick={() => {
            changeLocalData(educationData);
            switchReset();
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
