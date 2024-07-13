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
  if (itemKey === "Summary") {
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
    return <ul>{elements}</ul>;
  }
  if (itemKey === "Education") {
    const cvListCVs = cvList.map((item) => {
      if (item) {
        return {
          ...item.find((item: object) => {
            return Object.prototype.hasOwnProperty.call(item, "Title");
          }),
          ...item.find((item: object) => {
            return Object.prototype.hasOwnProperty.call(item, "School");
          }),
          ...item.find((item: object) => {
            return Object.prototype.hasOwnProperty.call(item, "Degree");
          }),
        };
      }
    });
    const elements = cvListCVs.map((item) => (
      <div>
        <li key={`${item.Title}${item["School"]}`}>
          <SelectionElement
            title={item.Title}
            content={item["School"]}
            key={`${item.Title}${item["School"]}`}
          ></SelectionElement>
        </li>
        <li key={`${item.Title}${item["Degree"]}`}>
          <SelectionElement
            title={item.Title}
            content={item["Degree"]}
            key={`${item.Title}${item["Degree"]}`}
          ></SelectionElement>
        </li>
      </div>
    ));
    return <ul>{elements}</ul>;
  }
  // if (itemKey === "Experience") {
  // }
  if (itemKey === "Skills") {
    const cvListCVs = cvList.map((item) => {
      if (item) {
        return {
          ...item.find((item: object) => {
            return Object.prototype.hasOwnProperty.call(item, "Title");
          }),
          ...item.find((item: object) => {
            return Array.isArray(item);
          }),
        };
      }
    });
    const elements = cvListCVs.map((item) => {
      const skillList: unknown[] = [];
      for (const [key, value] of Object.entries(item)) {
        if (key !== "Title") {
          skillList.push(...Object.values(value as object));
        }
      }
      skillList.flat();
      return skillList.map((skill) => {
        return (
          <div>
            <li key={`${item.Title}${skill}`}>
              <SelectionElement
                title={item.Title}
                content={skill as string}
                key={`${item.Title}${skill}`}
              ></SelectionElement>
            </li>
          </div>
        );
      });
    });

    return (
      <div>
        <ul>{elements}</ul>
        <button></button>
      </div>
    );
  } else return <div>Error</div>;
}
