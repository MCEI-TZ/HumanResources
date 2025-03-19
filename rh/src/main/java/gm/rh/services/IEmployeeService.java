package gm.rh.services;

import gm.rh.models.Employee;

import java.util.List;

public interface IEmployeeService {
    public List<Employee> listEmployees();

    public void saveEmployee(Employee employee);

    public Employee getEmployeeById(Long idEmployee);

    public void deleteEmployee(Long idEmployee);
}
