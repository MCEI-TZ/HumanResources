import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./common/Navigation";
import ListEmployees from "./employees/listEmployes";
import AddEmployee from "./employees/AddEmploye";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<ListEmployees />} />
          <Route exact path="/addEmployee" element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
