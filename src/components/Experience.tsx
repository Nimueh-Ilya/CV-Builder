interface JobExperienceProps {
  experienceArray: string[];
}
export default function JobExperience({ experienceArray }: JobExperienceProps) {
  const experienceList = experienceArray.map((point, index) => (
    <li key={index}>{point}</li>
  ));
  return (
    <>
      <ul>{experienceList}</ul>
    </>
  );
}
