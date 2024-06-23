interface EducationProps {
  title?: string;
  date?: string;
}
export function Education({ title, date }: EducationProps) {
  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="font-semibold">{title}</h2>
        <div className="font-bold">{date}</div>
      </div>
    </div>
  );
}
