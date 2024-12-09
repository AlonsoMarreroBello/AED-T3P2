import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CustomDeleteModal({
  actorToDelete,
  handleClick,
  deleteActor,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log(actorToDelete);
    handleClick();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    deleteActor(actorToDelete.id);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Eliminar</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              ¿Está seguro de que desea eliminar al actor ? Esta accion es
              definitiva y no se podra revertir.
            </Typography>
            <p>ID: {actorToDelete.id}</p>
            <p>Nombre: {actorToDelete.firstName}</p>
            <p>Apellido: {actorToDelete.lastName}</p>
            <div>
              <button onClick={handleDelete}>Aceptar</button>
              <button onClick={handleClose}>Cancelar</button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

CustomDeleteModal.propTypes = {
  actorToDelete: PropTypes.object,
  handleClick: PropTypes.func,
  deleteActor: PropTypes.func,
};
