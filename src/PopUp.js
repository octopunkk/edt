export function PopUp(props) {
  let course = props.course;
  let showInfo = props.showInfo;
  return (
    <div
      className={`info clay ${course.type}name`}
      style={{ display: `${showInfo}` }}
    >
      {console.log(showInfo)}
      {showInfo}
      {course.id} <br />
      {course.type} <br />
      {course.teacher} <br />
      {course.location}
    </div>
  );
}
