import { useState } from "react";
import { InputElement } from "./InputElement";
export function SummaryInput() {
  const [summaryData, setSummaryData] = useState({});
  const pushData = (data: object) => {
    const nextData = { ...summaryData, ...data };
    setSummaryData(nextData);
  };
  return (
    <div>
      <InputElement label="Summary" childToParent={pushData} />
    </div>
  );
}
