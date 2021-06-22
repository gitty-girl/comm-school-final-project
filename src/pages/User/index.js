import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import styles from "./User.module.css";

import {
  getUserDetails,
  getUserOrganisations,
  getUserRepositories,
} from "../../api";

import {
  UserDetails,
  RepositoriesListing,
  OrganisationsListing,
  Loader,
} from "../../components";

function User() {
  const { login } = useParams();

  const [currentUser, setCurrentUser] = useState({});
  const [repositories, setRepositories] = useState([]);
  const [organisations, setOrganisations] = useState([]);

  const [loading, setLoading] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    // get user
    getUserDetails({ login })
      .then((data) => setCurrentUser(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

    // get user organisations
    getUserOrganisations({ login })
      .then((data) => {
        setOrganisations(data.slice(0, 3));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

    // get user repositories
    getUserRepositories({ login })
      .then((data) => {
        setRepositories(data.slice(0, 10));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [login]);

  return (
    <main className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <aside className={styles.userDetails}>
            <UserDetails user={currentUser} />

            {organisations.length > 0 && (
              <OrganisationsListing organisations={organisations} />
            )}
          </aside>

          <section className={styles.repositories}>
            {repositories.length > 0 && (
              <RepositoriesListing repositories={repositories} />
            )}
          </section>
        </>
      )}
    </main>
  );
}

export default User;
