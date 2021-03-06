import styles from "./UserItem.module.css";

import { Link } from "react-router-dom";

import { Detail, Names } from "../";

function UserItem({ user }) {
  const { id, name, login, avatar_url, followers, following, public_repos } =
    user;

  return (
    <div key={id} className={styles.listItem}>
      <img src={avatar_url} alt={login} className={styles.avatar} />

      <div className={styles.infoWrapper}>
        <Names login={login} name={name} />

        <ul className={styles.info}>
          <Detail title="Followers" value={followers} />
          <Detail title="Following" value={following} />
          <Detail title="Public Repos" value={public_repos} />
        </ul>
      </div>

      <div>
        <Link to={`/user/${login}`} className={styles.seeMore}>
          View more
        </Link>
      </div>
    </div>
  );
}

export default UserItem;
