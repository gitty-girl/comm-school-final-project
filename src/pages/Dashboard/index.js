import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Dashboard.module.css";

import { getUsers, getUserDetails } from "../../api";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [logins, setLogins] = useState([]);
  const loginsCount = logins.length || 0;

  useEffect(() => {
    setLoading(true);

    getUsers({ page })
      .then(({ items }) => {
        setUsers((prev) => [...prev, ...items]);

        setLogins((prev) => [...prev, ...items.map((i) => i.login)]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page]);

  useEffect(() => {
    if (loginsCount > 0) {
      logins.map((login) => {
        return getUserDetails({ login }).then((data) => {
          setUsers((prev) => {
            return prev.map((user) => {
              if (user.id === data.id) {
                return { ...user, ...data };
              }

              return user;
            });
          });

          // console.log({ login, loginsCount, logins });

          setLogins((prev) => prev.filter((l) => l !== login));
        });
      });
    }
  }, [loginsCount]);

  // console.log({ page, users });

  function onLoadMoreButtonClick() {
    setPage((prev) => prev + 1);
  }

  return (
    <div>
      Dashboard page
      <div className={styles.listWrapper}>
        {users.map((user) => {
          const { id, login, avatar_url, followers, following, public_repos } =
            user;

          return (
            <div key={id} className={styles.listItem}>
              <img src={avatar_url} alt={login} className={styles.avatar} />

              <div className={styles.infoWrapper}>
                <ul className={styles.info}>
                  <li className={styles.infoDetail}>
                    <span>Username: </span> <span>{login}</span>
                  </li>
                  <li className={styles.infoDetail}>
                    <span>Followers: </span> <span>{followers}</span>
                  </li>
                  <li className={styles.infoDetail}>
                    <span>Following: </span> <span>{following}</span>
                  </li>
                  <li className={styles.infoDetail}>
                    <span>Public Repos: </span> <span>{public_repos}</span>
                  </li>
                </ul>

                <Link to={`/user/${login}`} className={styles.seeMore}>
                  See more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={onLoadMoreButtonClick} className={styles.loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default Dashboard;
