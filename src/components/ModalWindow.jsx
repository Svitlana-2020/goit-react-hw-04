import Modal from "react-modal";
import css from "./ModalWindow.module.css";

Modal.setAppElement("#root");

export default function ModalWindow({
  isOpen,
  isClosed,
  src,
  alt_description,
  onClick,
}) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClosed}
      className={css.modal}
      style={customStyles}
    >
      <img
        className={css.img}
        src={src}
        alt={alt_description}
        onClick={onClick}
      />
    </Modal>
  );
}