import { FC } from "react";

interface CVSectionProps {
  sectionTitle: string;
  childComponent: FC;
}
export default function CVSection({
  sectionTitle,
  childComponent,
}: CVSectionProps) {
  return (
    <>
      <h2>{sectionTitle}</h2>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      {childComponent}
    </>
  );
}
