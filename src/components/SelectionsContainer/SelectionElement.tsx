interface SelectionElementProps {
  title: string;
  content: string;
  category: string;
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
  category,
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
        onClick={() => {
          checkForItems({ title: category, content: content });
        }}
      />
    </div>
  );
}
