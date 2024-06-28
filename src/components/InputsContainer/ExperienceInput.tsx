import { useState } from "react";
import { InputElement } from "./InputElement";

interface BulletPointProps {
  index: number;
  removeInput: (index: number) => void;
}

function BulletPoint({ index, removeInput }: BulletPointProps) {
  return (
    <div>
      <InputElement label="BulletPoint" />
      <button onClick={() => removeInput(index)}>X</button>
    </div>
  );
}

export function ExperienceInput() {
  const [components, setComponents] = useState<number[]>([0]);

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
        <InputElement label="Company" />
        <InputElement label="Role" />
        <InputElement label="StartDate" />
        <InputElement label="EndDate" />
      </div>

      <ul>
        {components.map((_, index) => (
          <li key={index}>
            <BulletPoint index={index} removeInput={removeComponent} />
          </li>
        ))}
      </ul>
      <div>
        <button onClick={addComponent}>Add a bullet point</button>
      </div>
    </div>
  );
}
