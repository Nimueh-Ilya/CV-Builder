import SelectionElement from "./SelectionElement";
interface SelectionContainerProps {
  itemKey: string;
}

export default function SelectionContainer({
  itemKey,
}: SelectionContainerProps) {
  const cvListKeys = Object.keys(localStorage);
  const cvList = cvListKeys.map((key) => {
    return JSON.parse(localStorage.getItem(key)!);
  });
  const cvListCVs = cvList.map((item) => {
    if (item) {
      return {
        ...item.find((item: object) => {
          return Object.prototype.hasOwnProperty.call(item, "Title");
        }),
        ...item.find((item: object) => {
          return Object.prototype.hasOwnProperty.call(item, itemKey);
        }),
      };
    }
  });
  const elements = cvListCVs.map((item) => (
    <li key={`${item.Title}${item[itemKey]}`}>
      <SelectionElement
        title={item.Title}
        content={item[itemKey]}
        key={`${item.Title}${item[itemKey]}`}
      ></SelectionElement>
    </li>
  ));
  return (
    <div>
      <div>
        <ul>{elements}</ul>
      </div>
      <button
        onClick={() => {
          console.log(cvListCVs);
        }}
      ></button>
    </div>
  );
}
