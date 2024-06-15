interface SkillsListProps {
  skills: string[];
}
export default function SkillsList({ skills }: SkillsListProps) {
  const skillList = skills.map((skill, index) => <li key={index}>{skill}</li>);
  return <ul>{skillList}</ul>;
}
