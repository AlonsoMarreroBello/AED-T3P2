import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

const styles = {
  iconButton: {
    color: "#fff", // Color blanco para el icono
    marginRight: 2, // Separación del icono respecto al resto
  },
  drawer: {
    width: 250, // Ancho del menú desplegable
    backgroundColor: "#f5f5f5", // Fondo claro para el cajón
    height: "100%", // Ocupa toda la altura del viewport
  },
  listItem: {
    padding: "10px 16px", // Espaciado interno de los elementos
    color: "#333", // Color del texto
    textDecoration: "none", // Elimina el subrayado de los enlaces
    "&:hover": {
      backgroundColor: "#ddd", // Fondo gris al pasar el ratón
    },
  },
};

export default function CustomDrawer() {
  const [open, setOpen] = useState(false);

  const routes = ["/", "/actors"];

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={styles.drawer} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Home", "Actors"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <a href={routes[index]} style={styles.listItem}>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        aria-label="menu"
        sx={styles.iconButton}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
