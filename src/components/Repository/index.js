import styles from "./Repository.module.css";

import { Detail } from "../";

function Repository({ repository }) {
  const { id, name, description, html_url, stargazers_count, forks_count } =
    repository;
  return (
    <div className={styles.item} key={id}>
      <ul>
        <Detail title="Repository name" value={name} />
        <Detail
          title="Description"
          value={description ? description : "Not Found"}
        />
        <Detail title="Stargazers" value={stargazers_count} />
        <Detail title="Forks" value={forks_count} />
      </ul>
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        title="Check on Github"
      >
        Check on Github
      </a>
    </div>
  );
}

export default Repository;
