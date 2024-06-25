import { ReactNode } from "react";

interface CVSectionProps {
  title?: string;
  children?: ReactNode;
}
export function CVSection({ title, children }: CVSectionProps) {
  if (title && children) {
    return (
      <div className="[&>*]:pb-3">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex-grow border-t border-gray-400 max-h-0"></div>
        <div>{children}</div>
      </div>
    );
  }
  return (
    <>
      <h1 className="text-3xl font-bold">Title</h1>
      <div className="flex-grow border-t text-gray-400"></div>
      <p>
        Motivated and energetic Project Manager with three years of experience
        leading international teams to achieve project goals. Proven record of
        exceeding clients' expectations, resulting in a 24% increase in new
        client acquisition. Proficient in project management software with a
        keen attention to detail.
      </p>
    </>
  );
}
