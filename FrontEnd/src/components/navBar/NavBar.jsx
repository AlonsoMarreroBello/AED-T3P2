import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CustomDrawer from "../layout/Drawer";

const NavBar = ({ text }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CustomDrawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {text}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

NavBar.propTypes = {
  text: PropTypes.string,
};

export default NavBar;
