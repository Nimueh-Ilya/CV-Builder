import { ReactNode, useState } from "react";
interface InputSectionProps {
  title: string;
  children: ReactNode;
}

export function InputSection({ title, children }: InputSectionProps) {
  const [renderInput, toggleInput] = useState(false);
  const handleRenderInput = () => {
    toggleInput(!renderInput);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <p>{title}</p>
        <button onClick={handleRenderInput}>&#9207;</button>
      </div>
      {renderInput ? <div>{children}</div> : <div></div>}
    </div>
  );
}
export function InputTab() {
  return <div></div>;
}
