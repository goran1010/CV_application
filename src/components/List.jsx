export default function List({ workExperience, deleteWorkExperience }) {
  return (
    <div>
      {workExperience.map((company) => {
        return (
          <div key={company.id}>
            <span>{company.name}</span>
            <button
              data-id={company.id}
              onClick={(e) => {
                e.preventDefault();
                deleteWorkExperience(e.target.getAttribute("data-id"));
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
