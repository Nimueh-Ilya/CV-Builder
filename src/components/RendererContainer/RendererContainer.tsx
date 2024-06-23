import { headerInfo } from "../../data/headerInfo";
import { CVSection } from "../CVSection";
import { Education } from "./Education";
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
    </div>
  );
}
