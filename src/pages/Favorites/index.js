import { useFavorites } from "../../context/FavoritesContext";

import { FavoriteUser } from "../../components";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <section>
      <h1>
        <span className="favorites-icon"></span>
        Favorite Users
      </h1>
      <div className="favorites-list">
        {favorites.map((item) => (
          <FavoriteUser user={item} />
        ))}
      </div>
    </section>
  );
}

export default Favorites;
