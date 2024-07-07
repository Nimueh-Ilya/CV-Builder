import { useState } from "react";
import { InputElement } from "./InputElement";
interface TitleInputProps {
  changeLocalData: (data: object) => void;
}
export function TitleInput({ changeLocalData }: TitleInputProps) {
  const [titleData, setTitleData] = useState({});
  const [reset, setReset] = useState(false);

  const switchReset = () => {
    setReset((prevReset) => !prevReset);
  };
  const pushData = (data: object) => {
    const nextData = { ...titleData, ...data };
    setTitleData(nextData);
  };
  return (
    <>
      <InputElement
        reset={reset}
        label="Title"
        childToParent={pushData}
      ></InputElement>
      <div>
        <button
          onClick={() => {
            changeLocalData(titleData);
            switchReset();
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
