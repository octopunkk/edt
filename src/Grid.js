export function Grid(props) {
  let days = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];
  let hours = ["8h00", "10h00", "12h00", "14h00", "16h00", "18h00"];
  let courses = [
    {
      id: "INFOH410",
      name: "Techniques of artificial intelligence",
      location: "S.UB4.132",
      teacher: "BERSINI Hugues",
      type: "Théorie",
      time: "h1012",
      day: "lundi",
    },
    {
      id: "INFOH503",
      name: "GPU/FPGA parallel programming",
      location: "S.L3.217",
      teacher: "LAFRUIT Gauthier",
      type: "Travaux pratiques",
      time: "h1418",
      day: "lundi",
    },
    {
      id: "INFOH509",
      name: "Web Technologies",
      location: "Distanciel",
      teacher: "SAKR Mahmoud",
      type: "Travaux pratiques",
      time: "h0810",
      day: "mardi",
    },
    {
      id: "INFOH503",
      name: "GPU/FPGA parallel programming",
      location: "S.L3.219",
      teacher: "LAFRUIT Gauthier",
      type: "Théorie",
      time: "h1012",
      day: "mardi",
    },
    {
      id: "INFOH509",
      name: "Web Technologies",
      location: "S.R42.4.502 - Auditoire Paul HATRY",
      teacher: "SAKR Mahmoud",
      type: "Théorie",
      time: "h1416",
      day: "mercredi",
    },
    {
      id: "GESTS483",
      name: "Digital and IT Governance",
      location: "Distanciel",
      teacher: "ATAYA Georges",
      type: "Théorie",
      time: "h0810",
      day: "jeudi",
    },
    {
      id: "PHYSF517",
      name: "How To Make (almost) Any Experiment Using Digital Fabrication",
      location: "Fablab",
      teacher: "TERWAGNE Denis",
      type: "Théorie",
      time: "h10301230",
      day: "jeudi",
    },
    {
      id: "PHYSF517",
      name: "How To Make (almost) Any Experiment Using Digital Fabrication",
      location: "Fablab",
      teacher: "TERWAGNE Denis",
      type: "Travaux pratiques",
      time: "h13301530",
      day: "jeudi",
    },
    {
      id: "INFOH512",
      name: "Current trends in artificial intelligence",
      location: "S.C5.IRIDIA",
      teacher: " 	BERSINI Hugues",
      type: "Théorie",
      time: "h13301530",
      day: "vendredi",
    },
    {
      id: "INFOH410",
      name: "Techniques of artificial intelligence",
      location: "S.UA2.118 - Auditoire HENRIOT",
      teacher: "BERSINI Hugues",
      type: "Travaux pratiques",
      time: "h1618",
      day: "vendredi",
    },
  ];
  return (
    <div className="grid">
      {days.map((day) => (
        <div className={`${day} clay day`}>{day}</div>
      ))}
      {hours.map((hour) => (
        <div className={`h${hour} hour`}>{hour}</div>
      ))}
      {courses.map((course) => (
        <div
          className={`${course.time} ${course.type} ${course.day} course clay`}
        >
          <p className={`${course.type}name`}>{course.name}</p>
          {course.id} <br />
          {course.type} <br />
          {course.teacher} <br />
          {course.location}
        </div>
      ))}
    </div>
  );
}
