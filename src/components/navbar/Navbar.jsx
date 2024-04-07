import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/login");
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handelLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
    };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking.App</span>
        </Link>

        {user && localStorage.getItem("user") ? (
          <div className="User">
            <Link to="/login" className="UserName">
              {user.username}{" "}
            </Link>
            <div className="dropdown">
              <FontAwesomeIcon icon={faCaretDown} onClick={handleToggle} />
              {isOpen && (
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={handelLogout}>
                    Logout{" "}
                  </button>
                </div>
              )}
            </div>
            {user.img ? (
              <div>
                <img src={user.img} alt="img" className="userImg" />
              </div>
            ) : (
              <div>
                <img
                  src="https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                  alt="img"
                  className="userImg"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="navItems">
            <Link to="/registre">
              <button className="navButton">Register</button>
            </Link>
            <button className="navButton" onClick={handelClick}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
