import { InputSection } from "./InputSection";
import { SummaryInput } from "./SummaryInput";
import { EducationInput } from "./EducationInput";
import { ExperienceInput } from "./ExperienceInput";

export function InputsContainer() {
  return (
    <>
      <div className="flex-1">
        <InputSection title="Summary">
          <SummaryInput></SummaryInput>
        </InputSection>
        <InputSection>
          <EducationInput></EducationInput>
        </InputSection>
        <InputSection></InputSection>
        <InputSection>
          <ExperienceInput></ExperienceInput>
        </InputSection>
      </div>
    </>
  );
}
