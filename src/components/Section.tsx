interface CVSectionProps {
  sectionTitle: string;
  children: JSX.Element;
}
export default function CVSection({ sectionTitle, children }: CVSectionProps) {
  return (
    <>
      <h2>{sectionTitle}</h2>
      <div className="flex-grow border-t border-gray-400"></div>
      <div className="relative flex py-5 items-center"></div>
      <div> {children}</div>
    </>
  );
}
