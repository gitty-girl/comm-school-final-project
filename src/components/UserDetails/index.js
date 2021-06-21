import styles from "./UserDetails.module.css";

import { ToggleFavoriteButton, Detail } from "../";

function UserDetails({ user }) {
  const {
    avatar_url,
    url,
    login,
    name,
    bio,
    public_repos,
    following,
    followers,
  } = user;

  console.log(user);

  return (
    <>
      <div>
        <div className={styles.avatarWrapper}>
          <img src={avatar_url} alt="User Avatar" className={styles.avatar} />
        </div>
        <div>
          <h1 className={styles.names}>
            <span className={styles.pName}>{name}</span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={login}
              className={styles.link}
            >
              <span className={styles.pNickname}>{login}</span>
            </a>
          </h1>
        </div>
      </div>

      <ToggleFavoriteButton user={user} />

      {bio !== "" && (
        <div className={styles.bioWrapper}>
          <p className={styles.bio}>{bio}</p>
        </div>
      )}

      <div>
        <ul className={styles.list}>
          <Detail title="Followers" value={followers} />
          <Detail title="Following" value={following} />
          <Detail title="Public Repos" value={public_repos} />
        </ul>
      </div>
    </>
  );
}

export default UserDetails;
