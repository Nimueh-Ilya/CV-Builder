import { ReactNode } from "react";

interface inputSectionProps {
  title?: string;
  children?: ReactNode;
}
export function inputSection({ title, children }: inputSectionProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Please input your {title}</p>
      <div>{children}</div>
    </div>
  );
}
