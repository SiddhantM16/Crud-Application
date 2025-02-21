package com.sid.crudapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sid.crudapp.entity.Employee;
import com.sid.crudapp.exception.EmployeeNotFoundException;
import com.sid.crudapp.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	public Employee addEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}

	public List<Employee> getEmployees() {
		List<Employee> employees = employeeRepository.findAll();
		return employees;
	}

	public Employee updateEmployee(Employee newEmployee, int id) {
		return employeeRepository.findById(id).map(employee -> {
			employee.setName(newEmployee.getName());
			employee.setMobile(newEmployee.getMobile());
			employee.setEmail(newEmployee.getEmail());
			return employeeRepository.save(employee);
		}).orElseThrow(() -> new EmployeeNotFoundException(id));
	}

	public Employee getEmployeeById(int id) {
		return employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException(id));
	}

	public String deleteEmployee(int id) {
		if(!employeeRepository.existsById(id)) {
			throw new EmployeeNotFoundException(id);
		}
		employeeRepository.deleteById(id);
		return "Employee with id " + id + " is deleted";
		
	}

}
