import { useFavorites } from "../../context/FavoritesContext";

function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();

  console.log(favorites);

  return (
    <section>
      <h1>
        <span className="favorites-icon"></span>
        Favorite Users
      </h1>
      <div className="favorites-list">
        {favorites.map((item) => (
          <div className="favorites-item" key={item.login}>
            <div className="avatar">
              <img src={item.avatar_url} alt="User" />
            </div>
            <div>
              <h3>{item.login}</h3>
            </div>
            <button onClick={() => removeFromFavorites(item.login)}>
              Remove from favorites
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Favorites;
