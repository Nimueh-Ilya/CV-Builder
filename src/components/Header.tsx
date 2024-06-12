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
    <>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{`${country}, ${state} | ${phoneNumber} | ${email}`}</p>;
    </>
  );
}
