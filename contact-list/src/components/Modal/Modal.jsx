import styles from "../Modal/modal.module.scss"

export const Modal = ({ image, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <img src={image} />
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
};
