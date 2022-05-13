import { Course } from "./Course";

export function Grid(props) {
  let days = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];
  let hours = ["8h00", "10h00", "12h00", "14h00", "16h00", "18h00"];
  let courses = [
    {
      id: "INFOH410",
      name: "Techniques of artificial intelligence",
      location: "S.UB4.132",
      // location: "distanciel",
      teacher: "BERSINI Hugues",
      type: "Théorie",
      time: "h1012",
      day: "lundi",
      showInfo: "none",
    },
    // {
    //   id: "INFOH503",
    //   name: "GPU/FPGA parallel programming",
    //   // location: "S.L3.217",
    //   location: "distanciel",
    //   teacher: "LAFRUIT Gauthier",
    //   type: "Travaux pratiques",
    //   time: "h1418",
    //   day: "lundi",
    //   showInfo: "none",
    // },
    {
      id: "INFOH509",
      name: "Web Technologies",
      location: "Distanciel",
      teacher: "SAKR Mahmoud",
      type: "Travaux pratiques",
      time: "h0810",
      day: "mardi",
      showInfo: "none",
    },
    // {
    //   id: "INFOH503",
    //   name: "GPU/FPGA parallel programming",
    //   location: "S.L3.219",
    //   teacher: "LAFRUIT Gauthier",
    //   type: "Théorie",
    //   time: "h1012",
    //   day: "mardi",
    //   showInfo: "none",
    // },
    {
      id: "INFOH509",
      name: "Web Technologies",
      // location: "S.R42.4.502 - Auditoire Paul HATRY",
      location: "Distanciel",
      teacher: "SAKR Mahmoud",
      type: "Théorie",
      time: "h1416",
      day: "mercredi",
      showInfo: "none",
    },
    // {
    //   id: "GESTS483",
    //   name: "Digital and IT Governance",
    //   location: "Distanciel",
    //   teacher: "ATAYA Georges",
    //   type: "Théorie",
    //   time: "h0810",
    //   day: "jeudi",
    //   showInfo: "none",
    // },
    {
      id: "PHYSF517",
      name: "How To Make (almost) Any Experiment...",
      location: "Fablab",
      teacher: "TERWAGNE Denis",
      type: "Théorie",
      time: "h10301230",
      day: "jeudi",
      showInfo: "none",
    },
    {
      id: "PHYSF517",
      name: "How To Make (almost) Any Experiment...",
      location: "Fablab",
      teacher: "TERWAGNE Denis",
      type: "Travaux pratiques",
      time: "h13301530",
      day: "jeudi",
      showInfo: "none",
    },
    {
      id: "INFOH512",
      name: "Current trends in artificial intelligence",
      // location: "S.C5.IRIDIA",
      location: "distanciel",
      teacher: "BERSINI Hugues",
      type: "Théorie",
      time: "h13301530",
      day: "vendredi",
      showInfo: "none",
    },
    {
      id: "INFOH410",
      name: "Techniques of artificial intelligence",
      location: "distanciel",
      teacher: "BERSINI Hugues",
      type: "Travaux pratiques",
      time: "h1618",
      day: "vendredi",
      showInfo: "content",
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
        <Course course={course} />
      ))}
    </div>
  );
}
