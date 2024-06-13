export interface CVHeaderProps {
  headerInfo: {
    firstName: string;
    lastName: string;
    country: string;
    state: string;
    phoneNumber: string;
    email: string;
  };
}
export function CVHeader({
  headerInfo: { firstName, lastName, country, state, phoneNumber, email },
}: CVHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{`${country}, ${state} | ${phoneNumber} | ${email}`}</p>
    </div>
  );
}
