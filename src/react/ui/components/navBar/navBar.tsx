import { Box, Link } from "@mui/material";
import { Link as ReactRouterLink } from 'react-router-dom';
import styles from "./navBar.styles";
import { useNavBarViewModel } from "./navBarViewModel";

interface NavItem {
  href: string,
  label: string,
}

interface NavLinkProps {
  click: Function,
  currentSelected: number,
  index: number,
  info: NavItem,
}


const NavLink = ({info, click, index, currentSelected } : NavLinkProps) => {
  const {href, label } = info;
  return (
    <Box component="li" sx={styles.navList} className={ currentSelected === index ? "selected" : ""} >
      <Link 
        sx={styles.navItem}
        component={ReactRouterLink}
        to={href}
        onClick={() => click(index)}
        underline="hover"
      >
        {label}
      </Link>
    </Box>
  );
};

const NavBar = () => {
  const { navList, setSelected, currentSelected } = useNavBarViewModel();

  return (
    <Box component="ul" sx={styles.navBar} >
        { navList.map((item, index) => <NavLink info={item} key={index} index={index} click={setSelected} currentSelected={currentSelected} />)}
    </Box>
  )
};

export default NavBar;