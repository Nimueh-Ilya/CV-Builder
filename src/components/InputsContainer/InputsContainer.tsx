// TODO: Put all entries in localStorage
import { InputSection } from "./InputSection";
import { SummaryInput } from "./SummaryInput";
import { EducationInput } from "./EducationInput";
import { ExperienceInput } from "./ExperienceInput";
import { SkillsInput } from "./SkillsInput";
import { useState } from "react";

export function InputsContainer() {
  const [localData, setLocalData] = useState({});
  const [refresh, setRefresh] = useState(false);

  const changeLocalData = (newData: unknown) => {
    const data = { ...localData, newData };
    setLocalData(data);
  };
  const switchRefresh = () => {
    setRefresh(!refresh);
  };
  return (
    <>
      <div className="flex-1">
        <div className="flex justify-center items-center">
          <h1 className="text-2 xl text-center">
            Add entries to your collection
          </h1>
          <button onClick={switchRefresh}>O</button>
        </div>

        <InputSection title="Summary">
          <SummaryInput
            changeLocalData={changeLocalData}
            refresh={refresh}
          ></SummaryInput>
        </InputSection>
        <InputSection title="Education">
          <EducationInput
            refresh={refresh}
            changeLocalData={changeLocalData}
          ></EducationInput>
        </InputSection>
        <InputSection title="Experience">
          <ExperienceInput
            refresh={refresh}
            changeLocalData={changeLocalData}
          ></ExperienceInput>
        </InputSection>
        <InputSection title="Skills">
          <SkillsInput
            refresh={refresh}
            changeLocalData={changeLocalData}
          ></SkillsInput>
        </InputSection>
      </div>
    </>
  );
}
