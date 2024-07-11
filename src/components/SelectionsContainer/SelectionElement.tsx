interface SelectionElementProps {
  title: string;
  content: string;
}

export default function SelectionElement({
  title,
  content,
}: SelectionElementProps) {
  return (
    <div>
      <div>
        <h3>{title} :</h3>
        <p>{content}</p>
      </div>
      <input type="checkbox" />
    </div>
  );
}
