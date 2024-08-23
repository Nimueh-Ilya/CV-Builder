import { useState } from "react";
import SelectionContainer from "./SelectionContainer";
export function SelectionsContainer() {
  // const [selectedCV, setSelectedCV] = useState({});
  const [selectionList, setSelectionList] = useState("Summary");
  const changeSelectionList = (value: string) => {
    setSelectionList(value);
  };
  // const cvListKeys = Object.keys(localStorage);
  // const cvList = cvListKeys.map((key) => {
  //   return localStorage.getItem(key);
  // });
  // // const item1 = JSON.parse(localStorage.getItem("asd")!);
  // // if (item1) {
  // //   const title1 = item1.find((item: object) => {
  // //     return Object.prototype.hasOwnProperty.call(item, "Summary");
  // //     title1;
  // //     cvList;
  // //   });
  // // }

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
        <SelectionContainer itemKey={selectionList}></SelectionContainer>
      </div>
    </div>
  );
}
