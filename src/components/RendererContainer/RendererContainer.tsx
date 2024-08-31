import { cvdata } from "../../data/cvdata";
import { CVSection } from "./CVSection";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

export function RendererContainer() {
  let cvParts: { title: string; content: string }[] = [];
  if (localStorage.getItem("mycv") !== null) {
    cvParts = JSON.parse(localStorage.getItem("mycv")!);
    console.log(cvParts);
  }
  const getElementFromMycvArray = (
    arrOfObjects: { title: string; content: string }[],
    element: string
  ): string | undefined => {
    if (!arrOfObjects) {
      return;
    }
    const foundItem = arrOfObjects.find((item) => item.title === element);

    return foundItem ? foundItem.content : "nothing to see here";
  };
  function listOfExperiencePoints() {
    const list: string[] = [];
    cvParts.map((entry) => {
      for (const [, value] of Object.entries(entry)) {
        value === "Experience" ? list.push(entry.content) : false;
      }
    });
    return list as string[];
  }
  function listOfSkillsPoints() {
    const list: string[] = [];
    cvParts.map((entry) => {
      for (const [, value] of Object.entries(entry)) {
        value === "Skill" ? list.push(entry.content) : false;
      }
    });
    return list as string[];
  }
  if (cvParts !== null) {
    return (
      <div className="[&>*]:pb-3 p-3 flex-1">
        <button
          onClick={() => {
            console.log(JSON.parse(localStorage.getItem("mycv")!));
          }}
        >
          Refresh
        </button>
        <h1 className="font-bold text-4xl">
          {cvdata.headerInfo.firstName} {cvdata.headerInfo.lastName}
        </h1>
        <p className="">
          {cvdata.headerInfo.country}, {cvdata.headerInfo.state} |{" "}
          {cvdata.headerInfo.phoneNumber} |{cvdata.headerInfo.email}
        </p>
        <CVSection
          title="Summary"
          content={getElementFromMycvArray(cvParts, "Summary")}
        ></CVSection>
        <CVSection title="Education">
          <Education
            title={getElementFromMycvArray(cvParts, "School")}
            degree={getElementFromMycvArray(cvParts, "Degree")}
          ></Education>
        </CVSection>
        <CVSection title="Experience">
          <Experience
            company={getElementFromMycvArray(cvParts, "company")}
            title={getElementFromMycvArray(cvParts, "role")}
            startDate={getElementFromMycvArray(cvParts, "start date")}
            endDate={getElementFromMycvArray(cvParts, "end date")}
            bulletPoints={listOfExperiencePoints()}
          ></Experience>
        </CVSection>
        <CVSection title="Skills">
          <Skills skillList={listOfSkillsPoints()}></Skills>
        </CVSection>
      </div>
    );
  }
}
