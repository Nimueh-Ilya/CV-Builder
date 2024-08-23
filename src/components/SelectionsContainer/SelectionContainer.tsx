import { useState } from "react";
import SelectionElement from "./SelectionElement";
interface SelectionContainerProps {
  itemKey: string;
}
interface selectedItemsObject {
  title: string;
  content: string;
}
export default function SelectionContainer({
  itemKey,
}: SelectionContainerProps) {
  const [selectedItems, setSelectedItems] = useState(
    Array<selectedItemsObject>
  );
  const changeSelectedItems = (item: selectedItemsObject) => {
    setSelectedItems([...selectedItems, item]);
  };
  function addSelectedItem(item: selectedItemsObject) {
    console.log(selectedItems);

    if (
      selectedItems.find(
        (value) => value.title == item.title && value.content == item.content
      )
    ) {
      selectedItems.splice(
        selectedItems.findIndex((value) => value === item),
        1
      );
      console.log(1, selectedItems);
    } else {
      changeSelectedItems(item);
      console.log(2, selectedItems);
    }
  }
  // const [template, setTemplate] = useState({});
  // const addTemplate = (item: object) => {
  //   setTemplate((prevTemplate) => ({ ...prevTemplate, item }));
  // };
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
          checkForItems={addSelectedItem}
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
            checkForItems={addSelectedItem}
          ></SelectionElement>
        </li>
        <li key={`${item.Title}${item["Degree"]}`}>
          <SelectionElement
            title={item.Title}
            content={item["Degree"]}
            key={`${item.Title}${item["Degree"]}`}
            checkForItems={addSelectedItem}
          ></SelectionElement>
        </li>
      </div>
    ));
    return <ul>{elements}</ul>;
  }
  if (itemKey === "Experience") {
    const cvListCVs = cvList.map((item) => {
      if (item) {
        return {
          ...item.find((item: object) => {
            return Object.prototype.hasOwnProperty.call(item, "Title");
          }),
          ...item.find((item: object) => {
            return Object.prototype.hasOwnProperty.call(item, "Company");
          }),
          ...item.find((item: object) => {
            return Object.prototype.hasOwnProperty.call(item, "StartDate");
          }),
          ...item.find((item: object) => {
            return Object.prototype.hasOwnProperty.call(item, "EndDate");
          }),
          ...item.find((item: object) => {
            return Object.prototype.hasOwnProperty.call(item, "Role");
          }),
          ...item.find((item: object) => {
            return Object.prototype.hasOwnProperty.call(item, "BulletPoints");
          }),
        };
      }
    });
    const elements = cvListCVs.map((item) => {
      const bulletPoints = item.BulletPoints.map((entry: object) => {
        return Object.values(entry);
      }).flat(1);
      const bulletPointsList = bulletPoints.map((point: string) => {
        return (
          <div>
            <SelectionElement
              content={point}
              title=" "
              key={point}
              checkForItems={addSelectedItem}
            ></SelectionElement>
          </div>
        );
      });
      return (
        <div>
          <h1>{item.Title}:</h1>
          <SelectionElement
            title=" "
            content={item.Company}
            checkForItems={addSelectedItem}
          ></SelectionElement>
          <SelectionElement
            key={item.Role}
            title=" "
            checkForItems={addSelectedItem}
            content={item.Role}
          ></SelectionElement>
          <SelectionElement
            key={item.StartDate}
            title=" "
            checkForItems={addSelectedItem}
            content={item.StartDate}
          ></SelectionElement>
          <SelectionElement
            key={item.EndDate}
            title=" "
            checkForItems={addSelectedItem}
            content={item.EndDate}
          ></SelectionElement>
          <ul>{bulletPointsList}</ul>
        </div>
      );
    });

    return (
      <div>
        <ul>{elements}</ul>
      </div>
    );
  }
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
                checkForItems={addSelectedItem}
              ></SelectionElement>
            </li>
          </div>
        );
      });
    });

    return (
      <div>
        <ul>{elements}</ul>
        <button>Confirm Selection</button>
      </div>
    );
  } else return <div>Error</div>;
}
