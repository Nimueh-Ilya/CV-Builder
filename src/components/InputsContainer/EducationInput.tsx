import { ReactNode, useState } from "react";
function NewEducationEntry() {
  return (
    <>
      <label htmlFor="schoolName">
        School Name
        <input type="text" name="schoolName" id="" />
      </label>
      <label htmlFor="startDate">
        Start Date
        <input type="text" name="startDate" id="" />
      </label>
      <label htmlFor="finishDate">
        Finish Date
        <input type="text" name="finishDate" id="" />
      </label>
      <label htmlFor="location">
        Location
        <input type="text" name="location" id="" />
      </label>
      <label htmlFor="degree">
        Degree
        <input type="text" name="degree" id="" />
      </label>
    </>
  );
}

export function EducationInput() {
  const [components, setComponents] = useState<ReactNode[]>([]);
  const addComponents = () => {
    setComponents([...components, <NewEducationEntry></NewEducationEntry>]);
  };
  return (
    <div>
      <div>{components}</div>
      <button onClick={addComponents}>Add a new Input</button>
    </div>
  );
}
