interface InputElementProps {
  label: string;
}

export function InputElement({ label }: InputElementProps) {
  return (
    <div>
      <div>
        <label htmlFor={label}>
          {label}
          <input name={label} type="text" />
        </label>
      </div>
    </div>
  );
}
