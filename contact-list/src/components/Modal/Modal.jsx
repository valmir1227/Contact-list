import Image from "next/image";
import styles from "../Modal/modal.module.scss";
import { MdClose } from "react-icons/md";

export const Modal = ({ image, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <Image src={image} alt="image" width={1920} height={1080} />
        <MdClose onClick={onClose} />
      </div>
    </div>
  );
};
