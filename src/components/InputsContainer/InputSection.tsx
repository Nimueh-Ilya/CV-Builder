import { ReactNode } from "react";

interface InputSectionProps {
  title?: string;
  children?: ReactNode;
}
export function InputSection({ title, children }: InputSectionProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Please input your {title}</p>
      <div>{children}</div>
    </div>
  );
}
