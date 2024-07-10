// import { useState } from "react";

export function SelectionsContainer() {
  // const [selectedCV, setSelectedCV] = useState({});
  const cvListKeys = Object.keys(localStorage);
  const cvList = cvListKeys.map((key) => {
    return localStorage.getItem(key);
  });
  const item1 = JSON.parse(localStorage.getItem("asd")!);

  const title1 = item1.find((item: object) => {
    return Object.prototype.hasOwnProperty.call(item, "Summary");
  });
  title1;
  cvList;
  return (
    <>
      <div className="flex-1"></div>
      <div>
        <label htmlFor="containers"></label>
        <select name="containers" id="containers">
          <option value="Summary">Summary</option>
          <option value="Eduction">Eduction</option>
          <option value="Experience">Experience</option>
          <option value="Skills">Skills</option>
        </select>
      </div>
    </>
  );
}
