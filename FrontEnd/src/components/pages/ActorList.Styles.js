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
      color: "rgba(0, 0, 0, 0.87)", // Color de texto
      backgroundColor: "#00000044", // Color de fondo de las celdas
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    // Estilo para la cabecera de las columnas
    "& .MuiDataGrid-columnHeader": {
      backgroundColor: "#000000AA", // Color de fondo de la cabecera
      color: "rgba(224, 224, 224, 1)", // Color del texto de la cabecera
      fontWeight: "bold", // Fuente en negrita
      fontSize: "16px", // Tamaño de la fuente
    },
    // Estilo para las filas
    "& .MuiDataGrid-row": {
      "&:hover": {
        backgroundColor: "#00000011", // Color de fondo al pasar el mouse sobre la fila
      },
    },
  },
};

export default styles;
