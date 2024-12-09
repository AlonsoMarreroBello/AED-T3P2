import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { useState } from "react";
import ActorForm from "../pages/ActorForm";
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

export default function CustomEditModal({
  handleClick,
  actorToEdit,
  handleActorToEdit,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    handleClick();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    handleActorToEdit();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Editar</Button>
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
            <ActorForm actorData={actorToEdit} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

CustomEditModal.propTypes = {
  handleClick: PropTypes.func,
  actorToEdit: PropTypes.object,
  handleActorToEdit: PropTypes.func,
};
