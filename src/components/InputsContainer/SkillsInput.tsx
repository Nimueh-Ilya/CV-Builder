import { useState } from "react";
import { InputElement } from "./InputElement";
interface SkillProps {
  index: number;
  removeInput: (index: number) => void;
  pushData: (data: unknown) => void;
}
interface SkillsInputProps {
  changeLocalData: (data: unknown) => void;
}
interface SkillData {
  [key: string]: string;
}
function Skill({ index, removeInput, pushData }: SkillProps) {
  return (
    <div className="flex justify-between items-stretch gap-2">
      <InputElement label={`Skill ${index + 1}`} childToParent={pushData} />
      <button onClick={() => removeInput(index)}>-</button>
    </div>
  );
}

export function SkillsInput({ changeLocalData }: SkillsInputProps) {
  const [componentIndex, setComponentIndex] = useState<number[]>([0]);
  const [skillData, setSkillData] = useState<SkillData>({});
  const pushData = (data: unknown) => {
    const nextData = { ...(skillData as object), ...(data as object) };
    setSkillData(nextData);
  };
  const removeComponent = (index: number) => {
    const key = Object.keys(skillData)[index];
    delete skillData[key];
    setComponentIndex((prevComponents) =>
      prevComponents.filter((_, i) => i !== index)
    );
  };

  const addComponent = () => {
    setComponentIndex((prevComponents) => [
      ...prevComponents,
      prevComponents.length,
    ]);
  };
  return (
    <div className="flex flex-col gap-2">
      <ul className="flex flex-col gap-2 m-1 ml-4">
        {componentIndex.map((_, index) => (
          <Skill
            pushData={pushData}
            key={index}
            index={index}
            removeInput={removeComponent}
          />
        ))}
      </ul>
      <div className="flex">
        <button className="flex-grow" onClick={addComponent}>
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            changeLocalData(skillData);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
