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
    <form className="experience">
      <fieldset>
        <legend>Experience</legend>
        <div>
          <label htmlFor="work-input">Name of the company:</label>
          <input
            type="text"
            id="work-input"
            value={newCompanyName}
            onChange={changeNewCompanyName}
          />
          <button
            className="button-add"
            onClick={(e) => {
              e.preventDefault();
              addWorkExperience(newCompanyName);
              document.querySelector("#work-input").value = "";
              setNewCompanyName("");
            }}
          >
            Add company
          </button>
        </div>
        <List
          workExperience={workExperience}
          deleteWorkExperience={deleteWorkExperience}
        />
      </fieldset>
    </form>
  );
}
