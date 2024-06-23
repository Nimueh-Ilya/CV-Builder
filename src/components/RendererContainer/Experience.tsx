interface ExperienceProps {
  title?: string;
  date?: string;
  bulletPoints?: string[];
}
export function Experience({ title, date, bulletPoints }: ExperienceProps) {
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
        <h2 className="font-semibold">{title}</h2>
        <div className="font-bold">{date}</div>
      </div>
      <ul>{listItems}</ul>
    </div>
  );
}
