export default function Preview({
  fullName,
  age,
  email,
  elementarySchool,
  highSchool,
  university,
  workExperience,
}) {
  return (
    <div className="preview">
      <p>
        Hello. Let me introduce myself.
        <br />
        My name is {fullName} and I am {age} years old.
        <br />I would be very happy if you considered me for a position in your
        company. <br />
        If you would like to contact me for further information, my email is:{" "}
        {email}
      </p>
      <p>
        I have attended {elementarySchool} elementary school. <br />
        After that I have finished {highSchool} high school. <br />
        As a last stop on my educational journey I attended the {university}.
      </p>
      <p>
        I have worked at a number of different companies, and these include:
      </p>
      {workExperience.map((company) => {
        return <p key={company.id}>{company.name}</p>;
      })}
    </div>
  );
}
