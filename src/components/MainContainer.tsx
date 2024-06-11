import { useState } from "react";
import InputDetails from "./InputDetails";
import CVSection from "./Section";
import Headers from "./Header";
interface cvInfo {
  [key: string]: string;
}

export default function MainContainer() {
  const [cvInfo, setcvInfo] = useState<cvInfo>({});
  const handleCvInfo = (key: string, value: string) => {
    const newCvInfo = { ...cvInfo, [key]: value };
    setcvInfo(newCvInfo);
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
        </div>
        <div>
          <CVSection sectionTitle={""}>
            <Headers
              firstName={""}
              lastName={""}
              country={""}
              state={""}
              phoneNumber={""}
              email={""}
            />
          </CVSection>
        </div>
      </div>
    </>
  );
}
