import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEmploye() {
  const navigatior = useNavigate();

  const url = "http://localhost:8080/hr-app/employees";

  const { id } = useParams();

  const [employee, addEmployee] = useState({
    name: "",
    department: "",
    salary: 0,
  });

  const { name, department, salary } = employee;

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get(`${url}/${id}`);
    addEmployee(result.data);
  };

  const onInputChange = (e) => {
    addEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`${url}/${id}`, employee);

    navigatior("/");
  };
  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header bg-info">
          <h2>Edit Employee</h2>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required={true}
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <input
                type="text"
                name="department"
                className="form-control"
                id="department"
                required={true}
                value={department}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="salary" className="form-label">
                Salary
              </label>
              <input
                step="any"
                type="number"
                name="salary"
                className="form-control"
                id="salary"
                required={true}
                value={salary}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="card-footer text-center bg-infosubtutle">
              <div className="btn-group">
                <Link className="btn btn-warning" to="/">
                  Back
                </Link>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
