import { useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import TutorialService from "../../service/tutorial.service";
import Loader from "../loader/Loader";
import { Button } from "@mui/material";

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
      width: 180,
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
        <>
          <Button onClick={() => handleEdit(params.row.id)} color="primary">
            <p>Editar</p>
          </Button>
          <Button onClick={() => handleDelete(params.row.id)} color="secondary">
            <p>Eliminar</p>
          </Button>
        </>
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
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      )}
      {error && <p>Pasaron rollos</p>}
    </div>
  );
};

ActorsList.propTypes = {};

export default ActorsList;
