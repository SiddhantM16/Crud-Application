import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-employee" element={<AddUser />} />
          <Route exact path="/edit-employee/:id" element={<EditUser />} />
          <Route exact path="/view-employee/:id" element={<ViewUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
