package com.sid.crudapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sid.crudapp.entity.Employee;
import com.sid.crudapp.service.EmployeeService;

@RestController
@CrossOrigin("http://localhost:5173")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@GetMapping(path = "/employee")
	public List<Employee> getEmployees() {
		List<Employee> employees = employeeService.getEmployees();
		return employees;
	}

	@PostMapping(path = "/employee")
	public ResponseEntity<Object> addEmployee(@RequestBody Employee employee) {
		Employee employeeAdded = employeeService.addEmployee(employee);
		if (employeeAdded != null) {
			return new ResponseEntity<Object>(employeeAdded, HttpStatus.CREATED);
		} else
			return new ResponseEntity<Object>("Employee not added", HttpStatus.NOT_IMPLEMENTED);
	}
	
	@GetMapping(path="/employee/{id}")
	public Employee getEmployeeById(@PathVariable int id) {
		return employeeService.getEmployeeById(id);
	}
	
	@PutMapping(path = "/employee/{id}")
	public Employee updateEmployee(@RequestBody Employee newEmployee, @PathVariable int id) {
		return employeeService.updateEmployee(newEmployee, id);
	}

	@DeleteMapping(path = "/employee/{id}")
	public String deleteEmployee(@PathVariable int id) {
		return employeeService.deleteEmployee(id);
	}
}


