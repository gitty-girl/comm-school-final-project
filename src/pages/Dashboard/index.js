import { useState, useEffect } from "react";

import styles from "./Dashboard.module.css";

import { getUsers, getUserDetails } from "../../api";

import { UsersListing, Loader } from "../../components";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [logins, setLogins] = useState([]);
  const loginsCount = logins.length || 0;

  useEffect(() => {
    setLoading(true);

    if (users.length !== page * 20) {
      getUsers({ page })
        .then(({ items }) => {
          setUsers((prev) => [...prev, ...items]);

          setLogins((prev) => [...prev, ...items.map((i) => i.login)]);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [page, users.length]);

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

          setLogins((prev) => prev.filter((l) => l !== login));
        });
      });
    }
    return () => {
      setLoading(false);
      setError("");
    };
  }, [loginsCount, logins]);

  function onLoadMoreButtonClick() {
    setPage((prev) => prev + 1);
  }

  return (
    <section className={styles.container}>
      {error && <h1>{error}</h1>}
      <UsersListing users={users} />

      <div className={styles.wrapper}>
        {loading ? (
          <Loader />
        ) : (
          <button onClick={onLoadMoreButtonClick} className={styles.loadMore}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
