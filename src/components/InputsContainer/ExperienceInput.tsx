import { useState } from "react";
import { InputElement } from "./InputElement";

interface BulletPointProps {
  index: number;
  pushData: (data: { [key: string]: string }) => void;
  removeInput: (index: number) => void;
}

function BulletPoint({ index, removeInput, pushData }: BulletPointProps) {
  return (
    <div className="flex justify-between items-stretch gap-2">
      <InputElement childToParent={pushData} label={`Point ${index + 1}`} />
      <button onClick={() => removeInput(index)}>-</button>
    </div>
  );
}
export function ExperienceInput() {
  const [components, setComponents] = useState<number[]>([0]);
  const [experienceData, setExperienceData] = useState<{
    [key: string]: string | { [key: string]: string }[];
  }>({ BulletPoints: [] });
  const pushData = (data: object) => {
    const nextData = { ...experienceData, ...data };
    setExperienceData(nextData);
  };
  const pushFormatedData = (data: { [key: string]: string }) => {
    if (
      Array.isArray(experienceData.BulletPoints) &&
      experienceData.BulletPoints.some(
        (item) => JSON.stringify(item) === JSON.stringify(data)
      )
    ) {
      return;
    }
    setExperienceData((prevData) => {
      const updatedBulletPoints = [
        ...(prevData.BulletPoints as { [key: string]: string }[]),
      ];
      const newIndex = prevData.BulletPoints.length;
      updatedBulletPoints[newIndex] = {
        ...updatedBulletPoints[newIndex],
        ...data,
      };
      return { ...prevData, BulletPoints: updatedBulletPoints };
    });
  };
  const removeComponent = (index: number) => {
    setComponents((prevComponents) =>
      prevComponents.filter((_, i) => i !== index)
    );
  };

  const addComponent = () => {
    setComponents((prevComponents) => [
      ...prevComponents,
      prevComponents.length,
    ]);
  };

  return (
    <div>
      <div className="flex flex-col gap-1">
        <InputElement childToParent={pushData} label="Company" />
        <InputElement childToParent={pushData} label="Role" />
        <InputElement childToParent={pushData} label="StartDate" />
        <InputElement childToParent={pushData} label="EndDate" />
      </div>
      <div className="ml-1 m-4 ">Bullet Points</div>
      <ul className="flex flex-col gap-1 m-1 ml-4">
        {components.map((_, index) => (
          <li key={index}>
            <BulletPoint
              pushData={pushFormatedData}
              index={index}
              removeInput={removeComponent}
            />
          </li>
        ))}
      </ul>
      <div className="flex">
        <button className="grow" onClick={addComponent}>
          +
        </button>
      </div>
    </div>
  );
}
