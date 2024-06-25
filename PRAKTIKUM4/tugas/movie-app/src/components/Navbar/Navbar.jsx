import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  /* Small Screen */
  background-color: #749fac;
  padding: 2rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navbar__brand {
    font-size: 2.4rem;
    margin: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
  }

  li a {
    color: #fff;
    text-decoration: none;
  }

  /* Medium Screen */
  @media screen and (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .navbar__brand {
      margin-bottom: 0;
    }

    ul {
      flex-direction: row;
    }

    li {
      margin: 0 1rem;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <h2 className="navbar__brand">Movie App</h2>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movie/create">Add Movie</Link>
          </li>
          <li>
            <Link to="/movie/popular">Popular</Link>
          </li>
          <li>
            <Link to="/movie/now">Now Playing</Link>
          </li>
          <li>
            <Link to="/movie/top">Top Rated</Link>
          </li>
        </ul>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
