import styles from "./index.module.scss";

const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.overlay}>
        <button type="button" onClick={onClose} className={styles["icon-cont"]}>
          <span className={`material-icons ${styles.icon}`}>close</span>
        </button>
        {children}
      </div>
    </>
  );
};

export default Modal;
