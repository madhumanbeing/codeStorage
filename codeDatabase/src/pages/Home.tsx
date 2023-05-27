import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import "../components/header/header.css";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="inner">
        <Header />
        <Nav />
      </div>
    </div>
  );
};

export default Home;
