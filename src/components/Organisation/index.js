import styles from "./Organisation.module.css";

function Organisation({ organisation }) {
  const { login, avatar_url, url } = organisation;
  const githubURL = url.replace("api.", "");

  return (
    <div className={styles.item}>
      <div className={styles.avatarWrapper}>
        <a
          href={githubURL}
          target="_blank"
          rel="noopener noreferrer"
          title={login}
          className={styles.link}
        >
          <img src={avatar_url} alt={login} className={styles.avatar} />
        </a>
      </div>
    </div>
  );
}

export default Organisation;
