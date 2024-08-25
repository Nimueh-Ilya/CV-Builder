import { useState } from "react";
import SelectionContainer from "./SelectionContainer";
export function SelectionsContainer() {
  const [selectionList, setSelectionList] = useState("Summary");
  const [cvParts, setCvParts] = useState<unknown>([]);
  const changeSelectionList = (value: string) => {
    setSelectionList(value);
  };
  const getState = (arg0: unknown[]) => {
    setCvParts(arg0);
    console.log(arg0);
  };

  return (
    <div className="grow">
      <div>
        <label htmlFor="containers"></label>
        <select
          name="containers"
          id="containers"
          value={selectionList}
          onChange={(e) => {
            changeSelectionList(e.target.value);
          }}
        >
          <option value="Summary">Summary</option>
          <option value="Education">Eduction</option>
          <option value="Experience">Experience</option>
          <option value="Skills">Skills</option>
        </select>
      </div>
      <div>
        <SelectionContainer
          itemKey={selectionList}
          sendStateToParent={getState}
        ></SelectionContainer>
        <button
          onClick={() => {
            console.log("here");
            console.log(cvParts);

            localStorage.setItem("mycv", JSON.stringify(cvParts));
          }}
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
}
