import styles from "./ToggleFavoriteButton.module.css";

import { useFavorites } from "../../context/FavoritesContext";

function ToggleFavoriteButton({ user }) {
  const { isFavorite, removeFromFavorites, addTofavorites } = useFavorites();

  const { login, avatar_url } = user;
  return (
    <div>
      <div>
        {isFavorite(login) ? (
          <button onClick={() => removeFromFavorites(login)}>
            Remove from favorites
          </button>
        ) : (
          <button
            onClick={() =>
              addTofavorites({
                login: login,
                avatar_url: avatar_url,
              })
            }
          >
            Add to favorites
          </button>
        )}
      </div>
    </div>
  );
}

export default ToggleFavoriteButton;
