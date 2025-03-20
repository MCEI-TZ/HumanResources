import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./common/Navigation";
import ListEmployees from "./employees/listEmployes";
import AddEmployee from "./employees/AddEmploye";
import EditEmploye from "./employees/EditEmploye";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<ListEmployees />} />
          <Route exact path="/addEmployee" element={<AddEmployee />} />
          <Route exact path="/editEmployee/:id" element={<EditEmploye />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
