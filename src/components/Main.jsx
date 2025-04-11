import { useState } from "react";
import Information from "./Information";
import Preview from "./Preview";
import Education from "./Education";
import Experience from "./Experience";

export default function Main({
  button,
  firstName,
  lastName,
  fullName,
  changeFirstName,
  changeLastName,
}) {
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  function changeAge(e) {
    setAge(e.target.value);
  }
  function changeEmail(e) {
    setEmail(e.target.value);
  }

  const [elementarySchool, setElementarySchool] = useState("");
  const [highSchool, setHighSchool] = useState("");
  const [university, setUniversity] = useState("");

  function changeElementarySchool(e) {
    setElementarySchool(e.target.value);
  }
  function changeHighSchool(e) {
    setHighSchool(e.target.value);
  }
  function changeUniversity(e) {
    setUniversity(e.target.value);
  }

  const [workExperience, setWorkExperience] = useState([]);
  function addWorkExperience(name) {
    let id = self.crypto.randomUUID();
    setWorkExperience([...workExperience, { name, id }]);
  }
  function deleteWorkExperience(deleteID) {
    const newArray = workExperience.filter(
      (company) => company.id !== deleteID
    );
    setWorkExperience(newArray);
  }

  if (button === "form") {
    return (
      <div>
        <Information
          firstName={firstName}
          lastName={lastName}
          age={age}
          email={email}
          changeFirstName={changeFirstName}
          changeLastName={changeLastName}
          changeAge={changeAge}
          changeEmail={changeEmail}
        />
        <Education
          elementarySchool={elementarySchool}
          changeElementarySchool={changeElementarySchool}
          highSchool={highSchool}
          changeHighSchool={changeHighSchool}
          university={university}
          changeUniversity={changeUniversity}
        />
        <Experience
          workExperience={workExperience}
          addWorkExperience={addWorkExperience}
          deleteWorkExperience={deleteWorkExperience}
        />
      </div>
    );
  }
  return (
    <Preview
      fullName={fullName}
      age={age}
      email={email}
      elementarySchool={elementarySchool}
      highSchool={highSchool}
      university={university}
      workExperience={workExperience}
    />
  );
}
