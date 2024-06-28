import { useState } from "react";
import { InputElement } from "./InputElement";
interface SkillProps {
  index: number;
  removeInput: (index: number) => void;
}
function Skill({ index, removeInput }: SkillProps) {
  return (
    <div>
      <InputElement label={`Skill ${index + 1}`} />
      <button onClick={() => removeInput(index)}>X</button>
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
    <div>
      <ul>
        {componentIndex.map((_, index) => (
          <Skill key={index} index={index} removeInput={removeComponent} />
        ))}
      </ul>
      <div>
        <button onClick={addComponent}>+</button>
      </div>
    </div>
  );
}
