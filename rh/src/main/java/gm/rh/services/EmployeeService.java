package gm.rh.services;

import gm.rh.models.Employee;
import gm.rh.repository.IEmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EmployeeService implements IEmployeeService {

    @Autowired
    private IEmployeeRepo employeeRepo;


    @Override
    public List<Employee> listEmployees() {
        return employeeRepo.findAll();
    }

    @Override
    @Transactional
    public void saveEmployee(Employee employee) {
        employeeRepo.save(employee);
    }

    @Override
    public Employee getEmployeeById(Long idEmployee) {
        return employeeRepo.findById(idEmployee).orElse(null);
    }

    @Override
    @Transactional
    public void deleteEmployee(Long idEmployee) {
        employeeRepo.deleteById(idEmployee);
    }
}
