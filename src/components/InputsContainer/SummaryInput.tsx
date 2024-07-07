import { useState } from "react";
import { InputElement } from "./InputElement";
interface SummaryInputProps {
  changeLocalData: (data: object) => void;
}
export function SummaryInput({ changeLocalData }: SummaryInputProps) {
  const [summaryData, setSummaryData] = useState({});
  const [reset, setReset] = useState(false);

  const switchReset = () => {
    setReset((prevReset) => !prevReset);
  };
  const pushData = (data: object) => {
    const nextData = { ...summaryData, ...data };
    setSummaryData(nextData);
  };
  return (
    <div>
      <InputElement reset={reset} label="Summary" childToParent={pushData} />
      <div>
        <div>
          <button
            onClick={() => {
              changeLocalData(summaryData);
              switchReset();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
