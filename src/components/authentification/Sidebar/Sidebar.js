import { BiBookContent } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import "./sidebar.css";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/api/auth/signout");
      localStorage.removeItem("_appSignging")
      dispatch({ type: "SIGNOUT"})
      navigate('/login')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>

    </>
  );
};

export default Sidebar;
