import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/main_window">Home</Link>
          </li>
          <li>
            <Link to="/main_window/animals">Animals</Link>
          </li>
          <li>
            <Link to="/main_window/locations">Locations</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
