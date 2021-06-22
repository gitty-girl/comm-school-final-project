import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.ring} />
    </div>
  );
};

export default Loader;
