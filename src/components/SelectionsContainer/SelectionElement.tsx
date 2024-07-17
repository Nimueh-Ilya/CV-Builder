interface SelectionElementProps {
  title: string;
  content: string;
  inputType: "radio" | "checkbox";
}

export default function SelectionElement({
  title,
  content,
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
        onChange={() => {
          console.log("changed");
        }}
      />
    </div>
  );
}
