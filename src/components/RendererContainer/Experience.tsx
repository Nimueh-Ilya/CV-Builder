interface ExperienceProps {
  company?: string;
  title?: string;
  startDate?: string;
  endDate?: string;
  bulletPoints?: string[];
}
export function Experience({
  title,
  endDate,
  startDate,
  bulletPoints,
  company,
}: ExperienceProps) {
  const listItems = bulletPoints?.map((item, index) => {
    return (
      <li className="pb-2 list-disc" key={index}>
        {item}
      </li>
    );
  });

  return (
    <div>
      <div className="flex justify-between pb-4">
        <h2 className="font-semibold">
          {company},&nbsp;{title}
        </h2>
        <div className="font-bold">
          {startDate}-{endDate}
        </div>
      </div>
      <ul>{listItems}</ul>
    </div>
  );
}
