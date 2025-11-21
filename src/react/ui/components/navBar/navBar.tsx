import { Box, Link } from "@mui/material";
import { Link as ReactRouterLink } from 'react-router-dom';
import styles from "./navBar.styles";

interface NavLinkProps {
  href: string,
  label: string,
}


const NavLink = ({href, label} : NavLinkProps) => {
  return (
    <Box component="li" sx={styles.navItem}>
      <Link component={ReactRouterLink} to={href} >{label}</Link>
    </Box>
  );
};

const NavBar = () => {
  const navList = [
    {
      href: "/main_window",
      label: "Home"
    },
    {
      href: "lunar_phase",
      label: "Lunar Phase", 
    },
    {
      href: "lunar_visibility",
      label: "Lunar Visibility",
    }
  ];

  return (
    <Box component="ul" sx={styles.navBar}>
        { navList.map((item, index) => <NavLink href={item.href} label={item.label} key={index} />)}
    </Box>
  )
};

export default NavBar;