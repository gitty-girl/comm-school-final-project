import styles from "./ToggleFavoriteButton.module.css";

import { useFavorites } from "../../context/FavoritesContext";

function ToggleFavoriteButton({ user }) {
  const { isFavorite, removeFromFavorites, addTofavorites } = useFavorites();

  const { login, avatar_url, html_url, name } = user;
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
                login,
                avatar_url,
                name,
                html_url,
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
