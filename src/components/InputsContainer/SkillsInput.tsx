import { useEffect, useState } from "react";
import { InputElement } from "./InputElement";
interface SkillProps {
  index: number;
  reset: boolean;
  removeInput: (index: number) => void;
  pushData: (data: unknown) => void;
}
interface SkillsInputProps {
  changeLocalData: (data: object) => void;
}
interface SkillData {
  [key: string]: string;
}
function sortArray(object1: SkillData, object2: SkillData) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  return key1[0].localeCompare(key2[0]);
}
function Skill({ index, removeInput, pushData, reset }: SkillProps) {
  return (
    <div className="flex justify-between items-stretch gap-2">
      <InputElement
        reset={reset}
        label={`Skill ${index + 1}`}
        childToParent={pushData}
      />
      <button onClick={() => removeInput(index)}>-</button>
    </div>
  );
}

export function SkillsInput({ changeLocalData }: SkillsInputProps) {
  const [componentIndex, setComponentIndex] = useState<number[]>([0]);
  const [skillData, setSkillData] = useState<SkillData[]>([]);
  const [reset, setReset] = useState(false);

  const switchReset = () => {
    setReset((prevReset) => !prevReset);
  };
  const pushData = (data: unknown) => {
    const nextData = [...skillData];
    nextData.push(data as SkillData);
    nextData.sort(sortArray);

    setSkillData(nextData);
  };
  useEffect(() => {
    if (reset) {
      setSkillData([]);
      setReset(false);
    }
  }, [reset]);
  const removeComponent = (index: number) => {
    skillData.splice(index, 1);
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
            reset={reset}
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
            switchReset();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
