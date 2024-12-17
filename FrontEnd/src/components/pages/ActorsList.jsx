import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import styles from "./ActorList.Styles";
import ActorService from "../../service/Actor.service";
import Loader from "../loader/Loader";
import CustomEditModal from "../customModals/CustomEditModal";
import CustomDeleteModal from "../customModals/CustomDeleteModal";

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

  const columns = [
    { field: "id", headerName: "ID", minWidth: 100 },
    {
      field: "firstName",
      headerName: "Nombre",
      minWidth: 200,
    },
    {
      field: "lastName",
      headerName: "Apellido",
      minWidth: 200,
    },
    {
      field: "lastUpdate",
      headerName: "Ultima actualización",
      minWidth: 250,
      valueFormatter: (value) => {
        const date = new Date(value);
        return isNaN(date.getTime())
          ? "Fecha inválida"
          : new Intl.DateTimeFormat("es-ES", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            }).format(date);
      },
    },
    {
      field: "actions",
      headerName: "Acciones",
      flex: 1,
      maxWidth: 300,
      minWidth: 300,
      width: "40%",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <CustomEditModal
            handleClick={() => handleEdit(params.row.id)}
            actorToEdit={actorToEdit}
            handleActorToEdit={() => setActorToEdit(emptyActor)}
          />
          <CustomDeleteModal
            handleClick={() => handleDelete(params.row.id)}
            actorToDelete={actorToDelete}
            deleteActor={handleDeleteActor}
          />
        </div>
      ),
    },
    {
      disableColumnMenu: true,
      sortable: false,
      flex: 1, // Usamos flex para que ocupe el espacio sobrante
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
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      }
      getActors();
    }
  }, [actorToEdit, actorToDelete]);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2>Lista de Actores</h2>
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h3>Gestión de Actores</h3>
        <CustomEditModal handleClick={() => {}} />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Paper sx={{ height: "70vh", width: "100%" }}>
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
      <footer style={styles.footer}>© 2024 - Actor Management System</footer>
    </div>
  );
};

export default ActorsList;
