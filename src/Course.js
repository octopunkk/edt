import React, { useState } from "react";
import { PopUp } from "./PopUp";

export function Course(props) {
  let course = props.course;
  let [showInfo, setShowInfo] = useState("none");

  let handleClick = () => {
    showInfo === "none" ? setShowInfo("content") : setShowInfo("none");
  };

  return (
    <div
      onClick={handleClick}
      className={`${course.time} ${course.type} ${course.day} course clay`}
    >
      <p className={`${course.type}name`}>{course.name}</p>
      {showInfo === "content" && <PopUp course={course} />}
    </div>
  );
}
