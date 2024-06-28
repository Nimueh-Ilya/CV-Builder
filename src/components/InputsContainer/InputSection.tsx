import { ReactNode } from "react";

interface InputSectionProps {
  title?: string;
  children?: ReactNode;
}
export function InputSection({ title, children }: InputSectionProps) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}
