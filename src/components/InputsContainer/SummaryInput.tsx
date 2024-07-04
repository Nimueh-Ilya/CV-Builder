import { useState } from "react";
import { InputElement } from "./InputElement";
interface SummaryInputProps {
  changeLocalData: (data: unknown) => void;
}
export function SummaryInput({ changeLocalData }: SummaryInputProps) {
  const [summaryData, setSummaryData] = useState({});
  const pushData = (data: object) => {
    const nextData = { ...summaryData, ...data };
    setSummaryData(nextData);
  };
  return (
    <div>
      <InputElement label="Summary" childToParent={pushData} />
      <div>
        <div>
          <button
            onClick={() => {
              changeLocalData(summaryData);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
