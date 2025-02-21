import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [employee, setEmployee] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const navigate = useNavigate();

  const { name, mobile, email } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/employee", employee);
    navigate("/");
  };

  return (
    <div className="container ">
      <h1 className="text-center my-5">Add-Employee Form</h1>
      <div
        className="mb-3 border p-4 m-auto shadow-lg rounded-4"
        style={{ width: "30%" }}
      >
        <form onSubmit={(e) => onSubmit(e)}>
          <label htmlFor="name" className="form-label fw-bold">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
          <div className="my-4">
            <label htmlFor="mobile" className="form-label fw-bold">
              Mobile
            </label>
            <input
              type="tel"
              name="mobile"
              className="form-control"
              id="mobile"
              placeholder="Enter your mobile"
              value={mobile}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="my-4">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="d-flex gap-3 justify-content-center align-align-items-center">
            <button className="btn btn-outline-success">Submit</button>
            <Link to="/" className="btn btn-outline-danger">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
