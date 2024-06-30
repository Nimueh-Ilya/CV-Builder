import { useState } from "react";
import { InputElement } from "./InputElement";

interface BulletPointProps {
  index: number;
  pushData: (data: { [key: string]: string }) => void;
  removeInput: (index: number) => void;
}

function BulletPoint({ index, removeInput, pushData }: BulletPointProps) {
  return (
    <div>
      <InputElement
        childToParent={pushData}
        label={`Bullet Point ${index + 1}`}
      />
      <button onClick={() => removeInput(index)}>X</button>
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
    console.log(experienceData);
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
      <div>
        <InputElement childToParent={pushData} label="Company" />
        <InputElement childToParent={pushData} label="Role" />
        <InputElement childToParent={pushData} label="StartDate" />
        <InputElement childToParent={pushData} label="EndDate" />
      </div>

      <ul>
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
      <div>
        <button onClick={addComponent}>+</button>
      </div>
    </div>
  );
}
