import React, { useState } from "react";
import styles from "./FavoriteUser.module.css";

import { useFavorites } from "../../context/FavoritesContext";

import { Names } from "../";

import { Link } from "react-router-dom";

import { Modal, DeleteConfirmationModal } from "../";

function FavoriteUSer({ user }) {
  const { login, name, avatar_url, html_url } = user;
  const [showModal, toggleModal] = useState(false);

  const { removeFromFavorites } = useFavorites();

  return (
    <div className={styles.item}>
      <div className={styles.profile}>
        <img src={avatar_url} alt="User Avatar" className={styles.img} />
        <Names login={login} name={name} url={html_url} />

        <div>
          <Link to={`/user/${login}`} className={styles.seeMore}>
            View more
          </Link>
        </div>
      </div>

      <button className={styles.button} onClick={() => toggleModal(true)}>
        x
      </button>

      {showModal && (
        <Modal>
          <DeleteConfirmationModal
            toggleModal={toggleModal}
            removeFromFavorites={removeFromFavorites}
            login={login}
          />
        </Modal>
      )}
    </div>
  );
}

export default FavoriteUSer;
