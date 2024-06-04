import JobExperience from "./Experience";
interface CVSectionProps {
  companyName: string;
  role: string;
  dateFrom: string;
  dateTo: string;
  experienceArray: string[];
}
export default function CVSection({
  companyName,
  role,
  dateFrom,
  dateTo,
  experienceArray,
}: CVSectionProps) {
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
