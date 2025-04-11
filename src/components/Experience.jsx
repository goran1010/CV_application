import { useState } from "react";
import List from "./List";

export default function Experience({
  workExperience,
  addWorkExperience,
  deleteWorkExperience,
}) {
  const [newCompanyName, setNewCompanyName] = useState("");
  function changeNewCompanyName(e) {
    setNewCompanyName(e.target.value);
  }
  return (
    <form>
      <fieldset>
        <legend>Experience</legend>
        <div>
          <label htmlFor="work-input">Write the name of the company:</label>
          <input type="text" id="work-input" onChange={changeNewCompanyName} />
          <button
            onClick={(e) => {
              e.preventDefault();
              addWorkExperience(newCompanyName);
              document.querySelector("#work-input").value = "";
            }}
          >
            Add new work experience
          </button>
        </div>
        <div>
          <List
            workExperience={workExperience}
            deleteWorkExperience={deleteWorkExperience}
          />
        </div>
      </fieldset>
    </form>
  );
}
