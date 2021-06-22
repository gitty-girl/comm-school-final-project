import styles from "./DeleteConfirmationModal.module.css";

function DeleteConfirmationModal({ toggleModal, removeFromFavorites, login }) {
  return (
    <div className={styles.modalBody}>
      <div className={styles.messageWrapper}>
        <p className={styles.message}>Are you sure you want to delete item?</p>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() => removeFromFavorites(login)}
          className={styles.danger}
        >
          Delete
        </button>
        <button onClick={() => toggleModal(false)} className={styles.primary}>
          Back
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
