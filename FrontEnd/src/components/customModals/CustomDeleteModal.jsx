import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import PropTypes from "prop-types";

const styles = {
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  deleteButton: {
    backgroundColor: "rgba(255, 0, 0, 0.7)", // Rojo para eliminar
    color: "white",
    padding: "8px 16px",
    borderRadius: "5px",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "rgba(255, 0, 0, 0.9)", // Hover más intenso
      transition: "background-color 0.3s ease-in-out",
    },
  },
  acceptButton: {
    backgroundColor: "rgba(0, 123, 255, 0.7)", // Azul para confirmar
    color: "white",
    padding: "8px 16px",
    borderRadius: "5px",
    fontSize: "14px",
    marginRight: "10px",
    "&:hover": {
      backgroundColor: "rgba(0, 123, 255, 0.9)", // Hover más fuerte
      transition: "background-color 0.3s ease-in-out",
    },
  },
  cancelButton: {
    backgroundColor: "rgba(169, 169, 169, 0.7)", // Gris para cancelar
    color: "white",
    padding: "8px 16px",
    borderRadius: "5px",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "rgba(169, 169, 169, 0.9)", // Hover más fuerte
      transition: "background-color 0.3s ease-in-out",
    },
  },
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
      <Button sx={styles.deleteButton} onClick={handleOpen}>
        Eliminar
      </Button>
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
          <Box sx={styles.modalBox}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              ¿Está seguro de que desea eliminar al actor? Esta acción es
              definitiva y no se podrá revertir.
            </Typography>
            <p>ID: {actorToDelete.id}</p>
            <p>Nombre: {actorToDelete.firstName}</p>
            <p>Apellido: {actorToDelete.lastName}</p>
            <div>
              <Button sx={styles.acceptButton} onClick={handleDelete}>
                Aceptar
              </Button>
              <Button sx={styles.cancelButton} onClick={handleClose}>
                Cancelar
              </Button>
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
