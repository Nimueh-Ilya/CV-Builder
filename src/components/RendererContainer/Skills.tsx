interface SkillsProps {
  skillList?: string[];
}
export function Skills({ skillList }: SkillsProps) {
  const listItems = skillList?.map((item, index) => {
    return (
      <li className="pb-2 list-disc" key={index}>
        {item}
      </li>
    );
  });
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
