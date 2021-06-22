import styles from "./UsersListing.module.css";

import { UserItem } from "../../components";

function UsersListing({ users }) {
  return (
    <div className={styles.listWrapper}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersListing;
