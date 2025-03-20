import Navigation from "./common/Navigation";
import ListEmployees from "./employees/listEmployes";


function App() {
  return (
    <div className="container">
      <Navigation/>
      <ListEmployees/>
    </div>
  );
}

export default App;
