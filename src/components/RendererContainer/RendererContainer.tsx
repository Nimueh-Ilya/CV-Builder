import { headerInfo } from "../../data/headerInfo";
import { CVSection } from "../CVSection";
export function RendererContainer() {
  return (
    <div className="p-3 flex-1">
      <h1 className="font-bold ">
        {headerInfo.firstName} {headerInfo.lastName}
      </h1>
      <p className="">
        {headerInfo.country}, {headerInfo.state} | {headerInfo.phoneNumber} |
        {headerInfo.email}
      </p>
      <CVSection title="Summary"></CVSection>
    </div>
  );
}
