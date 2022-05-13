import "./App.css";
import { Exams } from "./Exams";
import { Grid } from "./Grid";
import { Weather } from "./Weather";

function App() {
  return (
    <div className="App">
      <Grid />
      <Exams />
      <br />
      <Weather />
      Mis à jour : vendredi 13/05
      <br />
    </div>
  );
}

export default App;
