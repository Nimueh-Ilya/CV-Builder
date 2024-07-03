import { ReactNode } from "react";

interface InputSectionProps {
  title?: string;
  children: ReactNode;
}
export function InputSection({ title, children }: InputSectionProps) {
  return (
    <div className="m-2 *:m-1">
      <div className="flex justify-center items-center font-bold">
        <h2 className="m-2">{title}</h2>
      </div>

      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}
