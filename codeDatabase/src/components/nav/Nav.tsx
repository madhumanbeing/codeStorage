import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/jsmethods">JS methods</Link>
        </li>
        <li>
          <Link to="/csstricks">Css tricks</Link>
        </li>
        <li>
          <Link to="/github">Github</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
