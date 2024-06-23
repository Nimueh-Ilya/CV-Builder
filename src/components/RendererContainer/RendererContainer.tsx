import { headerInfo } from "../../data/headerInfo";
import { CVSection } from "../CVSection";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { experienceList } from "../../data/experiencelist";
export function RendererContainer() {
  return (
    <div className="[&>*]:pb-3 p-3 flex-1">
      <h1 className="font-bold text-4xl">
        {headerInfo.firstName} {headerInfo.lastName}
      </h1>
      <p className="">
        {headerInfo.country}, {headerInfo.state} | {headerInfo.phoneNumber} |
        {headerInfo.email}
      </p>
      <CVSection title="Summary"></CVSection>
      <CVSection title="Education">
        <Education
          title="Algonquin College"
          date="2024 September-Current"
        ></Education>
      </CVSection>
      <CVSection title="Experience">
        <Experience
          title="Storma Technology, Project Manager"
          date="2017 April-2019 January"
          bulletPoints={experienceList}
        ></Experience>
      </CVSection>
    </div>
  );
}
