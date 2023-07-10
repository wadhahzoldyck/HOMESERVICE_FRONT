import {useParams} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./activatelayout.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ActivateLayout = ({ history }) => {
  const { activation_tokenP } = useParams();

  useEffect(() => {
    //check token
    if (activation_tokenP) {
      const activateUser = async () => {
        try {
          const res = await axios.post("/api/auth/activationp", {
            activation_tokenP,
          });
          toast(res.data.msg, {
            className: "toast-success",
            bodyClassName: "toast-sucess",
          });
        } catch (err) {
          toast.error(err.response.data.msg, {
            className: "toast-failed",
            bodyClassName: "toast-failed",
          });
        }
      };
      activateUser();
    }
  }, [activation_tokenP]);

  const handleClick = () => {
    history.push("/login");
  };

  const navigate= useNavigate()

  return (
    <div className="activate">
      <ToastContainer />
      <p>
        Votre compte a été activé <span onClick={() => navigate('/login')}> Login </span>
      </p>
    </div>
  );
};

export default ActivateLayout;
