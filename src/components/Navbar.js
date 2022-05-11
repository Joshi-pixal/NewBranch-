import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/RQSuperHeroesPage">RQSuperHeroesPage</Link>
        </li>
        <li>
          <Link to="/SuperHeroes">RQSuperHeroes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar