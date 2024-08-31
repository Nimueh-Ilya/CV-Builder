interface EducationProps {
  title?: string;
  degree?: string;
}
export function Education({ title, degree }: EducationProps) {
  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="font-semibold">{title}</h2>
        <div className="font-bold">{degree}</div>
      </div>
    </div>
  );
}
