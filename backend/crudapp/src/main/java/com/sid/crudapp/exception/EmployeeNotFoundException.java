package com.sid.crudapp.exception;


public class EmployeeNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public EmployeeNotFoundException(int id) {
		super( "Could not found employee with id" + id);
	}

}
