export default function Header({ button, changeButton, fullName }) {
  let buttonText;
  let h2Text;
  if (button === "form") {
    h2Text = "Write your information below:";
    buttonText = "Preview My Form";
  } else {
    h2Text = "This is how your CV will look like:";
    buttonText = "Back to the Form";
  }

  return (
    <div>
      <h1>Hello {fullName !== " " ? fullName : "new user"}!</h1>
      <button onClick={changeButton}>{buttonText}</button>
      <h2>{h2Text}</h2>
    </div>
  );
}
