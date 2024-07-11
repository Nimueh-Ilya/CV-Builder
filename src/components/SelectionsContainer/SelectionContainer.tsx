// import SelectionElement from "./SelectionElement";
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
      return item.find((item: object) => {
        return Object.prototype.hasOwnProperty.call(item, itemKey);
      });
    }
  });

  return (
    <div>
      <div>
        <button
          onClick={() => {
            console.log(cvListCVs);
          }}
        ></button>
        <ul>{}</ul>
      </div>
    </div>
  );
}
