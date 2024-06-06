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
      {childComponent}
    </>
  );
}
