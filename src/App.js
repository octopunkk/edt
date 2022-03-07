import "./App.css";
import { Grid } from "./Grid";

// let getCourses = async () => {
//   const response = await fetch(
//     `https://cloud.timeedit.net/be_ulb/web/public/ri166XQQ676Z50Qv7900QgZ6y6Y060Y97Y7.html`
//   ).then((response) => console.log(response.json()));
//   // const json = await response.json().then(console.log(json));
// };
// // getCourses();

// let getWeather = async () => {
//   await fetch(
//     `https://api.openweathermap.org/data/2.5/onecall?lat=50.82&lon=4.39&appid=${API_key}`
//   ).then((response) => console.log(response.json()));
// };

// getWeather();
// getCourses();
function App() {
  return (
    <div className="App">
      <Grid />
      Mis à jour : lundi 07/03
    </div>
  );
}

export default App;
