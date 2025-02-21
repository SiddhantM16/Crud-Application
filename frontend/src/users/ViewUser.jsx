import { Link, useParams } from "react-router-dom";
import "./ViewUser.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ViewUser = () => {
  const [employees, setEmployees] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/employee/${id}`);
    setEmployees(result.data);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <h1 className="text-center mt-4">Employee Detail - {employees.id}</h1>
      <div className="card">
        <p className="card__name">Name: {employees.name}</p>
        <p className="card__name">Email: {employees.email}</p>
        <p className="card__name">Mobile: {employees.mobile}</p>
        <Link to={"/"} className="btn draw-border">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default ViewUser;
