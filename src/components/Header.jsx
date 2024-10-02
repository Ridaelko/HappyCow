import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/Home">
        <img src="../src/assets/logo.png" alt="logo" />
      </Link>
      <div className="button">
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
