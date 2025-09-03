import { css } from '@emotion/react'
import { Outlet } from "react-router-dom";
import { theme } from "../styles/theme";
import NavBar from "./navBar/navBar";

const menuItem = css`
  background-color: ${theme.background};
  color: ${theme.secondary};

`;

const Layout = () => {
  return (
    <>
      <NavBar /> 

      <Outlet />
    </>
  )
};



export default Layout;
