import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CustomDrawer from "../layout/Drawer";

const styles = {
  appBar: {
    backgroundColor: "#333", // Fondo oscuro para la barra de navegación
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Sombra sutil
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: "0 16px", // Espaciado interno
  },
  title: {
    flexGrow: 1,
    fontSize: "1.5rem", // Tamaño del texto
    fontWeight: "bold",
    color: "#fff", // Color del texto
  },
};

const NavBar = ({ text }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <CustomDrawer />
          <Typography variant="h6" component="div" sx={styles.title}>
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
