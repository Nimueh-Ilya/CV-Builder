interface InputElementProps {
  title: string;
}

export function InputElement({ title }: InputElementProps) {
  return (
    <div>
      <div>
        <label htmlFor={title}>
          {title}
          <input name={title} type="text" />
        </label>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}
