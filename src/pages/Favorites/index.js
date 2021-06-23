import { useFavorites } from "../../context/FavoritesContext";

import { FavoriteUser } from "../../components";

import styles from "./Favorites.module.css";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <>
      {favorites.length === 0 ? (
        <div className={styles.notFoundWrapper}>
          <p>You have not favorite users. Please, add and check page again. </p>
        </div>
      ) : (
        <section className={styles.container}>
          <h1 className={styles.heading}>Favorite Users</h1>
          <div className={styles.favoritesList}>
            {favorites.map((item) => (
              <FavoriteUser user={item} key={item.login} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Favorites;
