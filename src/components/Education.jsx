export default function Education({
  elementarySchool,
  changeElementarySchool,
  highSchool,
  changeHighSchool,
  university,
  changeUniversity,
}) {
  return (
    <form>
      <fieldset>
        <legend>Education</legend>
        <div>
          <label htmlFor="elementary-school">Elementary School</label>
          <input
            type="text"
            id="elementary-school"
            value={elementarySchool}
            onChange={changeElementarySchool}
          />
        </div>
        <div>
          <label htmlFor="high-school">High School</label>
          <input
            type="text"
            id="high-school"
            value={highSchool}
            onChange={changeHighSchool}
          />
        </div>
        <div>
          <label htmlFor="university">University</label>
          <input
            type="text"
            id="university"
            value={university}
            onChange={changeUniversity}
          />
        </div>
      </fieldset>
    </form>
  );
}
