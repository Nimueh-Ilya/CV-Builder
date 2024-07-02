import { useState } from "react";
import { InputElement } from "./InputElement";
interface SkillProps {
  index: number;
  removeInput: (index: number) => void;
}
function Skill({ index, removeInput }: SkillProps) {
  return (
    <div className="flex justify-between items-stretch gap-2">
      <InputElement label={`Skill ${index + 1}`} />
      <button onClick={() => removeInput(index)}>-</button>
    </div>
  );
}

export function SkillsInput() {
  const [componentIndex, setComponentIndex] = useState<number[]>([0]);
  const removeComponent = (index: number) => {
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
          <Skill key={index} index={index} removeInput={removeComponent} />
        ))}
      </ul>
      <div className="flex">
        <button className="flex-grow" onClick={addComponent}>
          +
        </button>
      </div>
    </div>
  );
}
