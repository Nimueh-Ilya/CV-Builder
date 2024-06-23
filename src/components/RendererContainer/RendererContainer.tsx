import { cvdata } from "../../data/cvdata";
import { CVSection } from "../CVSection";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

export function RendererContainer() {
  return (
    <div className="[&>*]:pb-3 p-3 flex-1">
      <h1 className="font-bold text-4xl">
        {cvdata.headerInfo.firstName} {cvdata.headerInfo.lastName}
      </h1>
      <p className="">
        {cvdata.headerInfo.country}, {cvdata.headerInfo.state} |{" "}
        {cvdata.headerInfo.phoneNumber} |{cvdata.headerInfo.email}
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
          bulletPoints={cvdata.experienceList}
        ></Experience>
      </CVSection>
      <CVSection title="Skills">
        <Skills skillList={cvdata.skillsList}></Skills>
      </CVSection>
    </div>
  );
}
