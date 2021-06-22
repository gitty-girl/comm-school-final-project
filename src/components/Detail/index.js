import styles from "./Detail.module.css";

function Detail({ title, value }) {
  return (
    <li className={styles.detail}>
      <span className={styles.title}>{`${title}: \u00A0`} </span>
      <span className={styles.value}>{value}</span>
    </li>
  );
}

export default Detail;
