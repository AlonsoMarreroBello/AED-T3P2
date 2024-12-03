import { useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import styles from "./ActorList.Styles";
import TutorialService from "../../service/tutorial.service";
import Loader from "../loader/Loader";
import { Button } from "@mui/material";
import CustomEditModal from "../customModals/CustomEditModal";
import CustomDeleteModal from "../customModals/CustomDeleteModel";

const paginationModel = { page: 0, pageSize: 10 };

const ActorsList = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "firstName", headerName: "First name", width: 180 },
    { field: "lastName", headerName: "Last name", width: 180 },
    {
      field: "lastUpdate",
      headerName: "Last update",
      width: 220,
      valueFormatter: (value) => {
        // Verificar si el valor es válido antes de crear un objeto Date
        const date = new Date(value);

        if (isNaN(date.getTime())) {
          // Si el valor no es una fecha válida, devolver una cadena vacía o un valor predeterminado
          return "Fecha inválida";
        }

        const options = {
          weekday: "long", // Día de la semana completo (ej. Lunes)
          day: "numeric", // Día del mes (ej. 2)
          month: "long", // Mes completo (ej. diciembre)
          year: "numeric", // Añadir el año (ej. 2024)
        };

        // Formatear la fecha
        const formatedDate = new Intl.DateTimeFormat("es-ES", options).format(
          date
        );
        return formatedDate;
      },
    },
    {
      field: "actions",
      headerName: "",
      flex: 1, // Expande esta columna para ocupar el espacio libre
      minWidth: 200, // Define un ancho mínimo
      disableColumnMenu: true,
      sortable: false,
      hideable: false,
      renderCell: (params) => (
        <div>
          <Button onClick={() => handleEdit(params.row.id)} color="primary">
            <CustomEditModal />
          </Button>
          <Button onClick={() => handleDelete(params.row.id)} color="secondary">
            <CustomDeleteModal />
          </Button>
        </div>
      ),
    },
  ];

  const handleEdit = (id) => {
    console.log("Edit:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete:", id);
  };

  useEffect(() => {
    setLoading(true);
    async function getActors() {
      try {
        const data = await TutorialService.aGetAll();
        console.log("data acotrlist", data);
        setActors(data);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    getActors();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 2,
        }}
      >
        <h2>Lista de actores</h2>
        <Button
          size="small"
          sx={{
            height: "fit-content",
            padding: 1,
          }}
          variant="outlined"
          href="http://localhost:5173/actors/new"
        >
          Añadir actor
        </Button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Paper sx={{ height: screen.height * 0.6, width: "100%" }}>
          <DataGrid
            rows={actors}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10, 50, 100]}
            disableRowSelectionOnClick
            sx={styles.dataGrid}
          />
        </Paper>
      )}
      {error && <p>Pasaron rollos</p>}
    </div>
  );
};

ActorsList.propTypes = {};

export default ActorsList;
