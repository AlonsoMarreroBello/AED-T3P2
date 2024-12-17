import { Button } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh", // Para ocupar toda la altura de la pantalla
    backgroundColor: "#fafafa", // Fondo suave para la página
    padding: "20px",
  },
  title: {
    fontSize: "2rem", // Tamaño de fuente mayor para el título
    fontWeight: "bold",
    color: "#333", // Color oscuro para buen contraste
    marginBottom: "20px", // Espacio debajo del título
  },
  button: {
    backgroundColor: "#007BFF", // Fondo azul para el botón
    color: "#fff", // Texto blanco
    textDecoration: "none", // Sin subrayado en el enlace
    "&:hover": {
      backgroundColor: "#0056b3", // Fondo más oscuro al pasar el ratón
    },
  },
};

const Home = () => {
  const link = "http://localhost:5173/actors";
  const target = "_self";

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CRUD T3 P2</h1>
      <Button sx={styles.button}>
        <a href={link} target={target} style={styles.button}>
          Listado de actores
        </a>
      </Button>
    </div>
  );
};

export default Home;
