import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import React, { useState } from "react";


const getGPnGrade = (marks) => {
  if (marks >= 85) return { gradePoint: 4.00, grade: 'A' };
  if (marks >= 80) return { gradePoint: 3.70, grade: 'A-' };
  if (marks >= 75) return { gradePoint: 3.30, grade: 'B+' };
  if (marks >= 70) return { gradePoint: 3.00, grade: 'B' };
  if (marks >= 65) return { gradePoint: 2.70, grade: 'B-' };
  if (marks >= 61) return { gradePoint: 2.30, grade: 'C+' };
  if (marks >= 58) return { gradePoint: 2.00, grade: 'C' };
  if (marks >= 55) return { gradePoint: 1.70, grade: 'C-' };
  if (marks >= 50) return { gradePoint: 1.00, grade: 'D' };
  return { gradePoint: 0.00, grade: 'F' };
}


function GPAInput(props) {
  let gpNGrade = getGPnGrade(props.subject.marks);

  const [subjInfo, setSubjInfo] = useState({ id: props.subject.id, name: props.subject.name, marks: props.subject.marks, credits: props.subject.credits, gradePoint: gpNGrade.gradePoint, grade: gpNGrade.grade });

  const handleChange = (e) => {
    let newSubjInfo = { ...subjInfo };
    newSubjInfo[e.target.name] = e.target.value;
    newSubjInfo.gradePoint = getGPnGrade(newSubjInfo.marks).gradePoint;
    newSubjInfo.grade = getGPnGrade(newSubjInfo.marks).grade;
    setSubjInfo(newSubjInfo);
    props.f(subjInfo.id, newSubjInfo);
  }

  return (
    <div className="gpa-input">
      <input
        type="text"
        name="name"
        autoComplete="off"
        placeholder="Eg. Calculus"
        className="ip-field name"
        onChange={handleChange}
        value={subjInfo.name}
        />
      <input
        type="number"
        min={0}
        max={100}
        name="marks"
        autoComplete="off"
        placeholder="Eg. 78"
        className="ip-field  marks"
        value={subjInfo.marks}
        onChange={handleChange}
        required
        />
      <input
        type="number"
        name="credits"
        min={1}
        max={3}
        autoComplete="off"
        placeholder="Eg. 3"
        className="ip-field credits"
        value={subjInfo.credits}
        onChange={handleChange}
        required
        />
      <input
        type="text"
        name="grade"
        min={1}
        max={3}
        autoComplete="off"
        className="ip-field  credits c-dis"
        value={subjInfo.grade}
        required
        disabled
      />
      <input
        type="number"
        name="gradepoint"
        min={1}
        max={3}
        autoComplete="off"
        className="ip-field  credits c-dis"
        value={subjInfo.gradePoint.toFixed(2)}
        required
        disabled
      />

      <div className="delete-me" onClick={() => props.removeSubject(subjInfo.id)}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </div>
    </div>
  );
}

export default GPAInput;
