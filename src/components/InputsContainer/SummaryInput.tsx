import { useState } from "react";
import { InputElement } from "./InputElement";
interface SummaryInputProps {
  changeLocalData: (data: unknown) => void;
  refresh: boolean;
}
export function SummaryInput({ changeLocalData, refresh }: SummaryInputProps) {
  const [summaryData, setSummaryData] = useState({});
  const pushData = (data: object) => {
    const nextData = { ...summaryData, ...data };
    setSummaryData(nextData);
  };
  return (
    <div>
      <InputElement
        refresh={refresh}
        label="Summary"
        childToParent={pushData}
      />
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
