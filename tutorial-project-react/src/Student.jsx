

// proops practice 

function Student(proops) {
  return (
    <div className="job">
      <p>Name: {proops.name}</p>
      <p>Age: {proops.age}</p>
      <p>Employe: {proops.isEmploye ? "Yes" : "No"}</p>
    </div>
  );
}

export default Student;