interface SelectionElementProps {
  title: string;
  content: string;
  checkedItem: unknown;
  inputType: "radio" | "checkbox";
}

export default function SelectionElement({
  title,
  content,
  checkedItem,
  inputType,
}: SelectionElementProps) {
  return (
    <div>
      <div>
        <h3>{title} :</h3>
        <p>{content}</p>
      </div>
      <input
        value={content}
        type={inputType}
        onChange={(e) => {
          e.target.checked ? (checkedItem = content) : (checkedItem = null);
        }}
      />
    </div>
  );
}
