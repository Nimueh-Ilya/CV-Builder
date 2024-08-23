interface SelectionElementProps {
  title: string;
  content: string;
  checkForItems: ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => void;
}

export default function SelectionElement({
  title,
  content,
  checkForItems,
}: SelectionElementProps) {
  return (
    <div>
      <div>
        <h3>{title} :</h3>
        <p>{content}</p>
      </div>
      <input
        value={content}
        type={"checkbox"}
        onChange={() => {
          checkForItems({ title: title, content: content });
        }}
      />
    </div>
  );
}
