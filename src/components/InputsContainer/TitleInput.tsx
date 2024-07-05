import { useState } from "react";
import { InputElement } from "./InputElement";
interface TitleInputProps {
  changeLocalData: (data: object) => void;
}
export function TitleInput({ changeLocalData }: TitleInputProps) {
  const [titleData, setTitleData] = useState({});
  const pushData = (data: object) => {
    const nextData = { ...titleData, ...data };
    setTitleData(nextData);
  };
  return (
    <>
      <InputElement label="Title" childToParent={pushData}></InputElement>
      <div>
        <button
          onClick={() => {
            changeLocalData(titleData);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
