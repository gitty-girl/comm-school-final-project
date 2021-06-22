import styles from "./UserDetails.module.css";

import { ToggleFavoriteButton, Detail, Names } from "../";

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

  return (
    <>
      <div>
        <div className={styles.avatarWrapper}>
          <img src={avatar_url} alt="User Avatar" className={styles.avatar} />
        </div>

        <Names name={name} login={login} url={url} />
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
