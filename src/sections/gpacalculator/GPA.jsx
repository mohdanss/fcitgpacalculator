// import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
// import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
// import {faCircleXmark} from "@fortawesome/free-solid-svg-icons/faCircleXmark";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { faCircleXmark, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import React, { useEffect } from "react";
import GPAInput from "../../components/GPAInput";

const subjectsArr = [
  { id: 0, name: "", marks: 0, credits: 3, gradePoint: 0, grade: "F" },
  { id: 1, name: "", marks: 0, credits: 3, gradePoint: 0, grade: "F" },
  { id: 2, name: "", marks: 0, credits: 3, gradePoint: 0, grade: "F" },
  { id: 3, name: "", marks: 0, credits: 3, gradePoint: 0, grade: "F" },
  { id: 4, name: "", marks: 0, credits: 3, gradePoint: 0, grade: "F" },
];

const saveSubjects = (subjects) => {
  localStorage.setItem("subjects", JSON.stringify(subjects));
};

function GPA() {
  const [GPA, setGPA] = React.useState(0.0);
  const [message, setMessage] = React.useState("");
  const [subjects, setSubjects] = React.useState(
    localStorage.getItem("subjects")
      ? JSON.parse(localStorage.getItem("subjects"))
      : subjectsArr
  );

  const handleMarksNCredits = (idx, subject) => {
    let newSubjects = [...subjects];

    // update the newSubjects array, where the id matches the idx

    for (let i = 0; i < subjects.length; i++) {
      if(subjects[i].id === idx) {
        newSubjects[i] = subject;
      }
    }

    console.log(abc);

    console.log(newSubjects);
    
    

    
    setSubjects(newSubjects);
    calculateGPA(newSubjects);
    // saveSubjects(newSubjects);
  };

  const calculateGPA = (subjects) => {
    let totalCredits = 0;
    let totalGradePoints = 0;
    subjects.forEach((subject) => {
      totalCredits += Number(subject.credits);
      totalGradePoints += Number(subject.gradePoint) * Number(subject.credits);
    });
    let GPA = (totalGradePoints / totalCredits).toFixed(2);
    setGPA(GPA);
  };

  useEffect(() => {
    calculateGPA(subjects);
  }, [subjects]);

  const handleAddNewCourse = () => {
    let newSubjects = [...subjects];

    newSubjects.push({
      id: newSubjects[newSubjects.length - 1].id + 1,
      name: "",
      marks: 0,
      credits: 3,
      gradePoint: 1,
      grade: "",
    });
    setSubjects(newSubjects);
    saveSubjects(newSubjects);
  };

  const handleRemoveSubject = (id) => {
    let newSubjects = [...subjects];
    newSubjects = newSubjects.filter((subject) => subject.id !== id);

    setSubjects(newSubjects);
    calculateGPA(newSubjects);
    saveSubjects(newSubjects);
  };

  return (
    <div className="gpa-container">
      <div className="gpa-sub-container" method="post" action="#">
        <h2>GPA Calculator</h2>
        <span>{message}</span>
        <div className="gpa-inputs">
          <h3 className="semester-no">Semester x</h3>
          <div className="col-head">
            <div className="gpa-input">
              <input
                type="text"
                placeholder="Subject"
                className="ip-field name chi"
                disabled
              />
              <input
                type="text"
                placeholder="Marks"
                className="ip-field marks chi"
                disabled
              />
              <input
                type="text"
                placeholder="Cr. Hrs"
                className="ip-field credits chi"
                disabled
              />
              <input
                type="text"
                placeholder="Grade"
                className="ip-field credits chi c-dis"
                disabled
              />
              <input
                type="text"
                placeholder="G.P"
                className="ip-field credits chi c-dis"
                disabled
              />

              <div className="delete-me" style={{ visibility: "hidden" }}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </div>
            </div>
          </div>
          <div className="inputs">
            {subjects.map((subject, index) => (
              <GPAInput
                key={subject.id}
                subject={subject}
                f={handleMarksNCredits}
                removeSubject={handleRemoveSubject}
              />
            ))}
          </div>
          <div className="addNewInput" onClick={handleAddNewCourse}>
            <FontAwesomeIcon icon={faCirclePlus} className="plusIcon" />
            <span> Add Course</span>
          </div>
          {/* <div className="addNewInput">Your GPA is {GPA}</div> */}
        </div>
        <div className="gpa-btn-container">
          <button
            className="caclulate-btn calc-btn"
            // onClick={handleCalculateGPA}
          >
            GPA is {GPA}
          </button>
          {/* <button className="add-new-semester add-sem-btn">Add Semester</button> */}
        </div>
      </div>
    </div>
  );
}

export default GPA;
