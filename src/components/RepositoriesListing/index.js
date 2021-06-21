import styles from "./RepositoriesListing.module.css";

import { Repository } from "../";

function RepositoriesListing({ repositories }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Repositories</h2>
      <div className={styles.items}>
        {repositories.map((repository) => (
          <Repository repository={repository} key={repository.id} />
        ))}
      </div>
    </div>
  );
}

export default RepositoriesListing;
