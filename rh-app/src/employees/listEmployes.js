import axios from "axios";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

export default function ListEmployees() {
  const urlBase = "http://localhost:8080/hr-app/employees";

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const result = await axios.get(urlBase);
    console.log(result.data);
    setEmployees(result.data);
  };

  return (
    <div className="container">
      <div className="container text-center m-5">
        <h1>ListEmployees</h1>
      </div>
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            return (
              <tr>
                <th key={index}>{employee.idEmployee}</th>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>
                  <NumericFormat
                    value={employee.salary}
                    displayType="text"
                    thousandSeparator=","
                    prefix="$"
                    decimalScale={2}
                    fixedDecimalScale
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
