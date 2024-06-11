import JobExperience from "./Experience";
interface CVExperienceProps {
  companyName: string;
  role: string;
  dateFrom: string;
  dateTo: string;
  experienceArray: string[];
}
export default function CVExperience({
  companyName,
  role,
  dateFrom,
  dateTo,
  experienceArray,
}: CVExperienceProps) {
  return (
    <>
      <section>
        <div>
          <h2>
            {companyName},{role}
          </h2>
          <h2>
            {dateFrom}-{dateTo}
          </h2>
        </div>
        <JobExperience experienceArray={experienceArray}></JobExperience>
      </section>
    </>
  );
}
