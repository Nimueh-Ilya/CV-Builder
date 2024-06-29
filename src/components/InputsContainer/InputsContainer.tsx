import { InputSection } from "./InputSection";
import { SummaryInput } from "./SummaryInput";
import { EducationInput } from "./EducationInput";
import { ExperienceInput } from "./ExperienceInput";
import { SkillsInput } from "./SkillsInput";

export function InputsContainer() {
  return (
    <>
      <div className="flex-1">
        <h1 className="text-2 xl">Add entries to your collection</h1>
        <InputSection title="Summary">
          <SummaryInput></SummaryInput>
        </InputSection>
        <InputSection title="Education">
          <EducationInput></EducationInput>
        </InputSection>
        <InputSection title="Experience">
          <ExperienceInput></ExperienceInput>
        </InputSection>
        <InputSection title="Skills">
          <SkillsInput></SkillsInput>
        </InputSection>
      </div>
    </>
  );
}
