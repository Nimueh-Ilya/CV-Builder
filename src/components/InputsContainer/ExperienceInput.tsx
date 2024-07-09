import { useEffect, useState } from "react";
import { InputElement } from "./InputElement";

interface BulletPointProps {
  index: number;
  reset: boolean;
  pushData: (data: { [key: string]: string }) => void;
  removeInput: (index: number) => void;
}
interface ExperienceInputProps {
  changeLocalData: (data: object) => void;
}

function BulletPoint({
  index,
  removeInput,
  pushData,
  reset,
}: BulletPointProps) {
  return (
    <div className="flex justify-between items-stretch gap-2">
      <InputElement
        reset={reset}
        childToParent={pushData}
        label={`Point ${index + 1}`}
      />
      <button onClick={() => removeInput(index)}>-</button>
    </div>
  );
}
export function ExperienceInput({ changeLocalData }: ExperienceInputProps) {
  const [components, setComponents] = useState<number[]>([0]);
  const [experienceData, setExperienceData] = useState<{
    [key: string]: string | { [key: string]: string }[];
  }>({ BulletPoints: [] });
  const [reset, setReset] = useState(false);

  const switchReset = () => {
    setReset((prevReset) => !prevReset);
  };
  const pushData = (data: object) => {
    setExperienceData((prevData) => ({ ...prevData, ...data }));
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
    if (Array.isArray(experienceData.BulletPoints))
      experienceData.BulletPoints.splice(index, 1);
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
  useEffect(() => {
    if (reset) {
      setExperienceData((prevData) => ({ ...prevData, BulletPoints: [] }));
      setReset(false);
    }
  }, [reset]);
  return (
    <div>
      <div className="flex flex-col gap-1">
        <InputElement reset={reset} childToParent={pushData} label="Company" />
        <InputElement reset={reset} childToParent={pushData} label="Role" />
        <InputElement
          reset={reset}
          childToParent={pushData}
          label="StartDate"
        />
        <InputElement reset={reset} childToParent={pushData} label="EndDate" />
      </div>
      <div className="ml-1 m-4 ">Bullet Points</div>
      <ul className="flex flex-col gap-1 m-1 ml-4">
        {components.map((_, index) => (
          <li key={index}>
            <BulletPoint
              pushData={pushFormatedData}
              index={index}
              removeInput={removeComponent}
              reset={reset}
            />
          </li>
        ))}
      </ul>
      <div className="flex">
        <button className="grow" onClick={addComponent}>
          +
        </button>
      </div>
      <button
        onClick={() => {
          changeLocalData(experienceData);
          switchReset();
        }}
      >
        Submit
      </button>
    </div>
  );
}
