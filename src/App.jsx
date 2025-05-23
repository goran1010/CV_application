import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = `${firstName} ${lastName}`;

  function changeFirstName(e) {
    setFirstName(e.target.value);
  }
  function changeLastName(e) {
    setLastName(e.target.value);
  }

  const [button, setButton] = useState("form");

  function changeButton() {
    if (button === "form") {
      setButton("preview");
    } else {
      setButton("form");
    }
  }
  return (
    <main className="cv-app">
      <Header button={button} changeButton={changeButton} fullName={fullName} />
      <Main
        button={button}
        firstName={firstName}
        lastName={lastName}
        fullName={fullName}
        changeFirstName={changeFirstName}
        changeLastName={changeLastName}
      />
    </main>
  );
}

export default App;
