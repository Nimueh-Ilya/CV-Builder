import { useState } from "react";
import InputDetails from "./InputDetails";
// import CVSection from "./Section";
import { CVHeader } from "./Header";
import { CVContainer } from "./CVContainer";
import { headerInfo } from "../data/headerInfo";
interface cvInfo {
  [key: string]: string;
}

export default function MainContainer() {
  const [cvInfo, setcvInfo] = useState<cvInfo>({});
  const [renderCV, setrenderCV] = useState(false);
  const handleCvInfo = (key: string, value: string) => {
    const newCvInfo = { ...cvInfo, [key]: value };
    setcvInfo(newCvInfo);
  };
  const handleRenderCV = () => {
    renderCV ? setrenderCV(false) : setrenderCV(true);
  };

  return (
    <>
      <div className="flex gap-4 justify-between">
        <div className="flex flex-col gap-2">
          <InputDetails
            label="FirstName"
            inputValue={cvInfo["FirstName"] || ""}
            onChange={handleCvInfo}
          ></InputDetails>
          <InputDetails
            label="LastName"
            inputValue={cvInfo["LastName"] || ""}
            onChange={handleCvInfo}
          ></InputDetails>
          <InputDetails
            inputValue={cvInfo["Summary"] || ""}
            label="Summary"
            onChange={handleCvInfo}
          ></InputDetails>
          <InputDetails
            inputValue={cvInfo["Education"] || ""}
            label="Education"
            onChange={handleCvInfo}
          ></InputDetails>
          <InputDetails
            inputValue={cvInfo["Experience"] || ""}
            label="Experience"
            onChange={handleCvInfo}
          ></InputDetails>
          <InputDetails
            inputValue={cvInfo["Projects"] || ""}
            label="Projects"
            onChange={handleCvInfo}
          ></InputDetails>
          <InputDetails
            inputValue={cvInfo["Skills"] || ""}
            label="Skills"
            onChange={handleCvInfo}
          ></InputDetails>
          <button onClick={handleRenderCV}>Load Resume</button>
        </div>
        <CVContainer renderCV={renderCV}>
          <CVHeader {...{ headerInfo }} />
        </CVContainer>

        <div></div>
      </div>
    </>
  );
}
