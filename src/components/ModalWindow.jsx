import Modal from 'react-modal';
import css from './ModalWindow.module.css'

Modal.setAppElement("#root");

export default function ModalWindow({isOpen, isClosed, src, alt_description, onClick}) {
  
    return (
   
        <Modal
          isOpen={isOpen}
          onRequestClose={isClosed}
          className={css.modal}
          overlayClassName={css.overlay} 
        >
          <img className={css.img} src={src} alt={alt_description} onClick={onClick}/>
        </Modal>
    );
  }
