export default function Information({
  firstName,
  lastName,
  age,
  email,
  changeFirstName,
  changeLastName,
  changeAge,
  changeEmail,
}) {
  return (
    <form>
      <fieldset>
        <legend>Personal Information</legend>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={changeFirstName}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={changeLastName}
          />
        </div>
        <div>
          <label htmlFor="age">My Age</label>
          <input type="number" id="age" value={age} onChange={changeAge} />
        </div>
        <div>
          <label htmlFor="email">My Email</label>
          <input type="mail" id="email" value={email} onChange={changeEmail} />
        </div>
      </fieldset>
    </form>
  );
}
