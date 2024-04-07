import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope , faMobile} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

    const { loading, error, dispatch } = useContext(AuthContext);

 //the user will be save in all the pages
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:8000/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details }); 
      navigate("/")
    } catch (err) {
      toast.error("Wrong password or userName !")
      // dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
    }
  };


  return (
    <div className="login">
      <header>
        <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
        <h2>Booking</h2>
        </Link>
      </header>
      <ToastContainer />
      <h3 className="signText">Sign in or create an account</h3>
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="loginInput"
          
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="loginInput"
          
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        <div className="rrtext">
         <Link to={'/registre'}>create account</Link>
        </div>
        {error && <span>{error.message}</span>}
        <p  className="logindesc">ou choisissez l'une de ces options</p>
        <div className="icon">
        <FontAwesomeIcon className="g-icon" icon={faEnvelope} />
        <FontAwesomeIcon className="m-icon" icon={faMobile} />
        </div>
        <div className="contact">
        <p className="logindesc">+216 74120 896</p>
        </div>
        <div className="ft">
        <p className="logindesc">By signing in or creating an account, you agree with our Terms & Conditions and Privacy Statement</p>
        <p className="cr">All rights reserved.
          Copyright – Booking.com™</p>
          </div>
      </div>
    </div>
  );
};

export default Login;