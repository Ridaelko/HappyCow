import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img src="../src/assets/logo-home.png" alt="logo" />
      <Link to="/restaurants">
        {" "}
        <p>Découvrez nos restaurants</p>
      </Link>
    </div>
  );
};

export default Home;
