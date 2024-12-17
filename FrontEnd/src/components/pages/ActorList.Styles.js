const styles = {
  dataGrid: {
    border: 0,
    "& .MuiDataGrid-cell:focus": {
      outline: "none", // Elimina el borde de enfoque
      boxShadow: "none", // Elimina cualquier sombra que se añada al hacer foco
    },
    // Estilo para las celdas
    "& .MuiDataGrid-cell": {
      padding: "10px",
      fontSize: "14px", // Tamaño de fuente de las celdas
      color: "#ffffff", // Texto blanco para mejor contraste
      backgroundColor: "rgba(0, 0, 0, 0.6)", // Fondo más oscuro
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)", // Separación entre celdas
    },
    // Estilo para la cabecera de las columnas
    "& .MuiDataGrid-columnHeader": {
      backgroundColor: "rgba(78, 77, 77, 0.9)", // Fondo más oscuro para la cabecera
      color: "#E0E0E0", // Color del texto de la cabecera
      fontWeight: "bold", // Fuente en negrita
      fontSize: "16px", // Tamaño de la fuente
      textTransform: "uppercase", // Mayúsculas para un estilo moderno
      borderBottom: "2px solid rgba(255, 255, 255, 0.2)", // Línea inferior
    },
    // Estilo para las filas
    "& .MuiDataGrid-row": {
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Fondo translúcido al pasar el mouse
        transition: "background-color 0.2s ease-in-out", // Transición suave
      },
      "&:nth-of-type(odd)": {
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo alternado para filas impares
      },
      "&:nth-of-type(even)": {
        backgroundColor: "rgba(0, 0, 0, 0.4)", // Fondo alternado para filas pares
      },
    },
  },
  // Otros estilos globales
  header: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    padding: "20px",
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  footer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: "10px 20px",
    color: "#ffffff",
    textAlign: "center",
    fontSize: "14px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#ffffff",
    padding: "10px 15px",
    borderRadius: "5px",
    fontSize: "14px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transition: "background-color 0.2s ease-in-out",
    },
  },
  container: {
    margin: "0 auto",
    maxWidth: "80%",
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: "10px",
  },
};

export default styles;
