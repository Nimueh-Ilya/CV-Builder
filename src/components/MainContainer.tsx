import { useState } from "react";
import InputDetails from "./InputDetails";

export default function MainContainer() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputDetails
        inputValue={inputValue}
        setInputValue={setInputValue}
      ></InputDetails>
      <div>
        <section>
          <h1>Name and Surname</h1>
          <p>City,Country | phone-number | Email Address</p>
        </section>
        <section>
          <h2>Summary</h2>
          <div>'Separator'</div>
          <p>Summary Text</p>
        </section>
        <section>
          <h2>Education</h2>
          <h3>School Name</h3>
          <p>School text</p>
        </section>
        <section>
          <h2>Experience</h2>
          <div>'Separator'</div>
          <p>Experience Component</p>
        </section>
        <section>
          <h2>Skills</h2>
          <p>Skills Component</p>
        </section>
      </div>
    </>
  );
}
