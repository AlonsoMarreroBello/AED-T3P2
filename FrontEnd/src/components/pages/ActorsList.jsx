import { useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import styles from "./ActorList.Styles";
import ActorService from "../../service/Actor.service";
import Loader from "../loader/Loader";
import { Button } from "@mui/material";
import CustomEditModal from "../customModals/CustomEditModal";
import CustomDeleteModal from "../customModals/CustomDeleteModel";

const paginationModel = { page: 0, pageSize: 10 };

const emptyActor = {
  id: 0,
  firstName: "",
  lastName: "",
  lastUpdate: "",
};

const ActorsList = () => {
  const [actors, setActors] = useState([]);
  const [actorToEdit, setActorToEdit] = useState(emptyActor);
  const [actorToDelete, setActorToDelete] = useState(emptyActor);
  const [loading, setLoading] = useState(true);
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
        <div style={{ display: "flex" }}>
          <CustomEditModal
            handleClick={() => handleEdit(params.row.id)}
            actorToEdit={actorToEdit}
            handleActorToEdit={() => setActorToEdit(emptyActor)}
          />
          <Button color="secondary">
            <CustomDeleteModal
              handleClick={() => handleDelete(params.row.id)}
              actorToDelete={actorToDelete}
              deleteActor={handleDeleteActor}
            />
          </Button>
        </div>
      ),
    },
  ];

  const handleEdit = (id) => {
    const actor = actors.find((actor) => actor.id === id);
    setActorToEdit(actor);
  };

  const handleDelete = (id) => {
    const actor = actors.find((actor) => actor.id === id);
    setActorToDelete(actor);
  };

  const handleDeleteActor = (id) => {
    ActorService.aDelete(id);
    setActorToDelete(emptyActor);
  };

  useEffect(() => {
    if (actorToEdit === emptyActor && actorToDelete === emptyActor) {
      async function getActors() {
        try {
          const data = await ActorService.aGetAll();
          setActors(data);
          setError(null);
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      }
      getActors();
    }
  }, [actorToEdit, actorToDelete]);

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
