import axios from "axios";
import { useState } from "react";

import { useEffect } from "react";
import { FaEdit, FaEye, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  // const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = (await axios.get("http://localhost:8080/employee")).data;
    setEmployees(result);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/employee/${id}`);
    loadUsers();
  };

  return (
    <div className="container my-5">
      <table className="table table-striped border shadow">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.mobile}</td>
                <td>{employee.email}</td>
                <td>
                  <div className="d-flex align-items-center gap-4">
                    <Link to={`/view-employee/${employee.id}`}>
                      <FaEye
                        className="text-warning"
                        style={{ cursor: "pointer" }}
                      />
                    </Link>
                    <Link to={`/edit-employee/${employee.id}`}>
                      <FaEdit className="text-success" />
                    </Link>
                    <FaRegTrashAlt
                      className="text-danger "
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteUser(employee.id)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
