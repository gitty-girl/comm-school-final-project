import styles from "./Names.module.css";

function Names({ name, login }) {
  return (
    <div>
      <h1 className={styles.names}>
        {name && <span className={styles.pName}>{name}</span>}

        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noopener noreferrer"
          title={login}
          className={styles.link}
        >
          <span className={styles.pNickname}>{login}</span>
        </a>
      </h1>
    </div>
  );
}

export default Names;
