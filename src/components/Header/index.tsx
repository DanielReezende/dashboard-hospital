
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/images/logo.svg" alt="" />

      <div className={styles["header-actions"]}>
        <button>user</button>
        <button>notification</button>
      </div>
    </header>
  );
}
