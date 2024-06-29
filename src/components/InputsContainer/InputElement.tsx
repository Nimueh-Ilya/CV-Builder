interface InputElementProps {
  label: string;
}

export function InputElement({ label }: InputElementProps) {
  return (
    <div className="grow flex align-middle gap-1 ">
      <label className="self-center" htmlFor={label.split(" ").join("")}>
        {label}
      </label>
      <input className="grow" id={label.split(" ").join("")} type="text" />
    </div>
  );
}
