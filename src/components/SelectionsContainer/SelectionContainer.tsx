import { useState } from "react";
import SelectionElement from "./SelectionElement";
interface SelectionContainerProps {
  itemKey: string;
}
//TODO: Radios need the same name to group them, change the HTML accordingly
export default function SelectionContainer({
  itemKey,
}: SelectionContainerProps) {
  const [template, setTemplate] = useState({});
  const addTemplate = (item: object) => {
    setTemplate((prevTemplate) => ({ ...prevTemplate, item }));
  };
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
            <li key={point}>{point}</li>
          </div>
        );
      });
      return (
        <div>
          <h1>{item.Title}:</h1>
          <p>{item.Company}</p>
          <p>{item.Role}</p>
          <p>{item.StartDate}</p>
          <p>{item.EndDate}</p>
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
