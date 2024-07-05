// TODO: Put all entries in localStorage
import { InputSection } from "./InputSection";
import { TitleInput } from "./TitleInput";
import { SummaryInput } from "./SummaryInput";
import { EducationInput } from "./EducationInput";
import { ExperienceInput } from "./ExperienceInput";
import { SkillsInput } from "./SkillsInput";
import { useState } from "react";

export function InputsContainer() {
  const [localData, setLocalData] = useState<object[]>([]);
  // function setLocalStorage(data: object) {}
  const changeLocalData = (newData: object) => {
    const data: object[] = [...localData, newData];
    setLocalData(data);
    console.log(localData);
  };

  return (
    <>
      <div className="flex-1 p-2">
        <div className="flex justify-center items-center">
          <h1 className="text-2 xl text-center">
            Add entries to your collection
          </h1>
        </div>
        <InputSection title="Title">
          <TitleInput changeLocalData={changeLocalData}></TitleInput>
        </InputSection>

        <InputSection title="Summary">
          <SummaryInput changeLocalData={changeLocalData}></SummaryInput>
        </InputSection>
        <InputSection title="Education">
          <EducationInput changeLocalData={changeLocalData}></EducationInput>
        </InputSection>
        <InputSection title="Experience">
          <ExperienceInput changeLocalData={changeLocalData}></ExperienceInput>
        </InputSection>
        <InputSection title="Skills">
          <SkillsInput changeLocalData={changeLocalData}></SkillsInput>
        </InputSection>
        <div className="flex justify-center align-middle">
          <button
            onClick={() => {
              console.log("sent");
            }}
            className="grow"
          >
            Send Entries to Storage
          </button>
        </div>
      </div>
    </>
  );
}
