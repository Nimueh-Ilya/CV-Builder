// import { useState } from "react";

export function SelectionsContainer() {
  // const [selectedCV, setSelectedCV] = useState({});
  const cvListKeys = Object.keys(localStorage);
  const cvList = cvListKeys.map((key) => {
    return localStorage.getItem(key);
  });

  return (
    <>
      <div className="flex-1">
        <button
          onClick={() => {
            console.log(cvList);
          }}
        >
          get cvs
        </button>
      </div>
    </>
  );
}
